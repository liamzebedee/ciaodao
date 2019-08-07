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




// export const history = createBrowserHistory()
// export const history = !process.browser
//     ? createMemoryHistory({
//         initialEntries: ['']
//      })
//    : createBrowserHistory();

// const createRootReducer = (history) => combineReducers({
//     ...reducers,
//     // router: connectRouter(history),
// });
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
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

// export function configureStoreClient(store) {
//     const persistedReducer = persistReducer(persistConfig, rootReducer)

//     const middleware = [
//         thunk
//     ]
//     const store = createStore(
//         persistedReducer,
//         initialState,
//         composeEnhancers(
//             applyMiddleware(...middleware),
//         )
//     )

//     let persistor = persistStore(store)

//     return { persistor, store }
// }