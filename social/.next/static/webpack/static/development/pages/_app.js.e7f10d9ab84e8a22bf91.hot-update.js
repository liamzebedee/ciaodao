webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/wrapper/KebabChain.js":
/*!******************************************!*\
  !*** ./components/wrapper/KebabChain.js ***!
  \******************************************/
/*! exports provided: KebabChain, with3Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KebabChain", function() { return KebabChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "with3Box", function() { return with3Box; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _3box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! 3box */ "./node_modules/3box/lib/3box.js");
/* harmony import */ var _3box__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_3box__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _3box_Cover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../3box/Cover */ "./components/3box/Cover.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);











var _jsxFileName = "/Users/liamz/Documents/open-source/everest/social/components/wrapper/KebabChain.js";
// import React, { Component } from 'react';
// import {
//   Switch,
//   Route,
//   withRouter
// } from 'react-router-dom';



var Box3Context = react__WEBPACK_IMPORTED_MODULE_13___default.a.createContext({});
var KebabChain =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(KebabChain, _Component);

  function KebabChain(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, KebabChain);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(KebabChain).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleLogin",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var history, addresses, myAddress, box, myProfile, chatSpace, myDid, loggedIn;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              history = _this.props.history;
              _context.next = 3;
              return window.ethereum.enable();

            case 3:
              addresses = _context.sent;
              myAddress = addresses[0];

              _this.setState({
                disableLogin: true
              }); // get my box and profile


              _context.next = 8;
              return _3box__WEBPACK_IMPORTED_MODULE_11___default.a.openBox(myAddress, window.ethereum, {});

            case 8:
              box = _context.sent;
              _context.next = 11;
              return _3box__WEBPACK_IMPORTED_MODULE_11___default.a.getProfile(myAddress);

            case 11:
              myProfile = _context.sent;
              _context.next = 14;
              return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
                return box.onSyncDone(resolve);
              });

            case 14:
              _context.next = 16;
              return box.openSpace('3chat');

            case 16:
              chatSpace = _context.sent;
              myDid = chatSpace.DID; // set all to state and continue

              loggedIn = true;

              _this.setState({
                chatSpace: chatSpace,
                box: box,
                myProfile: myProfile,
                myAddress: myAddress,
                myDid: myDid,
                loggedIn: loggedIn
              });

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      loggedIn: false,
      box: {},
      chatSpace: {},
      myAddress: '',
      myDid: '',
      myProfile: {},
      isAppReady: false,
      topicList: [],
      topicManager: {},
      disableLogin: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(KebabChain, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var box = this.state.box; // if you haven't openedBox, return to login

      this.setState({
        isAppReady: true
      });
      window.ethereum.enable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isAppReady = _this$state.isAppReady,
          chatSpace = _this$state.chatSpace,
          topicManager = _this$state.topicManager,
          topicList = _this$state.topicList,
          myProfile = _this$state.myProfile,
          myAddress = _this$state.myAddress,
          myDid = _this$state.myDid,
          disableLogin = _this$state.disableLogin,
          loggedIn = _this$state.loggedIn;
      var contextValue = {
        myProfile: myProfile,
        myAddress: myAddress,
        myDid: myDid
      };
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Box3Context.Provider, {
        value: contextValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return KebabChain;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);
function with3Box(Child) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Box3Context.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, function (props2) {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Child, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, props2, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }));
    });
  };
}

/***/ })

})
//# sourceMappingURL=_app.js.e7f10d9ab84e8a22bf91.hot-update.js.map