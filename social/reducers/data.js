import { LOAD_BOX3_COMPLETE, WEB3_LOADING, LOAD_BOX3_PENDING } from "../sagas";

const initialState = {
    loadingWeb3: false,
    loadingBox3: false,
    loggedIn: false,
    myProfile: null,
    myAddress: null,
    myDid: null,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case WEB3_LOADING:
            return {
                ...state,
                loadingWeb3: true
            }
        case LOAD_BOX3_PENDING:
            return {
                ...state,
                loadingWeb3: false,
                loadingBox3: true
            }
        case LOAD_BOX3_COMPLETE:
            return {
                ...state,
                ...action.payload,
                loadingBox3: false,
                loggedIn: true
            }
        default:
            return state
    }
}