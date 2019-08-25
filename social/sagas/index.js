import { call, put, takeLatest, select } from 'redux-saga/effects'
import Box from '3box';
import Router from 'next/router'
import { persistor } from '../pages/_app';
import Web3 from 'web3';
import { ethers, ContractFactory } from 'ethers';
import { MEMBERSHIP_TYPE_TOKEN, MEMBERSHIP_TYPE_INVITE } from '../components/SpacesPage';

let provider
let chainId = null

export const LOAD_WEB3 = 'LOAD_WEB3'
export const LOAD_BOX3 = 'LOAD_BOX3'
export const WEB3_LOADING = 'WEB3_LOADING'
export const LOAD_BOX3_PENDING = 'LOAD_BOX3_PENDING'
export const LOAD_BOX3_COMPLETE = 'LOAD_BOX3_COMPLETE'

export const VISIT_SPACES = 'VISIT_SPACES'

export const CREATE_GROUP = 'CREATE_GROUP'
export const CREATE_GROUP_WEB3_BEGIN = 'CREATE_GROUP_WEB3_BEGIN'

function getArtifact(name) {
    const artifact = require(`../chain/${name}.json`)
    return artifact
}

async function getDeployment(artifact) {
    let keys = Object.keys(artifact.networks)
    keys = keys.sort()
    if(keys.length === 0) throw new Error("no deployments")
    const deploy = keys[chainId]
    if(!deploy) throw new Error("no deployment")
    return deploy.address.toLowerCase()
}


async function syncBox(box) {
    await new Promise((res, rej) => {
        box.onSyncDone(res)
    })
}

export function* loadWeb3() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    let network = yield call(provider.getNetwork)
    chainId = network.chainId
}

export function* loadBox3() {
    yield put({
        type: WEB3_LOADING
    })
    const addresses = yield call(window.ethereum.enable)
    const myAddress = addresses[0];

    yield put({
        type: LOAD_BOX3_PENDING
    })
    // get my box and profile
    const box = yield call(Box.openBox, myAddress, window.ethereum, {})
    const myProfile = yield call(Box.getProfile, myAddress)

    // open 3chat space
    // const chatSpace = await box.openSpace('3chat');
    // const myDid = chatSpace.DID;

    // // set all to state and continue
    // const loggedIn = true
    // this.setState({ chatSpace, box, myProfile, myAddress, myDid, loggedIn });


    yield put({
        type: LOAD_BOX3_COMPLETE,
        payload: {
            // box,
            myProfile,
            myAddress,
            loggedIn: true
            // box, myProfile, myAddress
        }
    })



    yield call(persistor.flush)
}

export function* visitSpaces() {
    Router.push('/spaces')
}

export function* loadSpace() {
    Box.getSpace(address, name, opts)
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
        provider 
    )

    debugger
    
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

    let receipt = call(tx.wait)
    let spaceEvent = receipt.events.pop()
    debugger
    console.log(spaceEvent)
}

export default function* () {
    yield takeLatest(LOAD_WEB3, loadWeb3)
    yield takeLatest(LOAD_BOX3, loadBox3)
    yield takeLatest(VISIT_SPACES, visitSpaces)
    yield takeLatest(CREATE_GROUP, createGroup)
}
