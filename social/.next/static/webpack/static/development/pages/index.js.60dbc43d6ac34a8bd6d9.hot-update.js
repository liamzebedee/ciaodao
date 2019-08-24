webpackHotUpdate("static/development/pages/index.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: connectBox3, visitSpaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectBox3", function() { return connectBox3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitSpaces", function() { return visitSpaces; });
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");

function connectBox3() {
  return {
    type: _sagas__WEBPACK_IMPORTED_MODULE_0__["LOAD_BOX3"]
  };
}
function visitSpaces() {
  return {
    type: _sagas__WEBPACK_IMPORTED_MODULE_0__["VISIT_SPACES"]
  };
}

/***/ }),

/***/ "./components/LandingPage.js":
/*!***********************************!*\
  !*** ./components/LandingPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PageTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageTemplate */ "./components/PageTemplate.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


var _jsxFileName = "/Users/liamz/Documents/open-source/everest/social/components/LandingPage.js";

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    \n    display: inline-block;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-align: center;\n    flex: 1;\n    flex-direction: column;\n\n\n    a {\n        color: black;\n        text-decoration: none;\n        :hover {\n            opacity: 0.7;\n        }\n    }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    flex: 1;\n    flex-direction: column;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    border: 1px solid #ddd;\n    border-radius: 1px;\n    padding: 1em;\n    margin: 1em;\n    flex: 1;\n    box-shadow: 1px 1px #ddd;\n    height: 250px;\n    max-width: 350px;\n    flex-spacing: space-around;\n    font-size: 16px;\n    p {\n        line-height: 2;\n    }\n\n    h2 {\n        line-height: 1.2;\n    }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    padding: 3rem;\n    flex-direction: row;\n    justify-content: space-evenly;\n    margin: 0 3em;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding: 0 .5em;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\na {\n    color: black;\n    text-decoration: none;\n    :hover {\n        opacity: 0.7;\n    }\n}\nfont-size: 80%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nfont-size: 62px;\nfont-family: \"Helvetica Neue\", sans-serif;\nline-height: 1.2;\ncolor: rgb(51, 51, 51);\npadding-top: 0em;\nmargin: 3rem;\nmargin-bottom: 1rem;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-align: center;\n    font-size: 22px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    flex: 1;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    display: flex;\n    flex-flow: row wrap;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    ", "\n    justify-self: flex-end;\n    justify-items: flex-end;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    ", "\n    justify-self: flex-start;\n    flex: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    padding: 2em;\n    background: #eee;\n    display: flex;\n    flex-direction: row;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    text-transform: lowercase;\n    font-family: 'Audiowide', cursive;\n    color: #333;\n    align-self: center;\n    flex: 1;\n    padding-right: 1em;\n    padding-left: 1em;\n    font-size: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var AppTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject());
var HeaderBar = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var Col = "\n    display: flex;\n    flex-direction: column;\n    flex-flow: row wrap;\n";
var ColL = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3(), Col);
var ColR = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject4(), Col);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject5());
var SearchStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject6());
var HeroBlock = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject7());
var Hero = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].h1(_templateObject8());
var CallToAction = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject9());
var Padding = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span(_templateObject10());
var Blocks = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject11());
var Block = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject12());
var FooterCtn = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject13());
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].footer(_templateObject14());
var AddAnEntryCTA = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject15());



function LandingPage(_ref) {
  var connectBox3 = _ref.connectBox3,
      loadingWeb3 = _ref.loadingWeb3,
      loadingBox3 = _ref.loadingBox3,
      loggedIn = _ref.loggedIn,
      myAddress = _ref.myAddress;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PageTemplate__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeroBlock, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Hero, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "DAOBOOK.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, loggedIn ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Logged in as ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, myAddress), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "btn btn-success",
    onClick: _actions__WEBPACK_IMPORTED_MODULE_6__["visitSpaces"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Visit my spaces")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    disabled: loadingBox3 || loadingWeb3,
    onClick: connectBox3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Connect with 3Box")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FooterCtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Built with \uD83E\uDDE8 by ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://twitter.com/liamzebedee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "@liamzebedee"), " \xB7 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/liamzebedee/retrust",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "github"), " \xB7 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://etherscan.io/address/0x201DF8201D9d0DB92A45A21A50E4fcbB00b18839",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "shout some eth"))));
}

function mapStateToProps(state, props) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data);
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])({
    connectBox3: _actions__WEBPACK_IMPORTED_MODULE_6__["connectBox3"],
    visitSpaces: _actions__WEBPACK_IMPORTED_MODULE_6__["visitSpaces"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(LandingPage));

/***/ }),

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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["call"])(syncBox, box);

        case 16:
          _context.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_3__["put"])({
            type: LOAD_BOX3_COMPLETE,
            payload: {
              box: box,
              myProfile: myProfile,
              myAddress: myAddress,
              loggedIn: true // box, myProfile, myAddress

            }
          });

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
//# sourceMappingURL=index.js.60dbc43d6ac34a8bd6d9.hot-update.js.map