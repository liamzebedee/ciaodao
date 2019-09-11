import { LOAD_BOX3, VISIT_SPACES, CREATE_GROUP, LOAD_WEB3, SUBMIT_THING, SPACES_LOAD, SPACE_LOAD, LOAD_POSTS } from "../sagas";

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

export function loadSpace(addr) {
    return {
        type: SPACE_LOAD,
        payload: {
            addr,
        }
    }
}

export function submitThing() {
    return {
        type: SUBMIT_THING
    }
}

export function addUserProfile(user, profile) {
    return {
        type: 'ADD_USER_PROFILE',
        payload: {
            user,
            profile
        }
    }
}

export function loadPosts(posts, spaceAddress) {
    return {
        type: LOAD_POSTS,
        payload: {
            posts,
            spaceAddress
        }
    }
}