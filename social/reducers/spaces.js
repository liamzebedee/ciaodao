import { CREATE_GROUP_WEB3_SUCCESS } from "../sagas";

const initialState = {
    data: {},
    list: [],
    createdSpaces: []
}

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case CREATE_GROUP_WEB3_SUCCESS:
            const { space } = action.payload
            const { createdSpaces } = state
            return {
                ...state,
                createdSpaces: createdSpaces.concat([ space ])
            }
        default:
            return state
    }
}