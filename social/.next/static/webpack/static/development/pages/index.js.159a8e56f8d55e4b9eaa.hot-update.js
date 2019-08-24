webpackHotUpdate("static/development/pages/index.js",{

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
      loggedIn = _ref.loggedIn;
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
  }, loggedIn ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    disabled: loadingBox3 || loadingWeb3,
    onClick: connectBox3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Connect with 3Box")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FooterCtn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Built with \uD83E\uDDE8 by ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://twitter.com/liamzebedee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "@liamzebedee"), " \xB7 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/liamzebedee/retrust",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "github"), " \xB7 ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://etherscan.io/address/0x201DF8201D9d0DB92A45A21A50E4fcbB00b18839",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "shout some eth"))));
}

function mapStateToProps(state, props) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data);
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])({
    connectBox3: _actions__WEBPACK_IMPORTED_MODULE_6__["connectBox3"]
  }, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(LandingPage));

/***/ })

})
//# sourceMappingURL=index.js.159a8e56f8d55e4b9eaa.hot-update.js.map