import { LOAD_BOX3, VISIT_SPACES, CREATE_GROUP, LOAD_WEB3, SUBMIT_THING, SPACES_LOAD } from "../sagas";

export function loadWeb3() {
    return {
        type: LOAD_WEB3
    }
}

export function loadBox3() {
    return {
        type: LOAD_BOX3
    }
}

export function visitSpaces() {
    return {
        type: VISIT_SPACES
    }
}

export function createSpace(name, membershipType, addressDetails) {
    return {
        type: CREATE_GROUP,
        payload: {
            name, membershipType, addressDetails
        }
    }
}

export function loadSpaces() {
    return {
        type: SPACES_LOAD
    }
}

export function submitThing() {
    return {
        type: SUBMIT_THING
    }
}