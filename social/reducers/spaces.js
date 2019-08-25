import { CREATE_GROUP_WEB3_SUCCESS } from "../sagas";

const initialState = {
    data: {},
    createdSpaces: []
}

function Space(addr, name) {
    this.addr = addr
    this.members = []
    this.name = name
}

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case CREATE_GROUP_WEB3_SUCCESS:
            const { space, name } = action.payload
            const { createdSpaces, data } = state
            return {
                ...state,
                createdSpaces: createdSpaces.concat([ space ]),
                data: {
                    ...data,
                    [space]: new Space(space, name)
                }
            }
        default:
            return state
    }
}