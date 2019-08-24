webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");








var persistConfig = {
  key: 'root',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_6___default.a
};
var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_4__["default"])();
var composeEnhancers = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])({});
var initialState = {};
function configureStore(options) {
  var middleware = [sagaMiddleware];
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)));
  sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_7__["default"]);
  return store;
}

/***/ })

})
//# sourceMappingURL=_app.js.fe3a4c3deb81c7ea7b6d.hot-update.js.map