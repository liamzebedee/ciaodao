webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/data.js":
/*!**************************!*\
  !*** ./reducers/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");


var initialState = {
  loadingWeb3: false,
  loadingBox3: false,
  loggedIn: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _sagas__WEBPACK_IMPORTED_MODULE_1__["WEB3_LOADING"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loadingWeb3: true
      });

    case _sagas__WEBPACK_IMPORTED_MODULE_1__["LOAD_BOX3_PENDING"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loadingWeb3: false,
        loadingBox3: true
      });

    case _sagas__WEBPACK_IMPORTED_MODULE_1__["LOAD_BOX3_COMPLETE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loadingWeb3: false
      }, action.payload);

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.80e09c4aedba7249d5c2.hot-update.js.map