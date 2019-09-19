import { call, put, takeLatest, select, fork, cancelled, take, takeEvery, takeLeading } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import Box from '3box';
import Router from 'next/router'
import { persistor } from '../pages/_app';
import Web3 from 'web3';
import { ethers, ContractFactory } from 'ethers';
import { MEMBERSHIP_TYPE_TOKEN, MEMBERSHIP_TYPE_INVITE } from '../components/pages/SpacesPage';
import { submitThing } from '../actions';
import { getMembers } from '../selectors';

let provider
let signer 
let myAddress

let mySpace 

const MAINNET = 1

let chainId = null

let box
export { box }

export const LOAD_WEB3 = 'LOAD_WEB3'
export const LOAD_BOX3 = 'LOAD_BOX3'
export const WEB3_LOADING = 'WEB3_LOADING'
export const WEB3_LOADED = 'WEB3_LOADED'
export const BOX3_LOADED = 'BOX3_LOADED'
export const LOAD_BOX3_PENDING = 'LOAD_BOX3_PENDING'
export const LOAD_BOX3_COMPLETE = 'LOAD_BOX3_COMPLETE'

export const VISIT_SPACES = 'VISIT_SPACES'

export const CREATE_GROUP = 'CREATE_GROUP'
export const CREATE_GROUP_WEB3_BEGIN = 'CREATE_GROUP_WEB3_BEGIN'
export const CREATE_GROUP_WEB3_SUCCESS = 'CREATE_GROUP_WEB3_SUCCESS'

export const SPACES_LOAD = 'SPACES_LOAD'
export const SPACE_LOAD = 'SPACE_LOAD'
export const SPACE_LOAD_SUCCESS = 'SPACE_LOAD_SUCCESS'

export const LOAD_POSTS = "LOAD_POSTS"
export const SPACE_LOAD_POSTS = 'SPACE_LOAD_POSTS'
export const SPACE_LOAD_POSTS_SUCCESS = 'SPACE_LOAD_POSTS_SUCCESS'

export const SUBMIT_THING = 'SUBMIT_THING'

export const FETCH_PROFILE = 'FETCH_PROFILE'

function getArtifact(name) {
    const artifact = require(`../chain/${name}.json`)
    return artifact
}

async function getDeployment(artifact) {
    let networks = artifact.networks
    let keys = Object.keys(artifact.networks)
    keys = keys.sort().reverse()
    if(keys.length === 0) throw new Error("no deployments")

    let deploy
    if(chainId) {
        deploy = networks[chainId]
        if(!deploy) throw new Error("no deployment")
    } else {
        deploy = networks[keys[0]]
    }
    
    return deploy.address.toLowerCase()
    
}


async function syncBox(box) {
    await new Promise((res, rej) => {
        box.onSyncDone(res)
    })
}

export function* loadWeb3() {
    yield put({
        type: WEB3_LOADING
    })
    const addresses = yield call(window.ethereum.enable)
    myAddress = addresses[0];
    // provider = new ethers.providers.Web3Provider(window.ethereum);
    provider = new ethers.providers.Web3Provider(web3.currentProvider)
    signer = provider.getSigner(0);
    // yield call(() => new Promise((res,rej) => {
    //     provider.on('ready', res)
    //     setTimeout(rej, 5000)
    // }))

    const network = yield call(() => provider.getNetwork())
    chainId = network.chainId
    // let network = yield call(provider.getNetwork)
    // chainId = MAINNET
    // chainId = MAINNET
    yield put({
        type: WEB3_LOADED,
        payload: {
            chainId,
        }
    })
}

export function* loadBox3() {
    yield put({
        type: LOAD_BOX3_PENDING
    })
    
    // get my box and profile
    box = yield call(Box.openBox, myAddress, window.ethereum, {})
    const myProfile = yield call(Box.getProfile, myAddress)
    const myDid = box.DID

    yield put({
        type: LOAD_BOX3_COMPLETE,
        payload: {
            // box,
            myProfile,
            myAddress,
            myDid,
            loggedIn: true
            // box, myProfile, myAddress
        }
    })

    yield call(persistor.flush)
}

export function* visitSpaces() {
    Router.push('/spaces')
}

export function* createGroup({ payload }) {
    const { name, membershipType, addressDetails } = payload

    yield put({
        type: CREATE_GROUP_WEB3_BEGIN
    })

    const artifact = getArtifact('SpaceCadetFactory')
    const addr = yield call(getDeployment, artifact)
    const contract = new ethers.Contract( 
        addr, 
        artifact.abi, 
        signer
    )
    
    let tx

    if(membershipType == MEMBERSHIP_TYPE_TOKEN) {
        tx = yield call(
            contract.functions.createERC20Space,
            name,
            addressDetails[0]
        )
    } else if(membershipType == MEMBERSHIP_TYPE_INVITE) {
        tx = yield call(
            contract.functions.createSpace,
            name,
            addressDetails
        )
    }

    let receipt = yield call(tx.wait)
    let spaceEvent = receipt.events.pop()

    let { args } = spaceEvent
    let { space } = args;
    
    yield put({
        type: CREATE_GROUP_WEB3_SUCCESS,
        payload: {
            name,
            space,
            chainId
        }
    })

    yield loadSpace(space)
}

export function* loadSpaces() {
    const spaces = yield select(state => state.spaces.data)
    
    // go through all and get updated metadata
    for(let space in Object.values(spaces)) {
        yield call(loadSpace, space.addr)
    }
}

// import { Resolver } from 'did-resolver-broke';
// import threeid from '3id-resolver';
// const { getResolver } = require('muport-did-resolver2')

async function getEthereumAddress(did) {
    let profile = await Box.getProfile(did)
    let validatedClaim = await Box.idUtils.verifyClaim(profile.proof_did, { audience: did })
    let record = validatedClaim.doc

    // let resolver = new Resolver({
    //     '3': () => threeid
    // })
    // let record = await resolver.resolve(did)
    
    for(let l of record.publicKey) {
        if(l.ethereumAddress) {
            return l.ethereumAddress
        }
    }
    console.error(record)
    throw new Error(`couldn't find ethereum address for did: ${did}`)
}

export function* loadPosts({ payload }) {
    const { posts, spaceAddress } = payload

    // Filter posts
    const spaceMembers = yield select(state => state.spaces.members)
    const unknownUsers = _.difference(
        getMembers(posts),
        spaceMembers
    )

    console.log(`New members:`)
    console.log(newMembers)

    // load profiles that we haven't loaded yet
    const artifact = getArtifact('Space')
    const contract = new ethers.Contract( 
        spaceAddress, 
        artifact.abi, 
        signer
    )

    let newMembers = []
    for(let did of unknownUsers) {
        let ethAddress = yield call(getEthereumAddress, did)

        // check membership
        // TODO(liamz) fully implement contract-wise

        // let isMember = yield call(() => contract.functions.isMember(ethAddress))
        let isMember = true
        if(isMember || 1) newMembers.push({ did, ethAddress })
    }

    console.log(newMembers)

    // console.log(posts)

    // const { profiles } = this.props
    // const newUsers = Array.from(new Set(posts.map(post => post.author).filter(did => !profiles[did])))

    // newUsers.map(did => {
    //     Box.getProfile(did).then(profile => {
    //         this.props.addUserProfile(did, profile)
    //     })
    // })

    // filterPosts
}

export function* fetchProfile({ payload: { did } }) {
    let profile = yield call(() => Box.getProfile(did))

    console.log(1,profile)
    return
    /*
    A user with a 3box profile will return something like:
    {
        emoji: "😉"
        image: [{…}]
        memberSince: "Alpha"
        name: "Liam Zebedee"
        proof_did: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE1NjcyNzQyMDksImlzcyI6ImRpZDptdXBvcnQ6UW1ZcVNHTEdYOWFWNTJNaUd4N29mZWpNdktoM3FzSjJ5U3JXQ3V3Mlhpa0prQSJ9.JRVlZ3sVlbUO_JrCa2_hWdQwwklTWLCkXNQnl_oYQU1bjqrCi3k8DgyNgbI2gnXPdaQwf8_ZJpAt3JRi7k6Qhg"
        proof_github: "https://gist.githubusercontent.com/liamzebedee/5407cac8e18f5c0cabfe47127556c7de/raw/3e8595c3a1a56a4311f8c2cf232fbccf7037046f/gistfile1.txt"
        proof_twitter: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE1NjczNDE2MDYsInN1YiI6ImRpZDptdXBvcnQ6UW1ZcVNHTEdYOWFWNTJNaUd4N29mZWpNdktoM3FzSjJ5U3JXQ3V3Mlhpa0prQSIsImNsYWltIjp7InR3aXR0ZXJfaGFuZGxlIjoibGlhbXplYmVkZWUiLCJ0d2l0dGVyX3Byb29mIjoiaHR0cHM6Ly90d2l0dGVyLmNvbS9saWFtemViZWRlZS9zdGF0dXMvMTE2ODE0MTQ2Mzk3ODQ2MzIzNSJ9LCJpc3MiOiJkaWQ6aHR0cHM6dmVyaWZpY2F0aW9ucy4zYm94LmlvIn0.CaRRGs7nZnOFV0bmmkrCHYEFK3bV27g7lGsVh6035aPxykolXKG5USRWUA0tOwz_WJTCcxqrzm1wy7ELN4XLqw"
        website: "https://24-7.dev"
    }

    whereas one without will look like:
    {
        memberSince: "Alpha"
        proof_did: "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpYXQiOjE1NjY3MTExMzUsImlzcyI6ImRpZDptdXBvcnQ6UW1SVE5QZWZtRmdhNjhHbnpZUHpRUjNac1lZTmRRb1RWZ0tDcHVCalpRclJUWiJ9.Sy366ESexD3JQ0qgNggsavWWcFk92mmfjvez9vMVUKE6wTf9gfWzG4Y5oOZHPb4s9hVVF9JErSleqaHpCx4MVA"
    }

    */
}


export default function* () {
    yield takeLatest(LOAD_WEB3, loadWeb3)
    yield takeLatest(LOAD_BOX3, loadBox3)
    yield takeLatest(VISIT_SPACES, visitSpaces)
    yield takeLatest(CREATE_GROUP, createGroup)
    yield takeLatest(SPACES_LOAD, loadSpaces)
    yield takeLatest(SUBMIT_THING, submitThing)
    yield takeLatest(LOAD_POSTS, loadPosts)
    yield takeLeading(FETCH_PROFILE, fetchProfile)
}
