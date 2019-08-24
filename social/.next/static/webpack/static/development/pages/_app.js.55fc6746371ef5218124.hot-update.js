webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/data.js":
/*!**************************!*\
  !*** ./reducers/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");

var initialState = {
  loggedIn: false
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _sagas__WEBPACK_IMPORTED_MODULE_0__["LOAD_BOX3_COMPLETE"]:
      return {};

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaces */ "./reducers/spaces.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./reducers/data.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  spaces: _spaces__WEBPACK_IMPORTED_MODULE_0__["default"]
}));

/***/ })

})
//# sourceMappingURL=_app.js.55fc6746371ef5218124.hot-update.js.map