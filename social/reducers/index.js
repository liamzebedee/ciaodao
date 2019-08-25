import spaces from './spaces'
import data from './data'
import flows from './flows'

import { combineReducers } from 'redux'

export default combineReducers({
    spaces,
    data,
    flows
})