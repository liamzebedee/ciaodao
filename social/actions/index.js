import { LOAD_BOX3, VISIT_SPACES } from "../sagas";

export function connectBox3() {
    return {
        type: LOAD_BOX3
    }
}

export function visitSpaces() {
    return {
        type: VISIT_SPACES
    }
}