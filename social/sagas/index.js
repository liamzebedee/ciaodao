import { call, put, takeLatest, select } from 'redux-saga/effects'

export const LOAD_BOX3 = 'LOAD_BOX3'
export const WEB3_LOADING = 'WEB3_LOADING'
export const LOAD_BOX3_PENDING = 'LOAD_BOX3_PENDING'
export const LOAD_BOX3_COMPLETE = 'LOAD_BOX3_COMPLETE'

export const VISIT_SPACES = 'VISIT_SPACES'

import Box from '3box';

import Router from 'next/router'
import { persistor } from '../pages/_app';


async function syncBox(box) {
    await new Promise((res, rej) => {
        box.onSyncDone(res)
    })
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


export default function* () {
    yield takeLatest(LOAD_BOX3, loadBox3)
    yield takeLatest(VISIT_SPACES, visitSpaces)
}
