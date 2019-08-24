webpackHotUpdate("static/development/pages/spaces.js",{

/***/ "./components/SpacesPage.js":
/*!**********************************!*\
  !*** ./components/SpacesPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PageTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageTemplate */ "./components/PageTemplate.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_spaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/spaces */ "./components/spaces.js");



var _jsxFileName = "/Users/liamz/Documents/open-source/everest/social/components/SpacesPage.js";








var MEMBERSHIP_TYPE_TOKEN = 'token';
var MEMBERSHIP_TYPE_INVITE = 'invite';
var addresses = ['0x863df6bfa4469f3ead0be8f9f2aae51c91a907b4', '0xb794F5eA0ba39494cE839613fffBA74279579268'];
var memes = ['OopsIKilledIt', 'Bitconeeeeeect', 'toThEMooN'];
var memedAddresses = addresses.map(function (addr, i) {
  var meme = memes[i];
  return addr.slice(0, addr.length - 2 - meme.length) + meme;
}).join('\n');

function Page(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      showCreateSpaceModal = _useState2[0],
      setShowCreateSpaceModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      membershipType = _useState4[0],
      setMembershipType = _useState4[1];

  function renderMembershipType() {
    switch (membershipType) {
      case MEMBERSHIP_TYPE_TOKEN:
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "Add ERC20 and ERC721 tokens:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
          as: "textarea",
          rows: "3",
          placeholder: memedAddresses,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }));

      case MEMBERSHIP_TYPE_INVITE:
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Add Ethereum addresses:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
          as: "textarea",
          rows: "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }));

      default:
        return null;
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PageTemplate__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "My spaces"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return setShowCreateSpaceModal(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Create space"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_spaces__WEBPACK_IMPORTED_MODULE_10__["Spaces"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    show: showCreateSpaceModal,
    onHide: function onHide() {
      return setShowCreateSpaceModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Create a space")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
    controlId: "exampleForm.ControlInput1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    "class": "fas fa-layer-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), " Name"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
    type: "text",
    placeholder: "Indian Kebabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
    controlId: "exampleForm.ControlInput1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "fa fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), " How can people join?"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "outline-primary",
    active: membershipType == MEMBERSHIP_TYPE_TOKEN,
    onClick: function onClick() {
      setMembershipType(MEMBERSHIP_TYPE_TOKEN);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "By token"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "outline-secondary",
    active: membershipType == MEMBERSHIP_TYPE_INVITE,
    onClick: function onClick() {
      setMembershipType(MEMBERSHIP_TYPE_INVITE);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "By invite"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), renderMembershipType(membershipType)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      setShowCreateSpaceModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "primary",
    onClick: function onClick() {
      setShowCreateSpaceModal(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Submit"))));
}

function mapStateToProps(state, props) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data);
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({}, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Page));

/***/ })

})
//# sourceMappingURL=spaces.js.896ef8a697746e03e9d6.hot-update.js.map