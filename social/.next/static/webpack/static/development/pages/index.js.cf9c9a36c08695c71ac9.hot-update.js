webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PageTemplate.js":
/*!************************************!*\
  !*** ./components/PageTemplate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/liamz/Documents/open-source/everest/social/components/PageTemplate.js";

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nhtml {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 4px;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n    background-color: #ddd;\n\n  :before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n  }\n\n  .loading {\n    background-color: #2980b9;\n    animation: loading 2s linear infinite;\n  }\n  \n  @keyframes loading {\n      from {left: -200px; width: 35%;}\n      50% {width: 20%;}\n      to {left: 100%;}\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex: 1;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-flow: row wrap;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    ", "\n    justify-self: flex-end;\n    justify-items: flex-end;\n    align-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    ", "\n    justify-self: flex-start;\n    flex: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding: 2em;\n    background: #eee;\n    display: flex;\n    flex-direction: row;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    text-transform: lowercase;\n    font-family: 'Audiowide', cursive;\n    color: #333;\n    align-self: center;\n    flex: 1;\n    padding-right: 1em;\n    padding-left: 1em;\n    font-size: 16px;\n\n    :hover {\n        cursor: pointer;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var AppTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1(_templateObject());
var HeaderBar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var Col = "\n    display: flex;\n    flex-direction: column;\n    flex-flow: row wrap;\n";
var ColL = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3(), Col);
var ColR = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4(), Col);
var Row = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5());
var SearchStyle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject6());
var LoadingBar = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject7());
var Style = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject8());




function Home(_ref) {
  var children = _ref.children,
      loading = _ref.loading;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Style, {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), children);
}

function mapStateToProps(state, props) {
  return {
    loading: state.loading
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Home));

/***/ })

})
//# sourceMappingURL=index.js.cf9c9a36c08695c71ac9.hot-update.js.map