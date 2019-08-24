webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: LOAD_BOX3, WEB3_LOADING, LOAD_BOX3_PENDING, LOAD_BOX3_COMPLETE, VISIT_SPACES, loadBox3, visitSpaces, loadSpace, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOX3", function() { return LOAD_BOX3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEB3_LOADING", function() { return WEB3_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOX3_PENDING", function() { return LOAD_BOX3_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BOX3_COMPLETE", function() { return LOAD_BOX3_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIT_SPACES", function() { return VISIT_SPACES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBox3", function() { return loadBox3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitSpaces", function() { return visitSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSpace", function() { return loadSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _callee; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _3box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 3box */ "./node_modules/3box/lib/3box.js");
/* harmony import */ var _3box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_3box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/_app */ "./pages/_app.js");




var _marked =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(loadBox3),
    _marked2 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(visitSpaces),
    _marked3 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(loadSpace),
    _marked4 =
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(_callee);


var LOAD_BOX3 = 'LOAD_BOX3';
var WEB3_LOADING = 'WEB3_LOADING';
var LOAD_BOX3_PENDING = 'LOAD_BOX3_PENDING';
var LOAD_BOX3_COMPLETE = 'LOAD_BOX3_COMPLETE';
var VISIT_SPACES = 'VISIT_SPACES';




function syncBox(_x) {
  return _syncBox.apply(this, arguments);
}

function _syncBox() {
  _syncBox = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(box) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (res, rej) {
              box.onSyncDone(res);
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee2);
  }));
  return _syncBox.apply(this, arguments);
}

function loadBox3() {
  var addresses, myAddress, box, myProfile;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function loadBox3$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: WEB3_LOADING
          });

        case 2:
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(window.ethereum.enable);

        case 4:
          addresses = _context.sent;
          myAddress = addresses[0];
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: LOAD_BOX3_PENDING
          });

        case 8:
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(_3box__WEBPACK_IMPORTED_MODULE_4___default.a.openBox, myAddress, window.ethereum, {});

        case 10:
          box = _context.sent;
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(_3box__WEBPACK_IMPORTED_MODULE_4___default.a.getProfile, myAddress);

        case 13:
          myProfile = _context.sent;
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: LOAD_BOX3_COMPLETE,
            payload: {
              // box,
              myProfile: myProfile,
              myAddress: myAddress,
              loggedIn: true // box, myProfile, myAddress

            }
          });

        case 16:
          _context.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(_pages_app__WEBPACK_IMPORTED_MODULE_6__["persistor"].flush);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
function visitSpaces() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function visitSpaces$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/spaces');

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function loadSpace() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function loadSpace$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _3box__WEBPACK_IMPORTED_MODULE_4___default.a.getSpace(address, name, opts);

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(LOAD_BOX3, loadBox3);

        case 2:
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["takeLatest"])(VISIT_SPACES, visitSpaces);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

/***/ })

})
//# sourceMappingURL=_app.js.dcc09e1bb1ddfa74247a.hot-update.js.map