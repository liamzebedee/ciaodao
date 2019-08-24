import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const composeEnhancers = composeWithDevTools({
});

const initialState = {
}

export function configureStore(options) {
    const middleware = [
        thunk
    ]
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
        )
    )
    
    return store
}
