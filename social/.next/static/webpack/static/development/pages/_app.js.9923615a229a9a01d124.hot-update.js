webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: LOAD_BOX3, LOAD_BOX3_COMPLETE, loadBox3, loadSpace, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOX3", function() { return LOAD_BOX3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOX3_COMPLETE", function() { return LOAD_BOX3_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBox3", function() { return loadBox3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSpace", function() { return loadSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _callee; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");



var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadBox3),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadSpace),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(_callee);


var LOAD_BOX3 = 'LOAD_BOX3';
var LOAD_BOX3_COMPLETE = 'LOAD_BOX3_COMPLETE';
function loadBox3() {
  var addresses, myAddress, box, myProfile;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadBox3$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(window.ethereum.enable());

        case 2:
          addresses = _context.sent;
          myAddress = addresses[0];
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: 'WEB3_LOADING'
          });

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(Box.openBox(myAddress, window.ethereum, {}));

        case 8:
          box = _context.sent;
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(Box.getProfile(myAddress));

        case 11:
          myProfile = _context.sent;
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {
            return box.onSyncDone(resolve);
          }));

        case 14:
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: LOAD_BOX3_COMPLETE,
            payload: {
              box: box,
              myProfile: myProfile,
              myAddress: myAddress
            }
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function loadSpace() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadSpace$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          Box.getSpace(address, name, opts);

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(LOAD_BOX3, loadBox3);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

/***/ })

})
//# sourceMappingURL=_app.js.9923615a229a9a01d124.hot-update.js.map