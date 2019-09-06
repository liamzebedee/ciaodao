import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import sagas from '../sagas'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        'flows'
    ]
}

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const initialState = {
}

export function configureStore(options) {
    const middleware = [
        sagaMiddleware,
    ]
    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
        )
    )
    sagaMiddleware.run(sagas)

    return store
}
