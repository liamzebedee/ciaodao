import { CREATE_GROUP_WEB3_SUCCESS } from "../sagas";

const FLOW_CREATE_GROUP = 'FLOW_CREATE_GROUP'

const initialState = {
    [FLOW_CREATE_GROUP]: {
        step: 'start'
    }
}


export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_GROUP_WEB3_SUCCESS:
            return {
                ...state,
                [FLOW_CREATE_GROUP]: {
                    ...action.payload,
                    step: 'success',
                }
            }
        default:
            return state
    }
}