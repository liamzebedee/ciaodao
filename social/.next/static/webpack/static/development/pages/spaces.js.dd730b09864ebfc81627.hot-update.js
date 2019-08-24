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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PageTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageTemplate */ "./components/PageTemplate.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _components_spaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/spaces */ "./components/spaces.js");


var _jsxFileName = "/Users/liamz/Documents/open-source/everest/social/components/SpacesPage.js";








function Page(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PageTemplate__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "My spaces"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_spaces__WEBPACK_IMPORTED_MODULE_8__["Spaces"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}

function mapStateToProps(state, props) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data);
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({}, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Page));

/***/ }),

/***/ "./components/spaces.js":
/*!******************************!*\
  !*** ./components/spaces.js ***!
  \******************************/
/*! exports provided: Spaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spaces", function() { return Spaces; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");





var _jsxFileName = "/Users/liamz/Documents/open-source/everest/social/components/spaces.js";



var MyLoader = function MyLoader() {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: 160,
    width: 400,
    speed: 2,
    primaryColor: "#f3f3f3",
    secondaryColor: "#ecebeb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
    cx: "10",
    cy: "20",
    r: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
    x: "25",
    y: "15",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
    cx: "10",
    cy: "50",
    r: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
    x: "25",
    y: "45",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
    cx: "10",
    cy: "80",
    r: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
    x: "25",
    y: "75",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("circle", {
    cx: "10",
    cy: "110",
    r: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
    x: "25",
    y: "105",
    rx: "5",
    ry: "5",
    width: "220",
    height: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

var Spaces =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Spaces, _React$Component);

  function Spaces() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Spaces);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Spaces).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Spaces, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(MyLoader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }));
    }
  }]);

  return Spaces;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/***/ }),

/***/ "./node_modules/react-content-loader/dist/react-content-loader.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-content-loader/dist/react-content-loader.es.js ***!
  \***************************************************************************/
/*! exports provided: default, BulletList, Code, Facebook, Instagram, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletList", function() { return BulletListStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return CodeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return FacebookStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return InstagramStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return ListStyle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var uid = (function () {
    return Math.random()
        .toString(36)
        .substring(2);
});

var Svg = (function (_a) {
    var rtl = _a.rtl, speed = _a.speed, interval = _a.interval, style = _a.style, width = _a.width, height = _a.height, baseUrl = _a.baseUrl, gradientRatio = _a.gradientRatio, animate = _a.animate, ariaLabel = _a.ariaLabel, children = _a.children, className = _a.className, uniquekey = _a.uniquekey, primaryColor = _a.primaryColor, primaryOpacity = _a.primaryOpacity, secondaryColor = _a.secondaryColor, secondaryOpacity = _a.secondaryOpacity, preserveAspectRatio = _a.preserveAspectRatio, props = __rest(_a, ["rtl", "speed", "interval", "style", "width", "height", "baseUrl", "gradientRatio", "animate", "ariaLabel", "children", "className", "uniquekey", "primaryColor", "primaryOpacity", "secondaryColor", "secondaryOpacity", "preserveAspectRatio"]);
    var idClip = uniquekey ? uniquekey + "-idClip" : uid();
    var idGradient = uniquekey ? uniquekey + "-idGradient" : uid();
    var rtlStyle = rtl ? { transform: 'scaleX(-1)' } : {};
    var keyTimes = "0; " + interval + "; 1";
    var dur = speed + "s";
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", __assign({ role: "img", style: __assign({}, style, rtlStyle), className: className, "aria-label": ariaLabel ? ariaLabel : null, viewBox: "0 0 " + width + " " + height, preserveAspectRatio: preserveAspectRatio }, props),
        ariaLabel ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("title", null, ariaLabel) : null,
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "0", width: width, height: height, clipPath: "url(" + baseUrl + "#" + idClip + ")", style: { fill: "url(" + baseUrl + "#" + idGradient + ")" } }),
        Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("defs", null,
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("clipPath", { id: idClip }, children),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", { id: idGradient },
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", { offset: "0%", stopColor: primaryColor, stopOpacity: primaryOpacity }, animate && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("animate", { attributeName: "offset", values: -gradientRatio + "; " + -gradientRatio + "; 1", keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" }))),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", { offset: "50%", stopColor: secondaryColor, stopOpacity: secondaryOpacity }, animate && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("animate", { attributeName: "offset", values: -gradientRatio / 2 + "; " + -gradientRatio / 2 + "; " + (1 +
                        gradientRatio / 2), keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" }))),
                Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", { offset: "100%", stopColor: primaryColor, stopOpacity: primaryOpacity }, animate && (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("animate", { attributeName: "offset", values: "0; 0; " + (1 + gradientRatio), keyTimes: keyTimes, dur: dur, repeatCount: "indefinite" })))))));
});

var defaultProps = {
    animate: true,
    ariaLabel: 'Loading interface...',
    baseUrl: '',
    gradientRatio: 2,
    height: 130,
    interval: 0.25,
    preserveAspectRatio: 'none',
    primaryColor: '#f0f0f0',
    primaryOpacity: 1,
    rtl: false,
    secondaryColor: '#e0e0e0',
    secondaryOpacity: 1,
    speed: 2,
    style: {},
    width: 400,
};
var InitialComponent = function (props) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "0", rx: "5", ry: "5", width: props.width, height: props.height })); };
var ContentLoader = function (props) {
    var mergedProps = __assign({}, defaultProps, props);
    var children = props.children ? (props.children) : (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InitialComponent, __assign({}, mergedProps)));
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Svg, __assign({}, mergedProps), children);
};

var FacebookStyle = (function (props) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, __assign({}, props),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "70", y: "15", rx: "4", ry: "4", width: "117", height: "6.4" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "70", y: "35", rx: "3", ry: "3", width: "85", height: "6.4" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "80", rx: "3", ry: "3", width: "350", height: "6.4" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "100", rx: "3", ry: "3", width: "380", height: "6.4" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "120", rx: "3", ry: "3", width: "201", height: "6.4" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", { cx: "30", cy: "30", r: "30" }))); });

var InstagramStyle = (function (props) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, __assign({}, props, { height: 480 }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", { cx: "30", cy: "30", r: "30" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "75", y: "13", rx: "4", ry: "4", width: "100", height: "13" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "75", y: "37", rx: "4", ry: "4", width: "50", height: "8" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "70", rx: "5", ry: "5", width: "400", height: "400" }))); });

var CodeStyle = (function (props) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, __assign({}, props),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "0", rx: "3", ry: "3", width: "70", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "80", y: "0", rx: "3", ry: "3", width: "100", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "190", y: "0", rx: "3", ry: "3", width: "10", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "15", y: "20", rx: "3", ry: "3", width: "130", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "155", y: "20", rx: "3", ry: "3", width: "130", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "15", y: "40", rx: "3", ry: "3", width: "90", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "115", y: "40", rx: "3", ry: "3", width: "60", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "185", y: "40", rx: "3", ry: "3", width: "60", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "60", rx: "3", ry: "3", width: "30", height: "10" }))); });

var ListStyle = (function (props) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, __assign({}, props),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "0", rx: "3", ry: "3", width: "250", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "20", y: "20", rx: "3", ry: "3", width: "220", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "20", y: "40", rx: "3", ry: "3", width: "170", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "0", y: "60", rx: "3", ry: "3", width: "250", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "20", y: "80", rx: "3", ry: "3", width: "200", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "20", y: "100", rx: "3", ry: "3", width: "80", height: "10" }))); });

var BulletListStyle = (function (props) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentLoader, __assign({}, props),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", { cx: "10", cy: "20", r: "8" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "25", y: "15", rx: "5", ry: "5", width: "220", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", { cx: "10", cy: "50", r: "8" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "25", y: "45", rx: "5", ry: "5", width: "220", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", { cx: "10", cy: "80", r: "8" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "25", y: "75", rx: "5", ry: "5", width: "220", height: "10" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", { cx: "10", cy: "110", r: "8" }),
    Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("rect", { x: "25", y: "105", rx: "5", ry: "5", width: "220", height: "10" }))); });

/* harmony default export */ __webpack_exports__["default"] = (ContentLoader);



/***/ })

})
//# sourceMappingURL=spaces.js.dd730b09864ebfc81627.hot-update.js.map