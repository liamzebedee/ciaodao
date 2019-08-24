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









function Page(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      showCreateSpaceModal = _useState2[0],
      setShowCreateSpaceModal = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PageTemplate__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "My spaces"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "btn btn-primary",
    onClick: setShowCreateSpaceModal(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Create space"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_spaces__WEBPACK_IMPORTED_MODULE_10__["Spaces"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    show: showCreateSpaceModal,
    onHide: setShowCreateSpaceModal(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Create space")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Woohoo, you're reading this text in a modal!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    variant: "secondary",
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Close"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Button, {
    variant: "primary",
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Save Changes"))));
}

function mapStateToProps(state, props) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.data);
}

function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({}, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Page));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@restart/context/forwardRef.js":
/*!*****************************************************!*\
  !*** ./node_modules/@restart/context/forwardRef.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? renderFn.name || renderFn.displayName : _ref$displayName;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  return Object.assign(_react.default.forwardRef || !allowFallback ? _react.default.forwardRef(render) : function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useCommittedRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useCommittedRef.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ __webpack_exports__["default"] = (useCommittedRef);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useEventCallback.js":
/*!*************************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useEventCallback.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useCommittedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCommittedRef */ "./node_modules/@restart/hooks/esm/useCommittedRef.js");


function useEventCallback(fn) {
  var ref = Object(_useCommittedRef__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 */

function useMergedRefs(refA, refB) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["default"] = (useMergedRefs);

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMounted.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useTimeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useTimeout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useWillUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");



/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 */

function useTimeout() {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var handle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var clear = function clear() {
    return clearTimeout(handle.current);
  };

  Object(_useWillUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(clear);
  return {
    set: function set(fn, ms) {
      if (!isMounted()) return;
      clear();
      handle.current = setTimeout(fn, ms);
    },
    clear: clear
  };
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useUpdatedRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useUpdatedRef.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpdatedRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 */

function useUpdatedRef(value) {
  var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useWillUnmount.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useWillUnmount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWillUnmount; });
/* harmony import */ var _useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUpdatedRef */ "./node_modules/@restart/hooks/esm/useUpdatedRef.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 */

function useWillUnmount(fn) {
  var onUnmount = Object(_useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__["default"])(fn);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/activeElement.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/activeElement.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = activeElement;

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

function activeElement(doc) {
  if (doc === void 0) {
    doc = (0, _ownerDocument.default)();
  }

  try {
    return doc.activeElement;
  } catch (e) {
    /* ie throws if no active element */
  }
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/class/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _addClass = _interopRequireDefault(__webpack_require__(/*! ./addClass */ "./node_modules/dom-helpers/class/addClass.js"));

exports.addClass = _addClass.default;

var _removeClass = _interopRequireDefault(__webpack_require__(/*! ./removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

exports.removeClass = _removeClass.default;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

exports.hasClass = _hasClass.default;
var _default = {
  addClass: _addClass.default,
  removeClass: _removeClass.default,
  hasClass: _hasClass.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/dom-helpers/events/filter.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/events/filter.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = filterEvents;

var _contains = _interopRequireDefault(__webpack_require__(/*! ../query/contains */ "./node_modules/dom-helpers/query/contains.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! ../query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js"));

function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget,
        target = e.target,
        matches = (0, _querySelectorAll.default)(top, selector);
    if (matches.some(function (match) {
      return (0, _contains.default)(match, target);
    })) handler.call(this, e);
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/events/index.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/events/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _on = _interopRequireDefault(__webpack_require__(/*! ./on */ "./node_modules/dom-helpers/events/on.js"));

exports.on = _on.default;

var _off = _interopRequireDefault(__webpack_require__(/*! ./off */ "./node_modules/dom-helpers/events/off.js"));

exports.off = _off.default;

var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter */ "./node_modules/dom-helpers/events/filter.js"));

exports.filter = _filter.default;

var _listen = _interopRequireDefault(__webpack_require__(/*! ./listen */ "./node_modules/dom-helpers/events/listen.js"));

exports.listen = _listen.default;
var _default = {
  on: _on.default,
  off: _off.default,
  filter: _filter.default,
  listen: _listen.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/dom-helpers/events/listen.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/events/listen.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _on = _interopRequireDefault(__webpack_require__(/*! ./on */ "./node_modules/dom-helpers/events/on.js"));

var _off = _interopRequireDefault(__webpack_require__(/*! ./off */ "./node_modules/dom-helpers/events/off.js"));

var listen = function listen() {};

if (_inDOM.default) {
  listen = function listen(node, eventName, handler, capture) {
    (0, _on.default)(node, eventName, handler, capture);
    return function () {
      (0, _off.default)(node, eventName, handler, capture);
    };
  };
}

var _default = listen;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/events/off.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/events/off.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var off = function off() {};

if (_inDOM.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/events/on.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-helpers/events/on.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var on = function on() {};

if (_inDOM.default) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/ownerDocument.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/ownerDocument.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/contains.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/contains.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

exports.default = _default;

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);
  return false;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/isWindow.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/query/isWindow.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/matches.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/query/matches.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = matches;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! ./querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js"));

var matchesCache;

function matches(node, selector) {
  if (!matchesCache && _inDOM.default) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesCache = nativeMatch ? function (node, selector) {
      return nativeMatch.call(node, selector);
    } : ie8MatchesSelector;
  }

  return matchesCache ? matchesCache(node, selector) : null;
}

function ie8MatchesSelector(node, selector) {
  var matches = (0, _querySelectorAll.default)(node.document || node.ownerDocument, selector),
      i = 0;

  while (matches[i] && matches[i] !== node) {
    i++;
  }

  return !!matches[i];
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/query/querySelectorAll.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/query/querySelectorAll.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = qsa;
// Zepto.js
// (c) 2010-2015 Thomas Fuchs
// Zepto.js may be freely distributed under the MIT license.
var simpleSelectorRE = /^[\w-]*$/;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

function qsa(element, selector) {
  var maybeID = selector[0] === '#',
      maybeClass = selector[0] === '.',
      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      isSimple = simpleSelectorRE.test(nameOnly),
      found;

  if (isSimple) {
    if (maybeID) {
      element = element.getElementById ? element : document;
      return (found = element.getElementById(nameOnly)) ? [found] : [];
    }

    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));
    return toArray(element.getElementsByTagName(selector));
  }

  return toArray(element.querySelectorAll(selector));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/style/getComputedStyle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = _getComputedStyle;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ "./node_modules/dom-helpers/util/camelizeStyle.js"));

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;
  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;
      prop = (0, _camelizeStyle.default)(prop);
      if (prop == 'float') prop = 'styleFloat';
      var current = node.currentStyle[prop] || null;
      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out

        if (rsLeft) runStyle.left = node.currentStyle.left;
        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px'; // Revert the changed values

        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/index.js":
/*!*************************************************!*\
  !*** ./node_modules/dom-helpers/style/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = style;

var _camelizeStyle = _interopRequireDefault(__webpack_require__(/*! ../util/camelizeStyle */ "./node_modules/dom-helpers/util/camelizeStyle.js"));

var _hyphenateStyle = _interopRequireDefault(__webpack_require__(/*! ../util/hyphenateStyle */ "./node_modules/dom-helpers/util/hyphenateStyle.js"));

var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(/*! ./getComputedStyle */ "./node_modules/dom-helpers/style/getComputedStyle.js"));

var _removeStyle = _interopRequireDefault(__webpack_require__(/*! ./removeStyle */ "./node_modules/dom-helpers/style/removeStyle.js"));

var _properties = __webpack_require__(/*! ../transition/properties */ "./node_modules/dom-helpers/transition/properties.js");

var _isTransform = _interopRequireDefault(__webpack_require__(/*! ../transition/isTransform */ "./node_modules/dom-helpers/transition/isTransform.js"));

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];

    if (!value && value !== 0) {
      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += _properties.transform + ": " + transforms + ";";
  }

  node.style.cssText += ';' + css;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/style/removeStyle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = removeStyle;

function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/end.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/transition/end.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _properties = _interopRequireDefault(__webpack_require__(/*! ./properties */ "./node_modules/dom-helpers/transition/properties.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! ../style */ "./node_modules/dom-helpers/style/index.js"));

function onEnd(node, handler, duration) {
  var fakeEvent = {
    target: node,
    currentTarget: node
  },
      backup;
  if (!_properties.default.end) duration = 0;else if (duration == null) duration = parseDuration(node) || 0;

  if (_properties.default.end) {
    node.addEventListener(_properties.default.end, done, false);
    backup = setTimeout(function () {
      return done(fakeEvent);
    }, (duration || 100) * 1.5);
  } else setTimeout(done.bind(null, fakeEvent), 0);

  function done(event) {
    if (event.target !== event.currentTarget) return;
    clearTimeout(backup);
    event.target.removeEventListener(_properties.default.end, done);
    handler.call(this);
  }
}

onEnd._parseDuration = parseDuration;
var _default = onEnd;
exports.default = _default;

function parseDuration(node) {
  var str = (0, _style.default)(node, _properties.default.duration),
      mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/index.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/transition/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _end = _interopRequireDefault(__webpack_require__(/*! ./end */ "./node_modules/dom-helpers/transition/end.js"));

exports.end = _end.default;

var _properties = _interopRequireDefault(__webpack_require__(/*! ./properties */ "./node_modules/dom-helpers/transition/properties.js"));

exports.properties = _properties.default;
var _default = {
  end: _end.default,
  properties: _properties.default
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
/*!************************************************************!*\
  !*** ./node_modules/dom-helpers/transition/isTransform.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/properties.js":
/*!***********************************************************!*\
  !*** ./node_modules/dom-helpers/transition/properties.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ../util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelize.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelize.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelizeStyle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = camelizeStyleName;

var _camelize = _interopRequireDefault(__webpack_require__(/*! ./camelize */ "./node_modules/dom-helpers/util/camelize.js"));

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */
var msPattern = /^-ms-/;

function camelizeStyleName(string) {
  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/util/hyphenate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hyphenate;
var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
/*!*********************************************************!*\
  !*** ./node_modules/dom-helpers/util/hyphenateStyle.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = hyphenateStyleName;

var _hyphenate = _interopRequireDefault(__webpack_require__(/*! ./hyphenate */ "./node_modules/dom-helpers/util/hyphenate.js"));

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/*!************************************************!*\
  !*** ./node_modules/dom-helpers/util/inDOM.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!( true && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/util/scrollbarSize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = scrollbarSize;

var _inDOM = _interopRequireDefault(__webpack_require__(/*! ./inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser =  true && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = ( true ? window : undefined).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map


/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/*!**************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/all.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/componentOrElement.js":
/*!*****************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/componentOrElement.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/elementType.js":
/*!**********************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/elementType.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types-extra/node_modules/react-is/index.js");

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }

  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/isRequiredForA11y.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/prop-types-extra/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types-extra/node_modules/react-is/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-extra/node_modules/react-is/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types-extra/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-bootstrap/es/AbstractNav.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/AbstractNav.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js");
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/es/NavContext.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/es/TabContext.js");









var noop = function noop() {};

var defaultProps = {
  role: 'tablist'
};
var AbstractNav = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'ul' : _ref$as,
      onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      role = _ref.role,
      onKeyDown = _ref.onKeyDown,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "onSelect", "activeKey", "role", "onKeyDown"]);

  var parentOnSelect = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var tabContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var getControlledId, getControllerId;

  if (tabContext) {
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      needsRefocus = _useState[0],
      setRefocus = _useState[1];

  var listNode = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var getNextActiveChild = function getNextActiveChild(offset) {
    if (!listNode.current) return null;
    var items = dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_3___default()(listNode.current, '[data-rb-event-key]:not(.disabled)');
    var activeChild = listNode.current.querySelector('.active');
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  var handleSelect = function handleSelect(key, event) {
    if (key == null) return;
    if (onSelect) onSelect(key, event);
    if (parentOnSelect) parentOnSelect(key, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (onKeyDown) onKeyDown(event);
    var nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveChild(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveChild(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset.rbEventKey, event);
    setRefocus(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (listNode.current && needsRefocus) {
      var activeChild = listNode.current.querySelector('[data-rb-event-key].active');
      if (activeChild) activeChild.focus();
    }
  }, [listNode, needsRefocus]);
  var mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, listNode);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: handleSelect
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: {
      role: role,
      // used by NavLink to determine it's role
      activeKey: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["makeEventKey"])(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef
  }))));
});
AbstractNav.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AbstractNav);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/AbstractNavItem.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/AbstractNavItem.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/es/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");







var defaultProps = {
  disabled: false
};
var AbstractNavItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["active", "className", "tabIndex", "eventKey", "onSelect", "onClick", "as"]);

  var navKey = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["makeEventKey"])(eventKey, props.href);
  var parentOnSelect = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var navContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_NavContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    props['data-rb-event-key'] = navKey;
    props.id = navContext.getControllerId(navKey);
    props['aria-controls'] = navContext.getControlledId(navKey);
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    props.tabIndex = isActive ? tabIndex : -1;
    props['aria-selected'] = isActive;
  }

  var handleOnclick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, isActive && 'active')
  }));
});
AbstractNavItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AbstractNavItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Accordion.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Accordion.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _AccordionToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccordionToggle */ "./node_modules/react-bootstrap/es/AccordionToggle.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _AccordionCollapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccordionCollapse */ "./node_modules/react-bootstrap/es/AccordionCollapse.js");
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AccordionContext */ "./node_modules/react-bootstrap/es/AccordionContext.js");










var Accordion = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_4__["useUncontrolled"])(props, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      activeKey = _useUncontrolled.activeKey,
      bsPrefix = _useUncontrolled.bsPrefix,
      children = _useUncontrolled.children,
      className = _useUncontrolled.className,
      onSelect = _useUncontrolled.onSelect,
      controlledProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["as", "activeKey", "bsPrefix", "children", "className", "onSelect"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'accordion');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AccordionContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: activeKey
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: onSelect
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, controlledProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }), children)));
});
Accordion.Toggle = _AccordionToggle__WEBPACK_IMPORTED_MODULE_6__["default"];
Accordion.Collapse = _AccordionCollapse__WEBPACK_IMPORTED_MODULE_8__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/AccordionCollapse.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/AccordionCollapse.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collapse */ "./node_modules/react-bootstrap/es/Collapse.js");
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccordionContext */ "./node_modules/react-bootstrap/es/AccordionContext.js");





var AccordionCollapse = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "eventKey"]);

  var contextEventKey = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_AccordionContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Collapse__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children)));
});
AccordionCollapse.displayName = 'AccordionCollapse';
/* harmony default export */ __webpack_exports__["default"] = (AccordionCollapse);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/AccordionContext.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/AccordionContext.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/AccordionToggle.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/AccordionToggle.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useAccordionToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useAccordionToggle */ "./node_modules/react-bootstrap/es/useAccordionToggle.js");




var AccordionToggle = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      children = _ref.children,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "children", "eventKey", "onClick"]);

  var accordionOnClick = Object(_useAccordionToggle__WEBPACK_IMPORTED_MODULE_3__["default"])(eventKey, onClick);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    onClick: accordionOnClick
  }, props), children);
});
/* harmony default export */ __webpack_exports__["default"] = (AccordionToggle);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Alert.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Alert.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _utils_divWithClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/divWithClassName */ "./node_modules/react-bootstrap/es/utils/divWithClassName.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/es/CloseButton.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");












var defaultProps = {
  show: true,
  transition: _Fade__WEBPACK_IMPORTED_MODULE_9__["default"],
  closeLabel: 'Close alert'
};
var controllables = {
  show: 'onClose'
};
var Alert = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (uncontrolledProps, ref) {
  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_4__["useUncontrolled"])(uncontrolledProps, controllables),
      bsPrefix = _useUncontrolled.bsPrefix,
      show = _useUncontrolled.show,
      closeLabel = _useUncontrolled.closeLabel,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      variant = _useUncontrolled.variant,
      onClose = _useUncontrolled.onClose,
      dismissible = _useUncontrolled.dismissible,
      Transition = _useUncontrolled.transition,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["useBootstrapPrefix"])(bsPrefix, 'alert');
  var handleClose = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(function (e) {
    onClose(false, e);
  });
  var alert = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "alert"
  }, Transition ? props : undefined, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, variant && prefix + "-" + variant, dismissible && prefix + "-dismissible")
  }), dismissible && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleClose,
    label: closeLabel
  }), children);
  if (!Transition) return show ? alert : null;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Transition, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    unmountOnExit: true,
    ref: ref
  }, props, {
    in: show
  }), alert);
});
var DivStyledAsH4 = Object(_utils_divWithClassName__WEBPACK_IMPORTED_MODULE_7__["default"])('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.Link = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('alert-link', {
  Component: _SafeAnchor__WEBPACK_IMPORTED_MODULE_11__["default"]
});
Alert.Heading = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_6__["default"])('alert-heading', {
  Component: DivStyledAsH4
});
/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Badge.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Badge.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var defaultProps = {
  pill: false
};
var Badge = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "variant", "pill", "className"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'badge');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, pill && prefix + "-pill", variant && prefix + "-" + variant)
  }));
});
Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Breadcrumb.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Breadcrumb.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/react-bootstrap/es/BreadcrumbItem.js");






var defaultProps = {
  label: 'breadcrumb',
  listProps: {}
};
var Breadcrumb = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      listProps = _ref.listProps,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'nav' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "listProps", "children", "label", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'breadcrumb');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": label,
    className: className,
    ref: ref
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ol", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, listProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefix, listProps.className)
  }), children));
});
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = defaultProps;
Breadcrumb.Item = _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/BreadcrumbItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/BreadcrumbItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  active: false
};
var BreadcrumbItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'li' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "active", "className", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'breadcrumb-item');

  var href = props.href,
      title = props.title,
      target = props.target,
      elementProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["href", "title", "target"]);

  var linkProps = {
    href: href,
    title: title,
    target: target
  };
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefix, className, {
      active: active
    }),
    "aria-current": active ? 'page' : undefined
  }, active ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, elementProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: active
    })
  })) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, elementProps, linkProps)));
});
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Button.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Button.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");






var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
var Button = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'btn');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      as: as,
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (!as) {
    props.type = type;
  }

  var Component = as || 'button';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ButtonGroup.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ButtonGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group'
};
var ButtonGroup = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var bsPrefix = props.bsPrefix,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      className = props.className,
      _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'btn-group');
  var baseClass = prefix;
  if (vertical) baseClass = prefix + "-vertical";
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, baseClass, size && prefix + "-" + size, toggle && prefix + "-toggle")
  }));
});
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ButtonGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ButtonToolbar.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ButtonToolbar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var defaultProps = {
  role: 'toolbar'
};
var ButtonToolbar = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'btn-toolbar');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix)
  }));
});
ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ButtonToolbar);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Card.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Card.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _utils_divWithClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/divWithClassName */ "./node_modules/react-bootstrap/es/utils/divWithClassName.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/es/CardContext.js");
/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/es/CardImg.js");









var DivStyledAsH5 = Object(_utils_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h5');
var DivStyledAsH6 = Object(_utils_divWithClassName__WEBPACK_IMPORTED_MODULE_6__["default"])('h6');
var CardBody = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-body');
var defaultProps = {
  body: false
};
var Card = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card');
  var cardContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CardContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: cardContext
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg__WEBPACK_IMPORTED_MODULE_8__["default"];
Card.Title = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-link', {
  Component: 'a'
});
Card.Text = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-text', {
  Component: 'p'
});
Card.Header = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-header');
Card.Footer = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-footer');
Card.ImgOverlay = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('card-img-overlay');
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardColumns.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardColumns.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('card-columns'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardContext.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardDeck.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardDeck.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('card-deck'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardGroup.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('card-group'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CardImg.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CardImg.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var defaultProps = {
  variant: null
};
var CardImg = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "variant", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'card-img');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CardImg);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Carousel.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Carousel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js");
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/transition */ "./node_modules/dom-helpers/transition/index.js");
/* harmony import */ var dom_helpers_transition__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _CarouselCaption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CarouselCaption */ "./node_modules/react-bootstrap/es/CarouselCaption.js");
/* harmony import */ var _CarouselItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CarouselItem */ "./node_modules/react-bootstrap/es/CarouselItem.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var _utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/ElementChildren */ "./node_modules/react-bootstrap/es/utils/ElementChildren.js");
/* harmony import */ var _utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/triggerBrowserReflow */ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");















var countChildren = function countChildren(c) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.toArray(c).filter(react__WEBPACK_IMPORTED_MODULE_6___default.a.isValidElement).length;
};

var SWIPE_THRESHOLD = 40; // TODO: `slide` should be `animate`.

var defaultProps = {
  slide: true,
  fade: false,
  interval: 5000,
  keyboard: true,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  activeIndex: 0,
  prevIcon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next',
  touch: true
};

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Carousel, _React$Component);

  function Carousel() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      prevClasses: '',
      currentClasses: 'active',
      touchStartX: 0
    };
    _this.isUnmounted = false;
    _this.carousel = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();

    _this.handleTouchStart = function (e) {
      _this.setState({
        touchStartX: e.changedTouches[0].screenX
      });
    };

    _this.handleTouchEnd = function (e) {
      // If the swipe is under the threshold, don't do anything.
      if (Math.abs(e.changedTouches[0].screenX - _this.state.touchStartX) < SWIPE_THRESHOLD) return;

      if (e.changedTouches[0].screenX < _this.state.touchStartX) {
        // Swiping left to navigate to next item.
        _this.handleNext(e);
      } else {
        // Swiping right to navigate to previous item.
        _this.handlePrev(e);
      }
    };

    _this.handleSlideEnd = function () {
      var pendingIndex = _this._pendingIndex;
      _this._isSliding = false;
      _this._pendingIndex = null;
      if (pendingIndex != null) _this.to(pendingIndex);else _this.cycle();
    };

    _this.handleMouseOut = function () {
      _this.cycle();
    };

    _this.handleMouseOver = function () {
      if (_this.props.pauseOnHover) _this.pause();
    };

    _this.handleKeyDown = function (event) {
      if (/input|textarea/i.test(event.target.tagName)) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();

          _this.handlePrev(event);

          break;

        case 'ArrowRight':
          event.preventDefault();

          _this.handleNext(event);

          break;

        default:
          break;
      }
    };

    _this.handleNextWhenVisible = function () {
      if (!_this.isUnmounted && !document.hidden && dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default()(_this.carousel.current, 'visibility') !== 'hidden') {
        _this.handleNext();
      }
    };

    _this.handleNext = function (e) {
      if (_this._isSliding) return;
      var _this$props = _this.props,
          wrap = _this$props.wrap,
          activeIndex = _this$props.activeIndex;
      var index = activeIndex + 1;
      var count = countChildren(_this.props.children);

      if (index > count - 1) {
        if (!wrap) return;
        index = 0;
      }

      _this.select(index, e, 'next');
    };

    _this.handlePrev = function (e) {
      if (_this._isSliding) return;
      var _this$props2 = _this.props,
          wrap = _this$props2.wrap,
          activeIndex = _this$props2.activeIndex;
      var index = activeIndex - 1;

      if (index < 0) {
        if (!wrap) return;
        index = countChildren(_this.props.children) - 1;
      }

      _this.select(index, e, 'prev');
    };

    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.cycle();
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var previousActiveIndex = _ref.activeIndex;

    if (nextProps.activeIndex !== previousActiveIndex) {
      var lastPossibleIndex = countChildren(nextProps.children) - 1;
      var nextIndex = Math.max(0, Math.min(nextProps.activeIndex, lastPossibleIndex));
      var direction;

      if (nextIndex === 0 && previousActiveIndex >= lastPossibleIndex || previousActiveIndex <= nextIndex) {
        direction = 'next';
      } else {
        direction = 'prev';
      }

      return {
        direction: direction,
        previousActiveIndex: previousActiveIndex,
        activeIndex: nextIndex
      };
    }

    return null;
  };

  _proto.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var _this2 = this;

    var _this$props3 = this.props,
        bsPrefix = _this$props3.bsPrefix,
        slide = _this$props3.slide,
        onSlideEnd = _this$props3.onSlideEnd;
    if (!slide || this.state.activeIndex === prevState.activeIndex || this._isSliding) return;
    var _this$state = this.state,
        activeIndex = _this$state.activeIndex,
        direction = _this$state.direction;
    var orderClassName, directionalClassName;

    if (direction === 'next') {
      orderClassName = bsPrefix + "-item-next";
      directionalClassName = bsPrefix + "-item-left";
    } else if (direction === 'prev') {
      orderClassName = bsPrefix + "-item-prev";
      directionalClassName = bsPrefix + "-item-right";
    }

    this._isSliding = true;
    this.pause(); // eslint-disable-next-line react/no-did-update-set-state

    this.safeSetState({
      prevClasses: 'active',
      currentClasses: orderClassName
    }, function () {
      var items = _this2.carousel.current.children;
      var nextElement = items[activeIndex];
      Object(_utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_12__["default"])(nextElement);

      _this2.safeSetState({
        prevClasses: classnames__WEBPACK_IMPORTED_MODULE_3___default()('active', directionalClassName),
        currentClasses: classnames__WEBPACK_IMPORTED_MODULE_3___default()(orderClassName, directionalClassName)
      }, function () {
        return dom_helpers_transition__WEBPACK_IMPORTED_MODULE_5___default.a.end(nextElement, function () {
          _this2.safeSetState({
            prevClasses: '',
            currentClasses: 'active'
          }, _this2.handleSlideEnd);

          if (onSlideEnd) {
            onSlideEnd();
          }
        });
      });
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  _proto.safeSetState = function safeSetState(state, cb) {
    var _this3 = this;

    if (this.isUnmounted) return;
    this.setState(state, function () {
      return !_this3.isUnmounted && cb();
    });
  } // This might be a public API.
  ;

  _proto.pause = function pause() {
    this._isPaused = true;
    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.cycle = function cycle() {
    this._isPaused = false;
    clearInterval(this._interval);
    this._interval = null;

    if (this.props.interval && !this._isPaused) {
      this._interval = setInterval(document.visibilityState ? this.handleNextWhenVisible : this.handleNext, this.props.interval);
    }
  };

  _proto.to = function to(index, event) {
    var children = this.props.children;

    if (index < 0 || index > countChildren(children) - 1) {
      return;
    }

    if (this._isSliding) {
      this._pendingIndex = index;
      return;
    }

    this.select(index, event);
  };

  _proto.select = function select(index, event, direction) {
    var _this4 = this;

    clearTimeout(this.selectThrottle);
    if (event && event.persist) event.persist(); // The timeout throttles fast clicks, in order to give any pending state
    // a chance to update and propagate back through props

    this.selectThrottle = setTimeout(function () {
      clearTimeout(_this4.timeout);
      var _this4$props = _this4.props,
          activeIndex = _this4$props.activeIndex,
          onSelect = _this4$props.onSelect;
      if (index === activeIndex || _this4._isSliding || _this4.isUnmounted) return;
      onSelect(index, direction || (index < activeIndex ? 'prev' : 'next'), event);
    }, 50);
  };

  _proto.renderControls = function renderControls(properties) {
    var bsPrefix = this.props.bsPrefix;
    var wrap = properties.wrap,
        children = properties.children,
        activeIndex = properties.activeIndex,
        prevIcon = properties.prevIcon,
        nextIcon = properties.nextIcon,
        prevLabel = properties.prevLabel,
        nextLabel = properties.nextLabel;
    var count = countChildren(children);
    return [(wrap || activeIndex !== 0) && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "prev",
      className: bsPrefix + "-control-prev",
      onClick: this.handlePrev
    }, prevIcon, prevLabel && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "sr-only"
    }, prevLabel)), (wrap || activeIndex !== count - 1) && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "next",
      className: bsPrefix + "-control-next",
      onClick: this.handleNext
    }, nextIcon, nextLabel && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "sr-only"
    }, nextLabel))];
  };

  _proto.renderIndicators = function renderIndicators(children, activeIndex) {
    var _this5 = this;

    var bsPrefix = this.props.bsPrefix;
    var indicators = [];
    Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__["forEach"])(children, function (child, index) {
      indicators.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this5.to(index, e);
        }
      }), // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ol", {
      className: bsPrefix + "-indicators"
    }, indicators);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        _this$props4$as = _this$props4.as,
        Component = _this$props4$as === void 0 ? 'div' : _this$props4$as,
        bsPrefix = _this$props4.bsPrefix,
        slide = _this$props4.slide,
        fade = _this$props4.fade,
        indicators = _this$props4.indicators,
        controls = _this$props4.controls,
        wrap = _this$props4.wrap,
        touch = _this$props4.touch,
        prevIcon = _this$props4.prevIcon,
        prevLabel = _this$props4.prevLabel,
        nextIcon = _this$props4.nextIcon,
        nextLabel = _this$props4.nextLabel,
        className = _this$props4.className,
        children = _this$props4.children,
        keyboard = _this$props4.keyboard,
        _5 = _this$props4.activeIndex,
        _4 = _this$props4.pauseOnHover,
        _3 = _this$props4.interval,
        _2 = _this$props4.onSelect,
        _1 = _this$props4.onSlideEnd,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props4, ["as", "bsPrefix", "slide", "fade", "indicators", "controls", "wrap", "touch", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children", "keyboard", "activeIndex", "pauseOnHover", "interval", "onSelect", "onSlideEnd"]);

    var _this$state2 = this.state,
        activeIndex = _this$state2.activeIndex,
        previousActiveIndex = _this$state2.previousActiveIndex,
        prevClasses = _this$state2.prevClasses,
        currentClasses = _this$state2.currentClasses;
    return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onTouchStart: touch ? this.handleTouchStart : undefined,
        onTouchEnd: touch ? this.handleTouchEnd : undefined
      }, props, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, slide && 'slide', fade && bsPrefix + "-fade"),
        onKeyDown: keyboard ? this.handleKeyDown : undefined,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut
      }), indicators && this.renderIndicators(children, activeIndex), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: bsPrefix + "-inner",
        ref: this.carousel
      }, Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__["map"])(children, function (child, index) {
        var current = index === activeIndex;
        var previous = index === previousActiveIndex;
        return Object(react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"])(child, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(child.props.className, bsPrefix + "-item", current && currentClasses, previous && prevClasses)
        });
      })), controls && this.renderControls({
        wrap: wrap,
        children: children,
        activeIndex: activeIndex,
        prevIcon: prevIcon,
        prevLabel: prevLabel,
        nextIcon: nextIcon,
        nextLabel: nextLabel
      }))
    );
  };

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Carousel.defaultProps = defaultProps;
var DecoratedCarousel = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_13__["createBootstrapComponent"])(Object(uncontrollable__WEBPACK_IMPORTED_MODULE_7__["uncontrollable"])(Carousel, {
  activeIndex: 'onSelect'
}), 'carousel');
DecoratedCarousel.Caption = _CarouselCaption__WEBPACK_IMPORTED_MODULE_8__["default"];
DecoratedCarousel.Item = _CarouselItem__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedCarousel);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CarouselCaption.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CarouselCaption.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('carousel-caption', {
  Component: 'div'
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CarouselItem.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CarouselItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('carousel-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/CloseButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/CloseButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





var propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
var defaultProps = {
  label: 'Close'
};
var CloseButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["label", "onClick", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    type: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('close', className),
    onClick: onClick
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "sr-only"
  }, label));
});
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Col.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Col.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var Col = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span, offset, order;

    if (propValue != null && typeof propValue === 'object') {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span != null) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, [className].concat(spans, classes))
  }));
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__["default"] = (Col);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Collapse.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Collapse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js");
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-helpers/transition/end */ "./node_modules/dom-helpers/transition/end.js");
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/triggerBrowserReflow */ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");




var _collapseStyles;








var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + parseInt(dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default()(elem, margins[0]), 10) + parseInt(dom_helpers_style__WEBPACK_IMPORTED_MODULE_4___default()(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["EXITED"]] = 'collapse', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["EXITING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["ENTERING"]] = 'collapsing', _collapseStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["ENTERED"]] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Collapse, _React$Component);

  function Collapse() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    };

    _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    _this.handleExit = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      Object(_utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_8__["default"])(elem);
    };

    _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  }
  /* -- Expanding -- */
  ;

  // for testing
  _proto._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    var scroll = "scroll" + dimension[0].toUpperCase() + dimension.slice(1);
    return elem[scroll] + "px";
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        className = _this$props.className,
        children = _this$props.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);

    delete props.dimension;
    delete props.getDimensionValue;
    var handleEnter = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleEnter, onEnter);
    var handleEntering = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleEntering, onEntering);
    var handleEntered = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleEntered, onEntered);
    var handleExit = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleExit, onExit);
    var handleExiting = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(this.handleExiting, onExiting);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      addEndListener: dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_6___default.a
    }, props, {
      "aria-expanded": props.role ? props.in : null,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting
    }), function (state, innerProps) {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, children.props.className, collapseStyles[state], _this2.getDimension() === 'width' && 'width')
      }));
    });
  };

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Collapse.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Collapse);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Container.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Container.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var defaultProps = {
  fluid: false
};
var Container = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "fluid", "as", "className"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'container');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, fluid ? prefix + "-fluid" : prefix)
  }));
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Dropdown.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Dropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-overlays/Dropdown */ "./node_modules/react-overlays/Dropdown.js");
/* harmony import */ var react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropdownMenu */ "./node_modules/react-bootstrap/es/DropdownMenu.js");
/* harmony import */ var _DropdownToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DropdownToggle */ "./node_modules/react-bootstrap/es/DropdownToggle.js");
/* harmony import */ var _DropdownItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DropdownItem */ "./node_modules/react-bootstrap/es/DropdownItem.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");













var defaultProps = {
  navbar: false
};
var Dropdown = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (uncontrolledProps, ref) {
  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_5__["useUncontrolled"])(uncontrolledProps, {
    show: 'onToggle'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      drop = _useUncontrolled.drop,
      show = _useUncontrolled.show,
      className = _useUncontrolled.className,
      alignRight = _useUncontrolled.alignRight,
      onSelect = _useUncontrolled.onSelect,
      onToggle = _useUncontrolled.onToggle,
      focusFirstItemOnShow = _useUncontrolled.focusFirstItemOnShow,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      _4 = _useUncontrolled.navbar,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["bsPrefix", "drop", "show", "className", "alignRight", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar"]);

  var onSelectCtx = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_11__["default"]);
  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__["useBootstrapPrefix"])(bsPrefix, 'dropdown');
  var handleToggle = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(function (nextShow, event, source) {
    if (source === void 0) {
      source = event.type;
    }

    if (event.currentTarget === document) source = 'rootClose';
    onToggle(nextShow, event, {
      source: source
    });
  });
  var handleSelect = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_6__["default"])(function (key, event) {
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
    handleToggle(false, event, 'select');
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
    value: handleSelect
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_overlays_Dropdown__WEBPACK_IMPORTED_MODULE_4___default.a.ControlledComponent, {
    drop: drop,
    show: show,
    alignEnd: alignRight,
    onToggle: handleToggle,
    focusFirstItemOnShow: focusFirstItemOnShow,
    itemSelector: "." + prefix + "-item:not(.disabled):not(:disabled)"
  }, function (_ref) {
    var dropdownProps = _ref.props;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, dropdownProps, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
    }));
  }));
});
Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = defaultProps;
Dropdown.Toggle = _DropdownToggle__WEBPACK_IMPORTED_MODULE_9__["default"];
Dropdown.Menu = _DropdownMenu__WEBPACK_IMPORTED_MODULE_8__["default"];
Dropdown.Item = _DropdownItem__WEBPACK_IMPORTED_MODULE_10__["default"];
Dropdown.Header = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_12__["default"])('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
Dropdown.Divider = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_12__["default"])('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownButton.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/DropdownButton.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/es/Dropdown.js");





var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /** An `href` passed to the Toggle component */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /** The content of the non-toggle Button.  */
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /** Disables both Buttons  */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** @ignore */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** @ignore */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** @ignore */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`.
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu related props are passed to the `Dropdown.Menu`
 */

var DropdownButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      variant = _ref.variant,
      size = _ref.size,
      menuRole = _ref.menuRole,
      disabled = _ref.disabled,
      href = _ref.href,
      id = _ref.id,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["title", "children", "bsPrefix", "rootCloseEvent", "variant", "size", "menuRole", "disabled", "href", "id"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Toggle, {
    id: id,
    href: href,
    size: size,
    variant: variant,
    disabled: disabled,
    childBsPrefix: bsPrefix
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Menu, {
    role: menuRole,
    rootCloseEvent: rootCloseEvent
  }, children));
});
DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (DropdownButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownItem.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/DropdownItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/es/NavContext.js");









var defaultProps = {
  as: _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"],
  disabled: false
};
var DropdownItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      eventKey = _ref.eventKey,
      disabled = _ref.disabled,
      href = _ref.href,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      propActive = _ref.active,
      Component = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__["useBootstrapPrefix"])(bsPrefix, 'dropdown-item');
  var onSelectCtx = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var navContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_NavContext__WEBPACK_IMPORTED_MODULE_8__["default"]);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey;

  var key = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["makeEventKey"])(eventKey, href);
  var active = propActive == null && key != null ? Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["makeEventKey"])(activeKey) === key : propActive;
  var handleClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(function (event) {
    // SafeAnchor handles the disabled case, but we handle it here
    // for other components
    if (disabled) return;
    if (onClick) onClick(event);
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    href: href,
    disabled: disabled,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, active && 'active', disabled && 'disabled'),
    onClick: handleClick
  }), children);
});
DropdownItem.displayName = 'DropdownItem';
DropdownItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DropdownItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownMenu.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/DropdownMenu.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_overlays_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-overlays/DropdownMenu */ "./node_modules/react-overlays/DropdownMenu.js");
/* harmony import */ var react_overlays_DropdownMenu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_overlays_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");









var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(r));
  });

  return props;
};

var defaultProps = {
  alignRight: false,
  flip: true
};
var DropdownMenu = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      alignRight = _ref.alignRight,
      rootCloseEvent = _ref.rootCloseEvent,
      flip = _ref.flip,
      popperConfig = _ref.popperConfig,
      showProps = _ref.show,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "alignRight", "rootCloseEvent", "flip", "popperConfig", "show", "as"]);

  var isNavbar = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__["useBootstrapPrefix"])(bsPrefix, 'dropdown-menu');
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_overlays_DropdownMenu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    ref: ref // FIXME: the ref situation is out of hand here
    ,
    flip: flip,
    show: showProps,
    alignEnd: alignRight,
    usePopper: !isNavbar,
    popperConfig: popperConfig,
    rootCloseEvent: rootCloseEvent
  }, function (_ref2) {
    var placement = _ref2.placement,
        show = _ref2.show,
        alignEnd = _ref2.alignEnd,
        close = _ref2.close,
        menuProps = _ref2.props;
    wrapRef(menuProps); // For custom components provide additional, non-DOM, props;

    if (typeof Component !== 'string') {
      menuProps.show = show;
      menuProps.close = close;
      menuProps.alignRight = alignEnd;
    }

    var style = props.style;

    if (placement) {
      // we don't need the default popper style,
      // menus are display: none when not shown.
      style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {}, menuProps.style);
      props['x-placement'] = placement;
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, menuProps, {
      style: style,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, show && 'show', alignEnd && prefix + "-right")
    }));
  });
});
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/DropdownToggle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/DropdownToggle.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_overlays_DropdownToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-overlays/DropdownToggle */ "./node_modules/react-overlays/DropdownToggle.js");
/* harmony import */ var react_overlays_DropdownToggle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_overlays_DropdownToggle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");











var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"])(r));
  });

  return props;
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(DropdownToggle, _React$Component);

  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        split = _this$props.split,
        className = _this$props.className,
        children = _this$props.children,
        childBsPrefix = _this$props.childBsPrefix,
        Component = _this$props.as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "split", "className", "children", "childBsPrefix", "as"]);

    if (childBsPrefix !== undefined) {
      props.bsPrefix = childBsPrefix;
    } // This intentionally forwards size and variant (if set) to the
    // underlying component, to allow it to render size and style variants.


    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_overlays_DropdownToggle__WEBPACK_IMPORTED_MODULE_6___default.a, null, function (_ref) {
      var toggle = _ref.toggle,
          toggleProps = _ref.props;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        onClick: toggle,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, split && bsPrefix + "-split")
      }, wrapRef(toggleProps), props), children);
    });
  };

  return DropdownToggle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // Needs to be a class FTM, because it needs to accept a ref that can be used with findDOMNode


DropdownToggle.defaultProps = {
  as: _Button__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__["createBootstrapComponent"])(DropdownToggle, 'dropdown-toggle'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Fade.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Fade.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/transition/end */ "./node_modules/dom-helpers/transition/end.js");
/* harmony import */ var dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/triggerBrowserReflow */ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js");



var _fadeStyles;






var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_4__["ENTERING"]] = 'show', _fadeStyles[react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_4__["ENTERED"]] = 'show', _fadeStyles);
var Fade = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children"]);

  var handleEnter = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (node) {
    Object(_utils_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_6__["default"])(node);
    if (props.onEnter) props.onEnter(node);
  }, [props]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    addEndListener: dom_helpers_transition_end__WEBPACK_IMPORTED_MODULE_5___default.a
  }, props, {
    onEnter: handleEnter
  }), function (status, innerProps) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('fade', className, children.props.className, fadeStyles[status])
    }));
  });
});
Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';
/* harmony default export */ __webpack_exports__["default"] = (Fade);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Feedback.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Feedback.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);





var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType
};
var defaultProps = {
  type: 'valid'
};
var Feedback = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      type = _ref.type,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "className", "type"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, type && type + "-feedback")
  }));
});
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Feedback);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Figure.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Figure.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _FigureImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FigureImage */ "./node_modules/react-bootstrap/es/FigureImage.js");
/* harmony import */ var _FigureCaption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FigureCaption */ "./node_modules/react-bootstrap/es/FigureCaption.js");



var Figure = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('figure', {
  Component: 'figure'
});
Figure.Image = _FigureImage__WEBPACK_IMPORTED_MODULE_1__["default"];
Figure.Caption = _FigureCaption__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Figure);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FigureCaption.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FigureCaption.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

var FigureCaption = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('figure-caption', {
  Component: 'figcaption'
});
/* harmony default export */ __webpack_exports__["default"] = (FigureCaption);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FigureImage.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FigureImage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image */ "./node_modules/react-bootstrap/es/Image.js");






var propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Sets image as fluid image.
   */
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
var defaultProps = {
  fluid: true
};
var FigureImage = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'figure-img')
  }));
});
FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = propTypes;
FigureImage.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (FigureImage);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Form.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/es/FormCheck.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/es/FormLabel.js");
/* harmony import */ var _FormText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/es/FormText.js");











var defaultProps = {
  inline: false
};
var Form = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'form' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'form');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});
Form.displayName = 'Form';
Form.defaultProps = defaultProps;
Form.Row = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('form-row');
Form.Group = _FormGroup__WEBPACK_IMPORTED_MODULE_6__["default"];
Form.Control = _FormControl__WEBPACK_IMPORTED_MODULE_7__["default"];
Form.Check = _FormCheck__WEBPACK_IMPORTED_MODULE_8__["default"];
Form.Label = _FormLabel__WEBPACK_IMPORTED_MODULE_9__["default"];
Form.Text = _FormText__WEBPACK_IMPORTED_MODULE_10__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormCheck.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormCheck.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/es/Feedback.js");
/* harmony import */ var _FormCheckInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormCheckInput */ "./node_modules/react-bootstrap/es/FormCheckInput.js");
/* harmony import */ var _FormCheckLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormCheckLabel */ "./node_modules/react-bootstrap/es/FormCheckLabel.js");









var defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};
var FormCheck = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      disabled = _ref.disabled,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      type = _ref.type,
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "className", "style", "title", "type", "label", "children", "custom"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'form-check');

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      controlId = _useContext.controlId;

  var innerFormContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;
  var input = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormCheckInput__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    type: type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled
  }));
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: innerFormContext
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, !custom && bsPrefix, custom && "custom-control custom-" + type, inline && (custom ? 'custom-control' : bsPrefix) + "-inline")
  }, children || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, input, hasLabel && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormCheckLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: title
  }, label), (isValid || isInvalid) && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Feedback__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: isValid ? 'valid' : 'invalid'
  }, feedback))));
});
FormCheck.displayName = 'FormCheck';
FormCheck.defaultProps = defaultProps;
FormCheck.Input = _FormCheckInput__WEBPACK_IMPORTED_MODULE_7__["default"];
FormCheck.Label = _FormCheckLabel__WEBPACK_IMPORTED_MODULE_8__["default"];
/* harmony default export */ __webpack_exports__["default"] = (FormCheck);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormCheckInput.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormCheckInput.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");






var defaultProps = {
  type: 'checkbox'
};
var FormCheckInput = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      isStatic = _ref.isStatic,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["id", "bsPrefix", "className", "isValid", "isInvalid", "isStatic"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'form-check-input');

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    id: id || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, !custom && bsPrefix, custom && 'custom-control-input', isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
  }));
});
FormCheckInput.displayName = 'FormCheckInput';
FormCheckInput.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (FormCheckInput);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormCheckLabel.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormCheckLabel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");






var defaultProps = {
  type: 'checkbox'
};
var FormCheckLabel = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "htmlFor"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'form-check-label');

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, !custom && bsPrefix, custom && 'custom-control-label')
  }));
});
FormCheckLabel.displayName = 'FormCheckLabel';
FormCheckLabel.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (FormCheckLabel);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormContext.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FormContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  controlId: undefined
});
/* harmony default export */ __webpack_exports__["default"] = (FormContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormControl.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormControl.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/es/Feedback.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");








var FormControl = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      type = _ref.type,
      size = _ref.size,
      id = _ref.id,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      plaintext = _ref.plaintext,
      readOnly = _ref.readOnly,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "type", "size", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_FormContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      controlId = _useContext.controlId;

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__["useBootstrapPrefix"])(bsPrefix, 'form-control');
  var classes;

  if (plaintext) {
    var _classes;

    classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
  } else if (type === 'file') {
    var _classes2;

    classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
  } else {
    var _classes3;

    classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + "-" + size] = size, _classes3);
  }

   true ? warning__WEBPACK_IMPORTED_MODULE_4___default()(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : undefined;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    type: type,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
  }));
});
FormControl.displayName = 'FormControl';
FormControl.Feedback = _Feedback__WEBPACK_IMPORTED_MODULE_5__["default"];
/* harmony default export */ __webpack_exports__["default"] = (FormControl);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormGroup.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var FormGroup = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "children", "controlId", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'form-group');
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: context
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }), children));
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ __webpack_exports__["default"] = (FormGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormLabel.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormLabel.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/es/Col.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/es/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");








var defaultProps = {
  column: false,
  srOnly: false
};
var FormLabel = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "column", "srOnly", "className", "htmlFor"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_FormContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      controlId = _useContext.controlId;

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__["useBootstrapPrefix"])(bsPrefix, 'form-label');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
   true ? warning__WEBPACK_IMPORTED_MODULE_4___default()(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : undefined;
  htmlFor = htmlFor || controlId;
  if (column) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "label",
    className: classes,
    htmlFor: htmlFor
  }, props));
  return (// eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      className: classes,
      htmlFor: htmlFor
    }, props))
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (FormLabel);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/FormText.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/FormText.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var FormText = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'small' : _ref$as,
      muted = _ref.muted,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "as", "muted"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'form-text');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, muted && 'text-muted')
  }));
});
FormText.displayName = 'FormText';
/* harmony default export */ __webpack_exports__["default"] = (FormText);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Image.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Image.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var Image =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Image, _React$Component);

  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        fluid = _this$props.fluid,
        rounded = _this$props.rounded,
        roundedCircle = _this$props.roundedCircle,
        thumbnail = _this$props.thumbnail,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes)
    }));
  };

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Image.defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Image, 'img'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/InputGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/InputGroup.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "size", "className", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'input-group');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, size && bsPrefix + "-" + size)
  }));
});
var InputGroupAppend = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group-append');
var InputGroupPrepend = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group-prepend');
var InputGroupText = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InputGroupText, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InputGroupText, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "radio"
  }, props)));
};

InputGroup.displayName = 'InputGroup';
InputGroup.Text = InputGroupText;
InputGroup.Radio = InputGroupRadio;
InputGroup.Checkbox = InputGroupCheckbox;
InputGroup.Append = InputGroupAppend;
InputGroup.Prepend = InputGroupPrepend;
/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Jumbotron.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Jumbotron.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var defaultProps = {
  fluid: false
};
var Jumbotron = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "className", "fluid", "bsPrefix"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, classes)
  }));
});
Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';
/* harmony default export */ __webpack_exports__["default"] = (Jumbotron);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ListGroup.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ListGroup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _AbstractNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/es/AbstractNav.js");
/* harmony import */ var _ListGroupItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListGroupItem */ "./node_modules/react-bootstrap/es/ListGroupItem.js");








var defaultProps = {
  variant: null
};
var ListGroup = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_4__["useUncontrolled"])(props, {
    activeKey: 'onSelect'
  }),
      className = _useUncontrolled.className,
      bsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      controlledProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["className", "bsPrefix", "variant", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'list-group');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AbstractNav__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, controlledProps, {
    as: as,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, variant && bsPrefix + "-" + variant)
  }));
});
ListGroup.defaultProps = defaultProps;
ListGroup.displayName = 'ListGroup';
ListGroup.Item = _ListGroupItem__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (ListGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ListGroupItem.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ListGroupItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AbstractNavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/es/AbstractNavItem.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var defaultProps = {
  variant: null,
  active: false,
  disabled: false
};
var ListGroupItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      variant = _ref.variant,
      action = _ref.action,
      as = _ref.as,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey", "onClick"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["useBootstrapPrefix"])(bsPrefix, 'list-group-item');
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (onClick) onClick(event);
  }, [disabled, onClick]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AbstractNavItem__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    eventKey: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["makeEventKey"])(eventKey, props.href) // eslint-disable-next-line
    ,
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
  }));
});
ListGroupItem.defaultProps = defaultProps;
ListGroupItem.displayName = 'ListGroupItem';
/* harmony default export */ __webpack_exports__["default"] = (ListGroupItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Media.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Media.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var Media = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'media');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix)
  }));
});
Media.displayName = 'Media';
Media.Body = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('media-body');
/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Modal.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Modal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/events */ "./node_modules/dom-helpers/events/index.js");
/* harmony import */ var dom_helpers_events__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_events__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js");
/* harmony import */ var dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_helpers_util_inDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-helpers/util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js");
/* harmony import */ var dom_helpers_util_inDOM__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_inDOM__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js");
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_overlays_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-overlays/Modal */ "./node_modules/react-overlays/Modal.js");
/* harmony import */ var react_overlays_Modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_overlays_Modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");
/* harmony import */ var _ModalBody__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModalBody */ "./node_modules/react-bootstrap/es/ModalBody.js");
/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalDialog */ "./node_modules/react-bootstrap/es/ModalDialog.js");
/* harmony import */ var _ModalFooter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalFooter */ "./node_modules/react-bootstrap/es/ModalFooter.js");
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ModalHeader */ "./node_modules/react-bootstrap/es/ModalHeader.js");
/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModalTitle */ "./node_modules/react-bootstrap/es/ModalTitle.js");
/* harmony import */ var _utils_BootstrapModalManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utils/BootstrapModalManager */ "./node_modules/react-bootstrap/es/utils/BootstrapModalManager.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ModalContext */ "./node_modules/react-bootstrap/es/ModalContext.js");



















var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: _ModalDialog__WEBPACK_IMPORTED_MODULE_12__["default"],
  manager: new _utils_BootstrapModalManager__WEBPACK_IMPORTED_MODULE_16__["default"]()
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Fade__WEBPACK_IMPORTED_MODULE_10__["default"], props);
}

function BackdropTransition(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Fade__WEBPACK_IMPORTED_MODULE_10__["default"], props);
}
/* eslint-enable no-use-before-define */


var Modal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Modal, _React$Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = {
      style: {}
    };
    _this.modalContext = {
      onHide: function onHide() {
        return _this.props.onHide();
      }
    };

    _this.setModalRef = function (ref) {
      _this._modal = ref;
    };

    _this.handleDialogMouseDown = function () {
      _this._waitingForMouseUp = true;
    };

    _this.handleMouseUp = function (e) {
      if (_this._waitingForMouseUp && e.target === _this._modal.dialog) {
        _this._ignoreBackdropClick = true;
      }

      _this._waitingForMouseUp = false;
    };

    _this.handleClick = function (e) {
      if (_this._ignoreBackdropClick || e.target !== e.currentTarget) {
        _this._ignoreBackdropClick = false;
        return;
      }

      _this.props.onHide();
    };

    _this.handleEnter = function (node) {
      var _this$props;

      if (node) {
        node.style.display = 'block';

        _this.updateDialogStyle(node);
      }

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (_this.props.onEnter) (_this$props = _this.props).onEnter.apply(_this$props, [node].concat(args));
    };

    _this.handleEntering = function (node) {
      var _this$props2;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      if (_this.props.onEntering) (_this$props2 = _this.props).onEntering.apply(_this$props2, [node].concat(args)); // FIXME: This should work even when animation is disabled.

      dom_helpers_events__WEBPACK_IMPORTED_MODULE_4___default.a.on(window, 'resize', _this.handleWindowResize);
    };

    _this.handleExited = function (node) {
      var _this$props3;

      if (node) node.style.display = ''; // RHL removes it sometimes

      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      if (_this.props.onExited) (_this$props3 = _this.props).onExited.apply(_this$props3, args); // FIXME: This should work even when animation is disabled.

      dom_helpers_events__WEBPACK_IMPORTED_MODULE_4___default.a.off(window, 'resize', _this.handleWindowResize);
    };

    _this.handleWindowResize = function () {
      _this.updateDialogStyle(_this._modal.dialog);
    };

    _this.renderBackdrop = function (props) {
      var _this$props4 = _this.props,
          bsPrefix = _this$props4.bsPrefix,
          backdropClassName = _this$props4.backdropClassName,
          animation = _this$props4.animation;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix + "-backdrop", backdropClassName, !animation && 'show')
      }));
    };

    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    dom_helpers_events__WEBPACK_IMPORTED_MODULE_4___default.a.off(window, 'resize', this.handleWindowResize);
  };

  _proto.updateDialogStyle = function updateDialogStyle(node) {
    if (!dom_helpers_util_inDOM__WEBPACK_IMPORTED_MODULE_6___default.a) return;
    var manager = this.props.manager;
    var containerIsOverflowing = manager.isContainerOverflowing(this._modal);
    var modalIsOverflowing = node.scrollHeight > dom_helpers_ownerDocument__WEBPACK_IMPORTED_MODULE_5___default()(node).documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: containerIsOverflowing && !modalIsOverflowing ? dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7___default()() : undefined,
        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_7___default()() : undefined
      }
    });
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        bsPrefix = _this$props5.bsPrefix,
        className = _this$props5.className,
        style = _this$props5.style,
        dialogClassName = _this$props5.dialogClassName,
        children = _this$props5.children,
        Dialog = _this$props5.dialogAs,
        show = _this$props5.show,
        animation = _this$props5.animation,
        backdrop = _this$props5.backdrop,
        keyboard = _this$props5.keyboard,
        manager = _this$props5.manager,
        onEscapeKeyDown = _this$props5.onEscapeKeyDown,
        onShow = _this$props5.onShow,
        onHide = _this$props5.onHide,
        container = _this$props5.container,
        autoFocus = _this$props5.autoFocus,
        enforceFocus = _this$props5.enforceFocus,
        restoreFocus = _this$props5.restoreFocus,
        onEntered = _this$props5.onEntered,
        onExit = _this$props5.onExit,
        onExiting = _this$props5.onExiting,
        _ = _this$props5.onExited,
        _1 = _this$props5.onEntering,
        _6 = _this$props5.onEnter,
        _4 = _this$props5.onEntering,
        _2 = _this$props5.backdropClassName,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props5, ["bsPrefix", "className", "style", "dialogClassName", "children", "dialogAs", "show", "animation", "backdrop", "keyboard", "manager", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "onEntered", "onExit", "onExiting", "onExited", "onEntering", "onEnter", "onEntering", "backdropClassName"]);

    var clickHandler = backdrop === true ? this.handleClick : null;

    var baseModalStyle = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, style, {}, this.state.style); // Sets `display` always block when `animation` is false


    if (!animation) baseModalStyle.display = 'block';
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ModalContext__WEBPACK_IMPORTED_MODULE_18__["default"].Provider, {
      value: this.modalContext
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_overlays_Modal__WEBPACK_IMPORTED_MODULE_9___default.a, {
      show: show,
      backdrop: backdrop,
      container: container,
      keyboard: keyboard,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      onEscapeKeyDown: onEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      manager: manager,
      ref: this.setModalRef,
      style: baseModalStyle,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix),
      containerClassName: bsPrefix + "-open",
      transition: animation ? DialogTransition : undefined,
      backdropTransition: animation ? BackdropTransition : undefined,
      renderBackdrop: this.renderBackdrop,
      onClick: clickHandler,
      onMouseUp: this.handleMouseUp,
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onExited: this.handleExited
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Dialog, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      onMouseDown: this.handleDialogMouseDown,
      className: dialogClassName
    }), children)));
  };

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Modal.defaultProps = defaultProps;
var DecoratedModal = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_17__["createBootstrapComponent"])(Modal, 'modal');
DecoratedModal.Body = _ModalBody__WEBPACK_IMPORTED_MODULE_11__["default"];
DecoratedModal.Header = _ModalHeader__WEBPACK_IMPORTED_MODULE_14__["default"];
DecoratedModal.Title = _ModalTitle__WEBPACK_IMPORTED_MODULE_15__["default"];
DecoratedModal.Footer = _ModalFooter__WEBPACK_IMPORTED_MODULE_13__["default"];
DecoratedModal.Dialog = _ModalDialog__WEBPACK_IMPORTED_MODULE_12__["default"];
DecoratedModal.TRANSITION_DURATION = 300;
DecoratedModal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ __webpack_exports__["default"] = (DecoratedModal);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalBody.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalBody.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('modal-body'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalContext.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ModalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  onHide: function onHide() {}
});
/* harmony default export */ __webpack_exports__["default"] = (ModalContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalDialog.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalDialog.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var ModalDialog = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      centered = _ref.centered,
      size = _ref.size,
      children = _ref.children,
      scrollable = _ref.scrollable,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "centered", "size", "children", "scrollable"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'modal');
  var dialogClass = bsPrefix + "-dialog";
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(dialogClass, className, size && bsPrefix + "-" + size, centered && dialogClass + "-centered", scrollable && dialogClass + "-scrollable")
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bsPrefix + "-content")
  }, children));
});
ModalDialog.displayName = 'ModalDialog';
/* harmony default export */ __webpack_exports__["default"] = (ModalDialog);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalFooter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalFooter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('modal-footer'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalHeader.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalHeader.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/es/CloseButton.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalContext */ "./node_modules/react-bootstrap/es/ModalContext.js");








var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var ModalHeader = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      onHide = _ref.onHide,
      className = _ref.className,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'modal-header');
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_ModalContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var handleClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    if (context) context.onHide();
    if (onHide) onHide();
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }), children, closeButton && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: closeLabel,
    onClick: handleClick
  }));
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ModalHeader);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ModalTitle.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ModalTitle.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _utils_divWithClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/divWithClassName */ "./node_modules/react-bootstrap/es/utils/divWithClassName.js");


var DivStyledAsH4 = Object(_utils_divWithClassName__WEBPACK_IMPORTED_MODULE_1__["default"])('h4');
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('modal-title', {
  Component: DivStyledAsH4
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Nav.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Nav.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/es/CardContext.js");
/* harmony import */ var _AbstractNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/es/AbstractNav.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/es/NavLink.js");












var defaultProps = {
  justify: false,
  fill: false
};
var Nav = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_5__["useUncontrolled"])(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      bsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["useBootstrapPrefix"])(bsPrefix, 'nav');
  var navbarBsPrefix, cardHeaderBsPrefix;
  var navbarContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_NavbarContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var cardContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_CardContext__WEBPACK_IMPORTED_MODULE_8__["default"]);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    navbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AbstractNav__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
Nav.Item = _NavItem__WEBPACK_IMPORTED_MODULE_10__["default"];
Nav.Link = _NavLink__WEBPACK_IMPORTED_MODULE_11__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavContext.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var NavContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (NavContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavDropdown.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavDropdown.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/es/Dropdown.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/es/NavLink.js");








var NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        active = _this$props.active,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      as: _NavItem__WEBPACK_IMPORTED_MODULE_5__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Toggle, {
      id: id,
      eventKey: null,
      active: active,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      as: _NavLink__WEBPACK_IMPORTED_MODULE_6__["default"]
    }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return NavDropdown;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

NavDropdown.Item = _Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Item;
NavDropdown.Divider = _Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Divider;
NavDropdown.Header = _Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Header;
/* harmony default export */ __webpack_exports__["default"] = (NavDropdown);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavItem.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavItem.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var NavItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "children", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'nav-item');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }), children);
});
NavItem.displayName = 'NavItem';
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavLink.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavLink.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony import */ var _AbstractNavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/es/AbstractNavItem.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var defaultProps = {
  disabled: false,
  as: _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__["default"]
};
var NavLink = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["useBootstrapPrefix"])(bsPrefix, 'nav-link');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AbstractNavItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, disabled && 'disabled')
  }));
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Navbar.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Navbar.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");
/* harmony import */ var _NavbarBrand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarBrand */ "./node_modules/react-bootstrap/es/NavbarBrand.js");
/* harmony import */ var _NavbarCollapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavbarCollapse */ "./node_modules/react-bootstrap/es/NavbarCollapse.js");
/* harmony import */ var _NavbarToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavbarToggle */ "./node_modules/react-bootstrap/es/NavbarToggle.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");












var defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};
var Navbar = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_4__["useUncontrolled"])(props, {
    expanded: 'onToggle'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      expand = _useUncontrolled.expand,
      variant = _useUncontrolled.variant,
      bg = _useUncontrolled.bg,
      fixed = _useUncontrolled.fixed,
      sticky = _useUncontrolled.sticky,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'nav' : _useUncontrolled$as,
      expanded = _useUncontrolled.expanded,
      _onToggle = _useUncontrolled.onToggle,
      onSelect = _useUncontrolled.onSelect,
      collapseOnSelect = _useUncontrolled.collapseOnSelect,
      controlledProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__["useBootstrapPrefix"])(bsPrefix, 'navbar');
  var handleCollapse = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (onSelect) onSelect.apply(void 0, arguments);

    if (collapseOnSelect && expanded) {
      _onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, _onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  var expandClass = bsPrefix + "-expand";
  if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
  var navbarContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      onToggle: function onToggle() {
        return _onToggle(!expanded);
      },
      bsPrefix: bsPrefix,
      expanded: expanded
    };
  }, [bsPrefix, expanded, _onToggle]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
    value: navbarContext
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_11__["default"].Provider, {
    value: handleCollapse
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, controlledProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
  }), children)));
});
Navbar.defaultProps = defaultProps;
Navbar.displayName = 'Navbar';
Navbar.Brand = _NavbarBrand__WEBPACK_IMPORTED_MODULE_6__["default"];
Navbar.Toggle = _NavbarToggle__WEBPACK_IMPORTED_MODULE_8__["default"];
Navbar.Collapse = _NavbarCollapse__WEBPACK_IMPORTED_MODULE_7__["default"];
Navbar.Text = Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_5__["default"])('navbar-text', {
  Component: 'span'
});
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarBrand.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavbarBrand.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var NavbarBrand = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'navbar-brand');
  var Component = as || (props.href ? 'a' : 'span');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }));
});
NavbarBrand.displayName = 'NavbarBrand';
/* harmony default export */ __webpack_exports__["default"] = (NavbarBrand);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarCollapse.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavbarCollapse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collapse */ "./node_modules/react-bootstrap/es/Collapse.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");






var NavbarCollapse = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "bsPrefix"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'navbar-collapse');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavbarContext__WEBPACK_IMPORTED_MODULE_5__["default"].Consumer, null, function (context) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Collapse__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      in: !!(context && context.expanded)
    }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});
NavbarCollapse.displayName = 'NavbarCollapse';
/* harmony default export */ __webpack_exports__["default"] = (NavbarCollapse);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavbarContext.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/NavbarToggle.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/NavbarToggle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/es/NavbarContext.js");







var defaultProps = {
  label: 'Toggle navigation'
};
var NavbarToggle = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      onClick = _ref.onClick,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "children", "label", "as", "onClick"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'navbar-toggler');

  var _ref2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"]) || {},
      onToggle = _ref2.onToggle,
      expanded = _ref2.expanded;

  var handleClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(function (e) {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, !!expanded && 'collapsed')
  }), children || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: bsPrefix + "-icon"
  }));
});
NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (NavbarToggle);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Overlay.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Overlay.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-overlays/Overlay */ "./node_modules/react-overlays/Overlay.js");
/* harmony import */ var react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");







var defaultProps = {
  transition: _Fade__WEBPACK_IMPORTED_MODULE_6__["default"],
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef(Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"])(r));
  });
}

function Overlay(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      outerProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "transition"]);

  transition = transition === true ? _Fade__WEBPACK_IMPORTED_MODULE_6__["default"] : transition || null;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_overlays_Overlay__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, outerProps, {
    transition: transition
  }), function (_ref2) {
    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["props", "arrowProps", "show"]);

    wrapRefs(overlayProps, arrowProps);
    if (typeof overlay === 'function') return overlay(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {}, overlayProps, {
      show: show,
      arrowProps: arrowProps
    }));
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(overlay, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {}, overlayProps, {
      arrowProps: arrowProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(overlay.props.className, !transition && show && 'show'),
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, overlay.props.style, {}, overlayProps.style)
    }));
  });
}

Overlay.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/OverlayTrigger.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/OverlayTrigger.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/query/contains */ "./node_modules/dom-helpers/query/contains.js");
/* harmony import */ var dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap/es/Overlay.js");









var RefHolder =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

var normalizeDelay = function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
};

var defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
}; // eslint-disable-next-line react/no-multi-comp

var OverlayTrigger =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(OverlayTrigger, _React$Component2);

  function OverlayTrigger(props, context) {
    var _this;

    _this = _React$Component2.call(this, props, context) || this;

    _this.getTarget = function () {
      return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(_this.trigger.current);
    };

    _this.handleShow = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'show';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.show) {
        _this.show();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'show') _this.show();
      }, delay.show);
    };

    _this.handleHide = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'hide';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.hide) {
        _this.hide();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'hide') _this.hide();
      }, delay.hide);
    };

    _this.handleFocus = function (e) {
      var _this$getChildProps = _this.getChildProps(),
          onFocus = _this$getChildProps.onFocus;

      _this.handleShow(e);

      if (onFocus) onFocus(e);
    };

    _this.handleBlur = function (e) {
      var _this$getChildProps2 = _this.getChildProps(),
          onBlur = _this$getChildProps2.onBlur;

      _this.handleHide(e);

      if (onBlur) onBlur(e);
    };

    _this.handleClick = function (e) {
      var _this$getChildProps3 = _this.getChildProps(),
          onClick = _this$getChildProps3.onClick;

      if (_this.state.show) _this.hide();else _this.show();
      if (onClick) onClick(e);
    };

    _this.handleMouseOver = function (e) {
      _this.handleMouseOverOut(_this.handleShow, e, 'fromElement');
    };

    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleHide, e, 'toElement');
    };

    _this.trigger = react__WEBPACK_IMPORTED_MODULE_4___default.a.createRef();
    _this.state = {
      show: !!props.defaultShow
    }; // We add aria-describedby in the case where the overlay is a role="tooltip"
    // for other cases describedby isn't appropriate (e.g. a popover with inputs) so we don't add it.

    _this.ariaModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var popper = data.instance.popper;

        var target = _this.getTarget();

        if (!_this.state.show || !target) return data;
        var role = popper.getAttribute('role') || '';

        if (popper.id && role.toLowerCase() === 'tooltip') {
          target.setAttribute('aria-describedby', popper.id);
        }

        return data;
      }
    };
    return _this;
  }

  var _proto2 = OverlayTrigger.prototype;

  _proto2.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this._timeout);
  };

  _proto2.getChildProps = function getChildProps() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(this.props.children).props;
  };

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.
  _proto2.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !dom_helpers_query_contains__WEBPACK_IMPORTED_MODULE_3___default()(target, related)) {
      handler(e);
    }
  };

  _proto2.hide = function hide() {
    this.setState({
      show: false
    });
  };

  _proto2.show = function show() {
    this.setState({
      show: true
    });
  };

  _proto2.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        overlay = _this$props.overlay,
        children = _this$props.children,
        _this$props$popperCon = _this$props.popperConfig,
        popperConfig = _this$props$popperCon === void 0 ? {} : _this$props$popperCon,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["trigger", "overlay", "children", "popperConfig"]);

    delete props.delay;
    delete props.defaultShow;
    var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(children);
    var triggerProps = {};
    var triggers = trigger == null ? [] : [].concat(trigger);

    if (triggers.indexOf('click') !== -1) {
      triggerProps.onClick = this.handleClick;
    }

    if (triggers.indexOf('focus') !== -1) {
      triggerProps.onFocus = this.handleShow;
      triggerProps.onBlur = this.handleHide;
    }

    if (triggers.indexOf('hover') !== -1) {
       true ? warning__WEBPACK_IMPORTED_MODULE_6___default()(triggers.length >= 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.') : undefined;
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(RefHolder, {
      ref: this.trigger
    }, Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(child, triggerProps)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Overlay__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      popperConfig: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popperConfig, {
        modifiers: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, popperConfig.modifiers, {
          ariaModifier: this.ariaModifier
        })
      }),
      show: this.state.show,
      onHide: this.handleHide,
      target: this.getTarget
    }), overlay));
  };

  return OverlayTrigger;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

OverlayTrigger.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (OverlayTrigger);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PageItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/PageItem.js ***!
  \*****************************************************/
/*! exports provided: default, First, Prev, Ellipsis, Next, Last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "First", function() { return First; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prev", function() { return Prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipsis", function() { return Ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Next", function() { return Next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Last", function() { return Last; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");




/* eslint-disable react/no-multi-comp */



var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
function PageItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);

  var Component = active || disabled ? 'span' : _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"];
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
}
PageItem.defaultProps = defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["children"]);

      delete props.active;
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(PageItem, props, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        "aria-hidden": "true"
      }, children || defaultValue), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "sr-only"
      }, label));
    };

    return _class;
  }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _class.displayName = name, _temp;
}

var First = createButton('First', '«');
var Prev = createButton('Prev', '‹', 'Previous');
var Ellipsis = createButton('Ellipsis', '…', 'More');
var Next = createButton('Next', '›');
var Last = createButton('Last', '»');

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Pagination.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Pagination.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _PageItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageItem */ "./node_modules/react-bootstrap/es/PageItem.js");







/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        size = _this$props.size,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "children", "size"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix, size && bsPrefix + "-" + size)
    }), children);
  };

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

var DecoratedPagination = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Pagination, 'pagination');
DecoratedPagination.First = _PageItem__WEBPACK_IMPORTED_MODULE_6__["First"];
DecoratedPagination.Prev = _PageItem__WEBPACK_IMPORTED_MODULE_6__["Prev"];
DecoratedPagination.Ellipsis = _PageItem__WEBPACK_IMPORTED_MODULE_6__["Ellipsis"];
DecoratedPagination.Item = _PageItem__WEBPACK_IMPORTED_MODULE_6__["default"];
DecoratedPagination.Next = _PageItem__WEBPACK_IMPORTED_MODULE_6__["Next"];
DecoratedPagination.Last = _PageItem__WEBPACK_IMPORTED_MODULE_6__["Last"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedPagination);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Popover.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Popover.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _PopoverTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PopoverTitle */ "./node_modules/react-bootstrap/es/PopoverTitle.js");
/* harmony import */ var _PopoverContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PopoverContent */ "./node_modules/react-bootstrap/es/PopoverContent.js");








var defaultProps = {
  placement: 'right'
};

function Popover(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      content = _ref.content,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "children", "content", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "tooltip",
    ref: innerRef,
    style: style,
    "x-placement": placement,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, "bs-popover-" + placement)
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "arrow"
  }, arrowProps)), content ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_PopoverContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, children) : children);
}

Popover.defaultProps = defaultProps;
var DecoratedPopover = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Popover, 'popover');
DecoratedPopover.Title = _PopoverTitle__WEBPACK_IMPORTED_MODULE_6__["default"];
DecoratedPopover.Content = _PopoverContent__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (DecoratedPopover);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PopoverContent.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/PopoverContent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var PopoverContent = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "bsPrefix", "className", "children"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'popover-body');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }), children);
});
/* harmony default export */ __webpack_exports__["default"] = (PopoverContent);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/PopoverTitle.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/PopoverTitle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var PopoverTitle = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "bsPrefix", "className", "children"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'popover-header');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bsPrefix, className)
  }), children);
});
/* harmony default export */ __webpack_exports__["default"] = (PopoverTitle);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ProgressBar.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ProgressBar.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _utils_ElementChildren__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/ElementChildren */ "./node_modules/react-bootstrap/es/utils/ElementChildren.js");







var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;
  react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(DecoratedProgressBar, null);
    if (child.type === element.type) return;
    var childIdentifier = react__WEBPACK_IMPORTED_MODULE_4___default.a.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });
  return error;
}

var defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ProgressBar, _React$Component);

  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.renderProgressBar = function renderProgressBar(_ref) {
    var _classNames;

    var min = _ref.min,
        now = _ref.now,
        max = _ref.max,
        label = _ref.label,
        srOnly = _ref.srOnly,
        striped = _ref.striped,
        animated = _ref.animated,
        className = _ref.className,
        style = _ref.style,
        variant = _ref.variant,
        bsPrefix = _ref.bsPrefix,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      role: "progressbar",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix + "-bar", (_classNames = {}, _classNames["bg-" + variant] = variant, _classNames[bsPrefix + "-bar-animated"] = animated, _classNames[bsPrefix + "-bar-striped"] = animated || striped, _classNames)),
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        width: getPercentage(now, min, max) + "%"
      }, style),
      "aria-valuenow": now,
      "aria-valuemin": min,
      "aria-valuemax": max
    }), srOnly ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "sr-only"
    }, label) : label);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isChild = _this$props.isChild,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["isChild"]);

    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min,
        now = props.now,
        max = props.max,
        label = props.label,
        srOnly = props.srOnly,
        striped = props.striped,
        animated = props.animated,
        bsPrefix = props.bsPrefix,
        variant = props.variant,
        className = props.className,
        children = props.children,
        wrapperProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, wrapperProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }), children ? Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_6__["map"])(children, function (child) {
      return Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(child, {
        isChild: true
      });
    }) : this.renderProgressBar({
      min: min,
      now: now,
      max: max,
      label: label,
      srOnly: srOnly,
      striped: striped,
      animated: animated,
      bsPrefix: bsPrefix,
      variant: variant
    }));
  };

  return ProgressBar;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ProgressBar.defaultProps = defaultProps;
var DecoratedProgressBar = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ProgressBar, 'progress');
/* harmony default export */ __webpack_exports__["default"] = (DecoratedProgressBar);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ResponsiveEmbed.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ResponsiveEmbed.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  aspectRatio: '1by1'
};

var ResponsiveEmbed =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        aspectRatio = _this$props.aspectRatio,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "children", "aspectRatio"]);

    var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(children);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, className, aspectRatio && bsPrefix + "-" + aspectRatio)
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(child.props.className, bsPrefix + "-item")
    }));
  };

  return ResponsiveEmbed;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ResponsiveEmbed.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(ResponsiveEmbed, 'embed-responsive'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Row.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Row.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var defaultProps = {
  noGutters: false
};
var Row = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var bsPrefix = props.bsPrefix,
      noGutters = props.noGutters,
      _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      className = props.className,
      otherProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["bsPrefix", "noGutters", "as", "className"]);

  var decoratedBsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'row');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, otherProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, decoratedBsPrefix, noGutters && 'no-gutters')
  }));
});
Row.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SafeAnchor.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/SafeAnchor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");





function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "disabled", "onKeyDown"]);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_3__["default"])(handleKeyDown, onKeyDown)
  }));
});
SafeAnchor.displayName = 'SafeAnchor';
/* harmony default export */ __webpack_exports__["default"] = (SafeAnchor);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SelectableContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/SelectableContext.js ***!
  \**************************************************************/
/*! exports provided: makeEventKey, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEventKey", function() { return makeEventKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SelectableContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var makeEventKey = function makeEventKey(eventKey, href) {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["default"] = (SelectableContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Spinner.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Spinner.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");





var Spinner = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      animation = _ref.animation,
      size = _ref.size,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "variant", "animation", "size", "children", "as", "className"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'spinner');
  var bsSpinnerPrefix = bsPrefix + "-" + animation;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsSpinnerPrefix, size && bsSpinnerPrefix + "-" + size, variant && "text-" + variant)
  }), children);
});
Spinner.displayName = 'Spinner';
/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/SplitButton.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/SplitButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/es/ButtonGroup.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/es/Dropdown.js");







var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** An `href` passed to the non-toggle Button */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** An anchor `target` passed to the non-toggle Button */
  target: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** An `onClick` handler passed to the non-toggle Button */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /** The content of the non-toggle Button.  */
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /** Disables both Buttons  */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** @ignore */
  bsPrefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** @ignore */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** @ignore */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
var defaultProps = {
  toggleLabel: 'Toggle dropdown'
};
var SplitButton = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      variant = _ref.variant,
      title = _ref.title,
      toggleLabel = _ref.toggleLabel,
      children = _ref.children,
      onClick = _ref.onClick,
      href = _ref.href,
      target = _ref.target,
      menuRole = _ref.menuRole,
      rootCloseEvent = _ref.rootCloseEvent,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["id", "bsPrefix", "size", "variant", "title", "toggleLabel", "children", "onClick", "href", "target", "menuRole", "rootCloseEvent"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    as: _ButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    size: size,
    variant: variant,
    disabled: props.disabled,
    bsPrefix: bsPrefix,
    href: href,
    target: target,
    onClick: onClick
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Toggle, {
    split: true,
    id: id,
    size: size,
    variant: variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "sr-only"
  }, toggleLabel)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_6__["default"].Menu, {
    role: menuRole,
    rootCloseEvent: rootCloseEvent
  }, children));
});
SplitButton.propTypes = propTypes;
SplitButton.defaultProps = defaultProps;
SplitButton.displayName = 'SplitButton';
/* harmony default export */ __webpack_exports__["default"] = (SplitButton);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tab.js":
/*!************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Tab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/es/TabContainer.js");
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/es/TabContent.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/es/TabPane.js");





/* eslint-disable react/require-render-return, react/no-unused-prop-types */

var Tab =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
  };

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Tab.Container = _TabContainer__WEBPACK_IMPORTED_MODULE_2__["default"];
Tab.Content = _TabContent__WEBPACK_IMPORTED_MODULE_3__["default"];
Tab.Pane = _TabPane__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabContainer.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/TabContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/es/TabContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");







var TabContainer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(TabContainer, _React$Component);

  function TabContainer(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.getControlledId = function (key) {
      return _this.getKey(key, 'tabpane');
    };

    _this.getControllerId = function (key) {
      return _this.getKey(key, 'tab');
    };

    _this.state = {
      tabContext: {
        onSelect: _this.props.onSelect,
        activeKey: _this.props.activeKey,
        transition: _this.props.transition,
        mountOnEnter: _this.props.mountOnEnter,
        unmountOnExit: _this.props.unmountOnExit,
        getControlledId: _this.getControlledId,
        getControllerId: _this.getControllerId
      }
    };
    return _this;
  }

  TabContainer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var activeKey = _ref.activeKey,
        mountOnEnter = _ref.mountOnEnter,
        unmountOnExit = _ref.unmountOnExit,
        transition = _ref.transition;
    return {
      tabContext: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevState.tabContext, {
        activeKey: activeKey,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        transition: transition
      })
    };
  };

  var _proto = TabContainer.prototype;

  _proto.getKey = function getKey(key, type) {
    var _this$props = this.props,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    if (generateChildId) return generateChildId(key, type);
    return id ? id + "-" + type + "-" + key : null;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        onSelect = _this$props2.onSelect;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: this.state.tabContext
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
      value: onSelect
    }, children));
  };

  return TabContainer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(uncontrollable__WEBPACK_IMPORTED_MODULE_3__["uncontrollable"])(TabContainer, {
  activeKey: 'onSelect'
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabContent.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/TabContent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var TabContent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(TabContent, _React$Component);

  function TabContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        _this$props$as = _this$props.as,
        Component = _this$props$as === void 0 ? 'div' : _this$props$as,
        className = _this$props.className,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "as", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, bsPrefix)
    }));
  };

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(TabContent, 'tab-content'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabContext.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/TabContext.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (TabContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/TabPane.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/TabPane.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/es/TabContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");









function useTabContext(props) {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_TabContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  if (!context) return props;

  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(context, ["activeKey", "getControlledId", "getControllerId"]);

  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["makeEventKey"])(props.eventKey);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    active: props.active == null && key != null ? Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["makeEventKey"])(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || _Fade__WEBPACK_IMPORTED_MODULE_7__["default"]),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

var TabPane = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var _useTabContext = useTabContext(props),
      bsPrefix = _useTabContext.bsPrefix,
      className = _useTabContext.className,
      active = _useTabContext.active,
      onEnter = _useTabContext.onEnter,
      onEntering = _useTabContext.onEntering,
      onEntered = _useTabContext.onEntered,
      onExit = _useTabContext.onExit,
      onExiting = _useTabContext.onExiting,
      onExited = _useTabContext.onExited,
      mountOnEnter = _useTabContext.mountOnEnter,
      unmountOnExit = _useTabContext.unmountOnExit,
      Transition = _useTabContext.transition,
      _useTabContext$as = _useTabContext.as,
      Component = _useTabContext$as === void 0 ? 'div' : _useTabContext$as,
      _ = _useTabContext.eventKey,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useTabContext, ["bsPrefix", "className", "active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'tab-pane');
  if (!active && unmountOnExit) return null;
  var pane = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
    ref: ref,
    role: "tabpanel",
    "aria-hidden": !active,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, {
      active: active
    })
  }));
  if (Transition) pane = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Transition, {
    in: active,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
  // conflict with the top level one.

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TabContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: null
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: null
  }, pane));
});
TabPane.displayName = 'TabPane';
/* harmony default export */ __webpack_exports__["default"] = (TabPane);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Table.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Table.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var Table =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Table, _React$Component);

  function Table() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        striped = _this$props.striped,
        bordered = _this$props.bordered,
        borderless = _this$props.borderless,
        hover = _this$props.hover,
        size = _this$props.size,
        variant = _this$props.variant,
        responsive = _this$props.responsive,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["bsPrefix", "className", "striped", "bordered", "borderless", "hover", "size", "variant", "responsive"]);

    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, className, variant && bsPrefix + "-" + variant, size && bsPrefix + "-" + size, striped && bsPrefix + "-striped", bordered && bsPrefix + "-bordered", borderless && bsPrefix + "-borderless", hover && bsPrefix + "-hover");
    var table = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: classes
    }));

    if (responsive) {
      var responsiveClass = bsPrefix + "-responsive";

      if (typeof responsive === 'string') {
        responsiveClass = responsiveClass + "-" + responsive;
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: responsiveClass
      }, table);
    }

    return table;
  };

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["createBootstrapComponent"])(Table, 'table'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tabs.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Tabs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Nav */ "./node_modules/react-bootstrap/es/Nav.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/es/NavLink.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/es/TabContainer.js");
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/es/TabContent.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/es/TabPane.js");
/* harmony import */ var _utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/ElementChildren */ "./node_modules/react-bootstrap/es/utils/ElementChildren.js");












var TabContainer = _TabContainer__WEBPACK_IMPORTED_MODULE_8__["default"].ControlledComponent;
var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__["forEach"])(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  var _child$props = child.props,
      title = _child$props.title,
      eventKey = _child$props.eventKey,
      disabled = _child$props.disabled,
      tabClassName = _child$props.tabClassName;

  if (title == null) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NavItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
    as: _NavLink__WEBPACK_IMPORTED_MODULE_6__["default"],
    eventKey: eventKey,
    disabled: disabled,
    className: tabClassName
  }, title);
}

var Tabs = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_4__["useUncontrolled"])(props, {
    activeKey: 'onSelect'
  }),
      id = _useUncontrolled.id,
      onSelect = _useUncontrolled.onSelect,
      transition = _useUncontrolled.transition,
      mountOnEnter = _useUncontrolled.mountOnEnter,
      unmountOnExit = _useUncontrolled.unmountOnExit,
      children = _useUncontrolled.children,
      _useUncontrolled$acti = _useUncontrolled.activeKey,
      activeKey = _useUncontrolled$acti === void 0 ? getDefaultActiveKey(children) : _useUncontrolled$acti,
      controlledProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabContainer, {
    ref: ref,
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: transition,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, controlledProps, {
    role: "tablist",
    as: "nav"
  }), Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__["map"])(children, renderTab)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TabContent__WEBPACK_IMPORTED_MODULE_9__["default"], null, Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_11__["map"])(children, function (child) {
    var childProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, child.props);

    delete childProps.title;
    delete childProps.disabled;
    delete childProps.tabClassName;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TabPane__WEBPACK_IMPORTED_MODULE_10__["default"], childProps);
  })));
});
Tabs.defaultProps = defaultProps;
Tabs.displayName = 'Tabs';
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ThemeProvider.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ThemeProvider.js ***!
  \**********************************************************/
/*! exports provided: useBootstrapPrefix, createBootstrapComponent, ThemeConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBootstrapPrefix", function() { return useBootstrapPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBootstrapComponent", function() { return createBootstrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Consumer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/context/forwardRef */ "./node_modules/@restart/context/forwardRef.js");
/* harmony import */ var _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var ThemeContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prefixes);
  }, [prefixes]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return _restart_context_forwardRef__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref2, ref) {
    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref2);

    props[forwardRefAs] = ref; // eslint-disable-next-line react/prop-types

    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      bsPrefix: bsPrefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}


/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Toast.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Toast.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useTimeout */ "./node_modules/@restart/hooks/esm/useTimeout.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");
/* harmony import */ var _ToastHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToastHeader */ "./node_modules/react-bootstrap/es/ToastHeader.js");
/* harmony import */ var _ToastBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToastBody */ "./node_modules/react-bootstrap/es/ToastBody.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _ToastContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ToastContext */ "./node_modules/react-bootstrap/es/ToastContext.js");










var defaultProps = {
  animation: true,
  autohide: false,
  delay: 3000,
  show: true,
  transition: _Fade__WEBPACK_IMPORTED_MODULE_5__["default"]
};
var Toast = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      Transition = _ref.transition,
      show = _ref.show,
      animation = _ref.animation,
      delay = _ref.delay,
      autohide = _ref.autohide,
      onClose = _ref.onClose,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "children", "transition", "show", "animation", "delay", "autohide", "onClose"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["useBootstrapPrefix"])('toast');
  var delayRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(delay);
  var onCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(onClose);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // We use refs for these, because we don't want to restart the autohide
    // timer in case these values change.
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  var autohideTimeout = Object(_restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var autohideFunc = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!(autohide && show)) {
      return;
    }

    onCloseRef.current();
  }, [autohide, show]);
  autohideTimeout.set(autohideFunc, delayRef.current);
  var useAnimation = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Transition && animation;
  }, [Transition, animation]);
  var toast = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, className, !useAnimation && show && 'show'),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }), children);
  var toastContext = {
    onClose: onClose
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ToastContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: toastContext
  }, useAnimation ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Transition, {
    in: show
  }, toast) : toast);
});
Toast.defaultProps = defaultProps;
Toast.displayName = 'Toast';
Toast.Body = _ToastBody__WEBPACK_IMPORTED_MODULE_7__["default"];
Toast.Header = _ToastHeader__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToastBody.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ToastBody.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createWithBsPrefix */ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('toast-body'));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToastContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ToastContext.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ToastContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  onClose: function onClose() {}
});
/* harmony default export */ __webpack_exports__["default"] = (ToastContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToastHeader.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ToastHeader.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/es/CloseButton.js");
/* harmony import */ var _ToastContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToastContext */ "./node_modules/react-bootstrap/es/ToastContext.js");








var defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};
var ToastHeader = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      className = _ref.className,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "closeLabel", "closeButton", "className", "children"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'toast-header');
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_ToastContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var handleClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    if (context) {
      context.onClose();
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bsPrefix, className)
  }), children, closeButton && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: closeLabel,
    onClick: handleClick,
    className: "ml-2 mb-1",
    "data-dismiss": "toast"
  }));
});
ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ToastHeader);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToggleButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ToggleButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/es/Button.js");







var noop = function noop() {};

var ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ToggleButton, _React$Component);

  function ToggleButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: true
      });
    };

    _this.handleBlur = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: false
      });
    };

    return _this;
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        name = _this$props.name,
        className = _this$props.className,
        checked = _this$props.checked,
        type = _this$props.type,
        onChange = _this$props.onChange,
        value = _this$props.value,
        disabled = _this$props.disabled,
        inputRef = _this$props.inputRef,
        innerRef = _this$props.innerRef,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef", "innerRef"]);

    var focused = this.state.focused;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, focused && 'focus', disabled && 'disabled'),
      type: null,
      active: !!checked,
      as: "label"
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      name: name,
      type: type,
      value: value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: onChange || noop
    }), children);
  };

  return ToggleButton;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ToggleButton, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    innerRef: ref
  }, props));
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/es/ToggleButtonGroup.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/ToggleButtonGroup.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/createChainedFunction */ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js");
/* harmony import */ var _utils_ElementChildren__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ElementChildren */ "./node_modules/react-bootstrap/es/utils/ElementChildren.js");
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/es/ButtonGroup.js");
/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ToggleButton */ "./node_modules/react-bootstrap/es/ToggleButton.js");










var defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var value = this.props.value;
    return value == null ? [] : [].concat(value);
  };

  _proto.handleToggle = function handleToggle(value, event) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) onChange(value, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== value;
      }), event);
    } else {
      onChange([].concat(values, [value]), event);
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["children", "type", "name"]);

    delete props.onChange;
    delete props.value;
    var values = this.getValues();
    !(type !== 'radio' || !!name) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_4___default()(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : undefined : void 0;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      toggle: true
    }), Object(_utils_ElementChildren__WEBPACK_IMPORTED_MODULE_7__["map"])(children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler(e) {
        return _this.handleToggle(value, e);
      };

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: values.indexOf(value) !== -1,
        onChange: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_6__["default"])(onChange, handler)
      });
    }));
  };

  return ToggleButtonGroup;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ToggleButtonGroup.defaultProps = defaultProps;
var UncontrolledToggleButtonGroup = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_5__["uncontrollable"])(ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = _ToggleButton__WEBPACK_IMPORTED_MODULE_9__["default"];
/* harmony default export */ __webpack_exports__["default"] = (UncontrolledToggleButtonGroup);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/Tooltip.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/es/Tooltip.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "./node_modules/prop-types-extra/lib/isRequiredForA11y.js");
/* harmony import */ var prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_isRequiredForA11y__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");






var defaultProps = {
  placement: 'right'
};
var Tooltip = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'tooltip');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": placement,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, "bs-tooltip-" + placement)
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "arrow"
  }, arrowProps)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
});
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/es/index.js ***!
  \**************************************************/
/*! exports provided: Accordion, useAccordionToggle, Alert, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardColumns, CardDeck, CardImg, CardGroup, Carousel, CarouselItem, CloseButton, Col, Collapse, Dropdown, DropdownButton, DropdownItem, Fade, Form, FormControl, FormCheck, FormGroup, FormLabel, FormText, Container, Image, Figure, InputGroup, Jumbotron, ListGroup, ListGroupItem, Media, Modal, ModalBody, ModalDialog, ModalFooter, ModalTitle, Nav, Navbar, NavbarBrand, NavDropdown, NavItem, Overlay, OverlayTrigger, PageItem, Pagination, Popover, PopoverContent, PopoverTitle, ProgressBar, ResponsiveEmbed, Row, SafeAnchor, Spinner, SplitButton, Tab, TabContainer, TabContent, Table, TabPane, Tabs, ThemeProvider, ToggleButton, ToggleButtonGroup, Tooltip, Toast, ToastBody, ToastHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ "./node_modules/react-bootstrap/es/Accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _Accordion__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useAccordionToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAccordionToggle */ "./node_modules/react-bootstrap/es/useAccordionToggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAccordionToggle", function() { return _useAccordionToggle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert */ "./node_modules/react-bootstrap/es/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Badge */ "./node_modules/react-bootstrap/es/Badge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _Badge__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Breadcrumb */ "./node_modules/react-bootstrap/es/Breadcrumb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return _Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/react-bootstrap/es/BreadcrumbItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/es/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/es/ButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _ButtonGroup__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ButtonToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonToolbar */ "./node_modules/react-bootstrap/es/ButtonToolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return _ButtonToolbar__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Card */ "./node_modules/react-bootstrap/es/Card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _CardColumns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardColumns */ "./node_modules/react-bootstrap/es/CardColumns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardColumns", function() { return _CardColumns__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _CardDeck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CardDeck */ "./node_modules/react-bootstrap/es/CardDeck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardDeck", function() { return _CardDeck__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _CardImg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/es/CardImg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardImg", function() { return _CardImg__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _CardGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CardGroup */ "./node_modules/react-bootstrap/es/CardGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardGroup", function() { return _CardGroup__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Carousel */ "./node_modules/react-bootstrap/es/Carousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _CarouselItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CarouselItem */ "./node_modules/react-bootstrap/es/CarouselItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return _CarouselItem__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/es/CloseButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return _CloseButton__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/es/Col.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _Col__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Collapse */ "./node_modules/react-bootstrap/es/Collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return _Collapse__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/es/Dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _Dropdown__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _DropdownButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./DropdownButton */ "./node_modules/react-bootstrap/es/DropdownButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownButton", function() { return _DropdownButton__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _DropdownItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./DropdownItem */ "./node_modules/react-bootstrap/es/DropdownItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return _DropdownItem__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/es/Fade.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return _Fade__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Form */ "./node_modules/react-bootstrap/es/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/es/FormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return _FormControl__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/es/FormCheck.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormCheck", function() { return _FormCheck__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/es/FormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return _FormGroup__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/es/FormLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _FormLabel__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _FormText__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/es/FormText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormText", function() { return _FormText__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Container */ "./node_modules/react-bootstrap/es/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Image */ "./node_modules/react-bootstrap/es/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Figure */ "./node_modules/react-bootstrap/es/Figure.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return _Figure__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _InputGroup__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./InputGroup */ "./node_modules/react-bootstrap/es/InputGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return _InputGroup__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _Jumbotron__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Jumbotron */ "./node_modules/react-bootstrap/es/Jumbotron.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return _Jumbotron__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _ListGroup__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ListGroup */ "./node_modules/react-bootstrap/es/ListGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return _ListGroup__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _ListGroupItem__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ListGroupItem */ "./node_modules/react-bootstrap/es/ListGroupItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListGroupItem", function() { return _ListGroupItem__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _Media__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Media */ "./node_modules/react-bootstrap/es/Media.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return _Media__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Modal */ "./node_modules/react-bootstrap/es/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _ModalBody__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ModalBody */ "./node_modules/react-bootstrap/es/ModalBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return _ModalBody__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _ModalDialog__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ModalDialog */ "./node_modules/react-bootstrap/es/ModalDialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDialog", function() { return _ModalDialog__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _ModalFooter__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ModalFooter */ "./node_modules/react-bootstrap/es/ModalFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return _ModalFooter__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _ModalTitle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ModalTitle */ "./node_modules/react-bootstrap/es/ModalTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return _ModalTitle__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Nav */ "./node_modules/react-bootstrap/es/Nav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Navbar */ "./node_modules/react-bootstrap/es/Navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Navbar__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _NavbarBrand__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./NavbarBrand */ "./node_modules/react-bootstrap/es/NavbarBrand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return _NavbarBrand__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _NavDropdown__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./NavDropdown */ "./node_modules/react-bootstrap/es/NavDropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavDropdown", function() { return _NavDropdown__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/es/NavItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return _NavItem__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap/es/Overlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _Overlay__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _OverlayTrigger__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./OverlayTrigger */ "./node_modules/react-bootstrap/es/OverlayTrigger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayTrigger", function() { return _OverlayTrigger__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _PageItem__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./PageItem */ "./node_modules/react-bootstrap/es/PageItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageItem", function() { return _PageItem__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Pagination */ "./node_modules/react-bootstrap/es/Pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Popover */ "./node_modules/react-bootstrap/es/Popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _Popover__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _PopoverContent__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./PopoverContent */ "./node_modules/react-bootstrap/es/PopoverContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverContent", function() { return _PopoverContent__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _PopoverTitle__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./PopoverTitle */ "./node_modules/react-bootstrap/es/PopoverTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverTitle", function() { return _PopoverTitle__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ProgressBar */ "./node_modules/react-bootstrap/es/ProgressBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _ProgressBar__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _ResponsiveEmbed__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ResponsiveEmbed */ "./node_modules/react-bootstrap/es/ResponsiveEmbed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveEmbed", function() { return _ResponsiveEmbed__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./Row */ "./node_modules/react-bootstrap/es/Row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Row__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/es/SafeAnchor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafeAnchor", function() { return _SafeAnchor__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Spinner */ "./node_modules/react-bootstrap/es/Spinner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _SplitButton__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./SplitButton */ "./node_modules/react-bootstrap/es/SplitButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitButton", function() { return _SplitButton__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./Tab */ "./node_modules/react-bootstrap/es/Tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _Tab__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/es/TabContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContainer", function() { return _TabContainer__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/es/TabContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return _TabContent__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./Table */ "./node_modules/react-bootstrap/es/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/es/TabPane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return _TabPane__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./Tabs */ "./node_modules/react-bootstrap/es/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _ThemeProvider__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./ToggleButton */ "./node_modules/react-bootstrap/es/ToggleButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return _ToggleButton__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./ToggleButtonGroup */ "./node_modules/react-bootstrap/es/ToggleButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonGroup", function() { return _ToggleButtonGroup__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/react-bootstrap/es/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./Toast */ "./node_modules/react-bootstrap/es/Toast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _Toast__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _ToastBody__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./ToastBody */ "./node_modules/react-bootstrap/es/ToastBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastBody", function() { return _ToastBody__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _ToastHeader__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./ToastHeader */ "./node_modules/react-bootstrap/es/ToastHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastHeader", function() { return _ToastHeader__WEBPACK_IMPORTED_MODULE_72__["default"]; });




















































































































































/***/ }),

/***/ "./node_modules/react-bootstrap/es/useAccordionToggle.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/useAccordionToggle.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/es/SelectableContext.js");
/* harmony import */ var _AccordionContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccordionContext */ "./node_modules/react-bootstrap/es/AccordionContext.js");



/* harmony default export */ __webpack_exports__["default"] = (function (eventKey, onClick) {
  var contextEventKey = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AccordionContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var onSelect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return function (e) {
    /* 
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    var eventKeyPassed = eventKey === contextEventKey ? null : eventKey;
    onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
});

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/BootstrapModalManager.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/BootstrapModalManager.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BootstrapModalManager; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js");
/* harmony import */ var dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js");
/* harmony import */ var dom_helpers_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js");
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-overlays/ModalManager */ "./node_modules/react-overlays/ModalManager.js");
/* harmony import */ var react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4__);





var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager =
/*#__PURE__*/
function (_ModalManager) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ModalManager.call.apply(_ModalManager, [this].concat(args)) || this;

    _this.adjustAndStore = function (prop, element, adjust) {
      var actual = element.style[prop];
      element.dataset[prop] = actual;
      dom_helpers_style__WEBPACK_IMPORTED_MODULE_2___default()(element, prop, parseFloat(dom_helpers_style__WEBPACK_IMPORTED_MODULE_2___default()(element, prop)) + adjust + "px");
    };

    _this.restore = function (prop, element) {
      var value = element.dataset[prop];

      if (value !== undefined) {
        delete element.dataset[prop];
        dom_helpers_style__WEBPACK_IMPORTED_MODULE_2___default()(element, prop, value);
      }
    };

    return _this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_3___default()();
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('paddingRight', el, size);
    });
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, -size);
    });
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this3 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this3.restore('paddingRight', el);
    });
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
    dom_helpers_query_querySelectorAll__WEBPACK_IMPORTED_MODULE_1___default()(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
  };

  return BootstrapModalManager;
}(react_overlays_ModalManager__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/ElementChildren.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/ElementChildren.js ***!
  \******************************************************************/
/*! exports provided: map, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  var index = 0;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  var index = 0;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (child) {
    if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(child)) func(child, index++);
  });
}



/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/createChainedFunction.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/createChainedFunction.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ __webpack_exports__["default"] = (createChainedFunction);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/createWithBsPrefix.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWithBsPrefix; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/util/camelize */ "./node_modules/dom-helpers/util/camelize.js");
/* harmony import */ var dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ThemeProvider */ "./node_modules/react-bootstrap/es/ThemeProvider.js");







var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + dom_helpers_util_camelize__WEBPACK_IMPORTED_MODULE_4___default()(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["className", "bsPrefix", "as"]);

    var resolvedPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, prefix);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Tag, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, resolvedPrefix)
    }, props));
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/divWithClassName.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/divWithClassName.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (className) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (p, ref) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(p.className, className)
    }));
  });
});

/***/ }),

/***/ "./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-bootstrap/es/utils/triggerBrowserReflow.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return triggerBrowserReflow; });
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/Transition.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/react-transition-group/esm/Transition.js ***!
  \********************************************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-bootstrap/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-bootstrap/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    return (// allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set `appear` to `true`, and the component will transition in as soon
   * as the `<Transition>` mounts.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/config.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/react-transition-group/esm/config.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \*************************************************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap/node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-context-toolbox/forwardRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-context-toolbox/forwardRef.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _ref) {
  var displayName = _ref.displayName,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  Object.assign(render, {
    displayName: displayName
  });
  if (_react.default.forwardRef || !allowFallback) return Object.assign(_react.default.forwardRef(render), {
    propTypes: propTypes,
    defaultProps: defaultProps
  });
  return Object.assign(function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}

/***/ }),

/***/ "./node_modules/react-context-toolbox/mapContextToProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-context-toolbox/mapContextToProps.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mapContextToProps;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _forwardRef = _interopRequireDefault(__webpack_require__(/*! ./forwardRef */ "./node_modules/react-context-toolbox/forwardRef.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDisplayName = function getDisplayName(Component) {
  var name = typeof Component === 'string' ? Component : Component.name || Component.displayName;
  return name ? "ContextTransform(" + name + ")" : 'ContextTransform';
};

var ensureConsumer = function ensureConsumer(c) {
  return c.Consumer || c;
};

function $mapContextToProps(_ref, Component) {
  var maybeArrayOfConsumers = _ref.consumers,
      mapToProps = _ref.mapToProps,
      displayName = _ref.displayName,
      _ref$forwardRefAs = _ref.forwardRefAs,
      forwardRefAs = _ref$forwardRefAs === void 0 ? 'ref' : _ref$forwardRefAs;
  var consumers = maybeArrayOfConsumers;

  if (!Array.isArray(maybeArrayOfConsumers)) {
    consumers = [maybeArrayOfConsumers];
  }

  var SingleConsumer = ensureConsumer(consumers[0]);

  function singleRender(props, ref) {
    var _extends2;

    var propsWithRef = _extends((_extends2 = {}, _extends2[forwardRefAs] = ref, _extends2), props);

    return _react.default.createElement(SingleConsumer, null, function (value) {
      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps(value, props)));
    });
  }

  function multiRender(props, ref) {
    var _extends3;

    var propsWithRef = _extends((_extends3 = {}, _extends3[forwardRefAs] = ref, _extends3), props);

    return consumers.reduceRight(function (inner, Context) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var Consumer = ensureConsumer(Context);
        return _react.default.createElement(Consumer, null, function (value) {
          return inner.apply(void 0, args.concat([value]));
        });
      };
    }, function () {
      for (var _len2 = arguments.length, contexts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        contexts[_key2] = arguments[_key2];
      }

      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps.apply(void 0, contexts.concat([props]))));
    })();
  }

  var contextTransform = consumers.length === 1 ? singleRender : multiRender;
  return (0, _forwardRef.default)(contextTransform, {
    displayName: displayName || getDisplayName(Component)
  });
}

function mapContextToProps(maybeOpts, mapToProps, Component) {
  if (arguments.length === 2) return $mapContextToProps(maybeOpts, mapToProps);
  return $mapContextToProps({
    consumers: maybeOpts,
    mapToProps: mapToProps
  }, Component);
}

/***/ }),

/***/ "./node_modules/react-overlays/Dropdown.js":
/*!*************************************************!*\
  !*** ./node_modules/react-overlays/Dropdown.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _matches = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/matches */ "./node_modules/dom-helpers/query/matches.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/querySelectorAll */ "./node_modules/dom-helpers/query/querySelectorAll.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _uncontrollable = _interopRequireDefault(__webpack_require__(/*! uncontrollable */ "./node_modules/react-overlays/node_modules/uncontrollable/esm/index.js"));

var Popper = _interopRequireWildcard(__webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js"));

var _DropdownContext = _interopRequireDefault(__webpack_require__(/*! ./DropdownContext */ "./node_modules/react-overlays/DropdownContext.js"));

var _DropdownMenu = _interopRequireDefault(__webpack_require__(/*! ./DropdownMenu */ "./node_modules/react-overlays/DropdownMenu.js"));

var _DropdownToggle = _interopRequireDefault(__webpack_require__(/*! ./DropdownToggle */ "./node_modules/react-overlays/DropdownToggle.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired,

  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: _propTypes.default.oneOf(['up', 'left', 'right', 'down']),

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: _propTypes.default.oneOf([false, true, 'keyboard']),

  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: _propTypes.default.string.isRequired,

  /**
   * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
   */
  alignEnd: _propTypes.default.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: _propTypes.default.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```js
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: _propTypes.default.func
};
var defaultProps = {
  itemSelector: '* > *'
};
/**
 * `Dropdown` is set of structural components for building, accessible dropdown menus with close-on-click,
 * keyboard navigation, and correct focus handling. As with all the react-overlay's
 * components its BYOS (bring your own styles). Dropdown is primarily
 * built from three base components, you should compose to build your Dropdowns.
 *
 * - `Dropdown`, which wraps the menu and toggle, and handles keyboard navigation
 * - `Dropdown.Toggle` generally a button that triggers the menu opening
 * - `Dropdown.Menu` The overlaid, menu, positioned to the toggle with PopperJs
 */

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  Dropdown.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var drop = _ref.drop,
        alignEnd = _ref.alignEnd,
        show = _ref.show;
    var lastShow = prevState.context.show;
    return {
      lastShow: lastShow,
      context: _extends({}, prevState.context, {
        drop: drop,
        show: show,
        alignEnd: alignEnd
      })
    };
  };

  function Dropdown(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleClick = function (event) {
      _this.toggleOpen(event);
    };

    _this.handleKeyDown = function (event) {
      var key = event.key,
          target = event.target; // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
      // in inscrutability

      var isInput = /input|textarea/i.test(target.tagName);

      if (isInput && (key === ' ' || key !== 'Escape' && _this.menu.contains(target))) {
        return;
      }

      _this._lastSourceEvent = event.type;

      switch (key) {
        case 'ArrowUp':
          {
            var next = _this.getNextFocusedChild(target, -1);

            if (next && next.focus) next.focus();
            event.preventDefault();
            return;
          }

        case 'ArrowDown':
          event.preventDefault();

          if (!_this.props.show) {
            _this.toggleOpen(event);
          } else {
            var _next = _this.getNextFocusedChild(target, 1);

            if (_next && _next.focus) _next.focus();
          }

          return;

        case 'Escape':
        case 'Tab':
          _this.props.onToggle(false, event);

          break;

        default:
      }
    };

    _this._focusInDropdown = false;
    _this.menu = null;
    _this.state = {
      context: {
        close: _this.handleClose,
        toggle: _this.handleClick,
        menuRef: function menuRef(r) {
          _this.menu = r;
        },
        toggleRef: function toggleRef(r) {
          var toggleNode = r && _reactDom.default.findDOMNode(r);

          _this.setState(function (_ref2) {
            var context = _ref2.context;
            return {
              context: _extends({}, context, {
                toggleNode: toggleNode
              })
            };
          });
        }
      }
    };
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var show = this.props.show;
    var prevOpen = prevProps.show;

    if (show && !prevOpen) {
      this.maybeFocusFirst();
    }

    this._lastSourceEvent = null;

    if (!show && prevOpen) {
      // if focus hasn't already moved from the menu let's return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  _proto.getNextFocusedChild = function getNextFocusedChild(current, offset) {
    if (!this.menu) return null;
    var itemSelector = this.props.itemSelector;
    var items = (0, _querySelectorAll.default)(this.menu, itemSelector);
    var index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  _proto.hasMenuRole = function hasMenuRole() {
    return this.menu && (0, _matches.default)(this.menu, '[role=menu]');
  };

  _proto.focus = function focus() {
    var toggleNode = this.state.context.toggleNode;

    if (toggleNode && toggleNode.focus) {
      toggleNode.focus();
    }
  };

  _proto.maybeFocusFirst = function maybeFocusFirst() {
    var type = this._lastSourceEvent;
    var focusFirstItemOnShow = this.props.focusFirstItemOnShow;

    if (focusFirstItemOnShow == null) {
      focusFirstItemOnShow = this.hasMenuRole() ? 'keyboard' : false;
    }

    if (focusFirstItemOnShow === false || focusFirstItemOnShow === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    var itemSelector = this.props.itemSelector;
    var first = (0, _querySelectorAll.default)(this.menu, itemSelector)[0];
    if (first && first.focus) first.focus();
  };

  _proto.toggleOpen = function toggleOpen(event) {
    var show = !this.props.show;
    this.props.onToggle(show, event);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    delete props.onToggle;

    if (this.menu && this.state.lastShow && !this.props.show) {
      this._focusInDropdown = this.menu.contains(document.activeElement);
    }

    return _react.default.createElement(_DropdownContext.default.Provider, {
      value: this.state.context
    }, _react.default.createElement(Popper.Manager, null, children({
      props: {
        onKeyDown: this.handleKeyDown
      }
    })));
  };

  return Dropdown;
}(_react.default.Component);

Dropdown.displayName = 'ReactOverlaysDropdown';
Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
var UncontrolledDropdown = (0, _uncontrollable.default)(Dropdown, {
  show: 'onToggle'
});
UncontrolledDropdown.Menu = _DropdownMenu.default;
UncontrolledDropdown.Toggle = _DropdownToggle.default;
var _default = UncontrolledDropdown;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/DropdownContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-overlays/DropdownContext.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownContext = _react.default.createContext({
  menuRef: function menuRef() {},
  toggleRef: function toggleRef() {},
  onToggle: function onToggle() {},
  toggleNode: undefined,
  alignEnd: null,
  show: null,
  drop: null
});

var _default = DropdownContext;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/DropdownMenu.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-overlays/DropdownMenu.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactPopper = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");

var _DropdownContext = _interopRequireDefault(__webpack_require__(/*! ./DropdownContext */ "./node_modules/react-overlays/DropdownContext.js"));

var _RootCloseWrapper = _interopRequireDefault(__webpack_require__(/*! ./RootCloseWrapper */ "./node_modules/react-overlays/RootCloseWrapper.js"));

var _mapContextToProps = _interopRequireDefault(__webpack_require__(/*! react-context-toolbox/mapContextToProps */ "./node_modules/react-context-toolbox/mapContextToProps.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      toggleId: null
    };
    _this.popperIsInitialized = false;

    _this.handleClose = function (e) {
      if (!_this.props.onToggle) return;

      _this.props.onToggle(false, e);
    };

    return _this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps) {
    // If, to the best we can tell, this update won't reinitialize popper,
    // manually schedule an update
    var shouldUpdatePopper = !prevProps.show && this.props.show && this.popperIsInitialized && // a new reference node will already trigger this internally
    prevProps.toggleNode === this.props.toggleNode;

    if (this.props.show && this.props.usePopper && !this.popperIsInitialized) {
      this.popperIsInitialized = true;
    }

    return !!shouldUpdatePopper;
  };

  _proto.componentDidUpdate = function componentDidUpdate(_, __, shouldUpdatePopper) {
    if (shouldUpdatePopper && this.scheduleUpdate) {
      this.scheduleUpdate();
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        show = _this$props.show,
        flip = _this$props.flip,
        menuRef = _this$props.menuRef,
        alignEnd = _this$props.alignEnd,
        drop = _this$props.drop,
        usePopper = _this$props.usePopper,
        toggleNode = _this$props.toggleNode,
        rootCloseEvent = _this$props.rootCloseEvent,
        _this$props$popperCon = _this$props.popperConfig,
        popperConfig = _this$props$popperCon === void 0 ? {} : _this$props$popperCon;
    var placement = alignEnd ? 'bottom-end' : 'bottom-start';
    if (drop === 'up') placement = alignEnd ? 'top-end' : 'top-start';
    if (drop === 'right') placement = alignEnd ? 'right-end' : 'right-start';
    if (drop === 'left') placement = alignEnd ? 'left-end' : 'left-start';
    var menu = null;
    var menuProps = {
      ref: menuRef,
      'aria-labelledby': toggleNode && toggleNode.id
    };
    var childArgs = {
      show: show,
      alignEnd: alignEnd,
      close: this.handleClose
    };

    if (!usePopper) {
      menu = this.props.children(_extends({}, childArgs, {
        props: menuProps
      }));
    } else if (this.popperIsInitialized || show) {
      // Add it this way, so it doesn't override someones usage
      // with react-poppers <Reference>
      if (toggleNode) popperConfig.referenceElement = toggleNode;
      menu = _react.default.createElement(_reactPopper.Popper, _extends({}, popperConfig, {
        innerRef: menuRef,
        placement: placement,
        eventsEnabled: !!show,
        modifiers: _extends({
          flip: {
            enabled: !!flip
          }
        }, popperConfig.modifiers)
      }), function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            popper = _objectWithoutPropertiesLoose(_ref, ["ref", "style"]);

        _this2.scheduleUpdate = popper.scheduleUpdate;
        return _this2.props.children(_extends({}, popper, childArgs, {
          props: _extends({}, menuProps, {
            ref: ref,
            style: style
          })
        }));
      });
    }

    return menu && _react.default.createElement(_RootCloseWrapper.default, {
      disabled: !show,
      event: rootCloseEvent,
      onRootClose: this.handleClose
    }, menu);
  };

  return DropdownMenu;
}(_react.default.Component);

DropdownMenu.displayName = 'ReactOverlaysDropdownMenu';
DropdownMenu.propTypes = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   alignEnd: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   outOfBoundaries: ?boolean,
   *   scheduleUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired,

  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: _propTypes.default.bool,

  /**
   * Aligns the dropdown menu to the 'end' of it's placement position.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  alignEnd: _propTypes.default.bool,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: _propTypes.default.bool,
  usePopper: _propTypes.default.oneOf([true, false]),

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: _propTypes.default.object,

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: _propTypes.default.string,

  /** @private */
  onToggle: _propTypes.default.func,

  /** @private */
  menuRef: _propTypes.default.func,

  /** @private */
  drop: _propTypes.default.string,

  /** @private */
  toggleNode: _propTypes.default.any
};
DropdownMenu.defaultProps = {
  usePopper: true
};
var DecoratedDropdownMenu = (0, _mapContextToProps.default)(_DropdownContext.default, function (_ref2, props) {
  var show = _ref2.show,
      alignEnd = _ref2.alignEnd,
      toggle = _ref2.toggle,
      drop = _ref2.drop,
      menuRef = _ref2.menuRef,
      toggleNode = _ref2.toggleNode;
  return {
    drop: drop,
    menuRef: menuRef,
    toggleNode: toggleNode,
    onToggle: toggle,
    show: show == null ? props.show : show,
    alignEnd: alignEnd == null ? props.alignEnd : alignEnd
  };
}, DropdownMenu);
var _default = DecoratedDropdownMenu;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/DropdownToggle.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-overlays/DropdownToggle.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DropdownContext = _interopRequireDefault(__webpack_require__(/*! ./DropdownContext */ "./node_modules/react-overlays/DropdownContext.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired
};

function DropdownToggle(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_DropdownContext.default.Consumer, null, function (_ref2) {
    var show = _ref2.show,
        toggle = _ref2.toggle,
        toggleRef = _ref2.toggleRef;
    return children({
      show: show,
      toggle: toggle,
      props: {
        ref: toggleRef,
        'aria-haspopup': true,
        'aria-expanded': !!show
      }
    });
  });
}

DropdownToggle.displayName = 'ReactOverlaysDropdownToggle';
DropdownToggle.propTypes = propTypes;
var _default = DropdownToggle;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/Modal.js":
/*!**********************************************!*\
  !*** ./node_modules/react-overlays/Modal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _activeElement = _interopRequireDefault(__webpack_require__(/*! dom-helpers/activeElement */ "./node_modules/dom-helpers/activeElement.js"));

var _contains = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/contains */ "./node_modules/dom-helpers/query/contains.js"));

var _inDOM = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _listen = _interopRequireDefault(__webpack_require__(/*! dom-helpers/events/listen */ "./node_modules/dom-helpers/events/listen.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _componentOrElement = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js"));

var _elementType = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/elementType */ "./node_modules/prop-types-extra/lib/elementType.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _ModalManager = _interopRequireDefault(__webpack_require__(/*! ./ModalManager */ "./node_modules/react-overlays/ModalManager.js"));

var _Portal = _interopRequireDefault(__webpack_require__(/*! ./Portal */ "./node_modules/react-overlays/Portal.js"));

var _getContainer = _interopRequireDefault(__webpack_require__(/*! ./utils/getContainer */ "./node_modules/react-overlays/utils/getContainer.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ./utils/ownerDocument */ "./node_modules/react-overlays/utils/ownerDocument.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var modalManager = new _ModalManager.default();

function omitProps(props, propTypes) {
  var keys = Object.keys(props);
  var newProps = {};
  keys.map(function (prop) {
    if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
      newProps[prop] = props[prop];
    }
  });
  return newProps;
}
/**
 * Love them or hate them, `<Modal />` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */


var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = {
      exited: !_this.props.show
    };

    _this.onPortalRendered = function () {
      if (_this.props.onShow) {
        _this.props.onShow();
      } // autofocus after onShow, to not trigger a focus event for previous
      // modals before this one is shown.


      _this.autoFocus();
    };

    _this.onShow = function () {
      var doc = (0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this)));
      var container = (0, _getContainer.default)(_this.props.container, doc.body);

      _this.props.manager.add(_assertThisInitialized(_assertThisInitialized(_this)), container, _this.props.containerClassName);

      _this.removeKeydownListener = (0, _listen.default)(doc, 'keydown', _this.handleDocumentKeyDown);
      _this.removeFocusListener = (0, _listen.default)(doc, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      function () {
        return setTimeout(_this.enforceFocus);
      }, true);
    };

    _this.onHide = function () {
      _this.props.manager.remove(_assertThisInitialized(_assertThisInitialized(_this)));

      _this.removeKeydownListener();

      _this.removeFocusListener();

      if (_this.props.restoreFocus) {
        _this.restoreLastFocus();
      }
    };

    _this.setDialogRef = function (ref) {
      _this.dialog = ref;
    };

    _this.setBackdropRef = function (ref) {
      _this.backdrop = ref && _reactDom.default.findDOMNode(ref);
    };

    _this.handleHidden = function () {
      _this.setState({
        exited: true
      });

      _this.onHide();

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.handleBackdropClick = function (e) {
      if (e.target !== e.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(e);
      }

      if (_this.props.backdrop === true) {
        _this.props.onHide();
      }
    };

    _this.handleDocumentKeyDown = function (e) {
      if (_this.props.keyboard && e.keyCode === 27 && _this.isTopModal()) {
        if (_this.props.onEscapeKeyDown) {
          _this.props.onEscapeKeyDown(e);
        }

        _this.props.onHide();
      }
    };

    _this.enforceFocus = function () {
      if (!_this.props.enforceFocus || !_this._isMounted || !_this.isTopModal()) {
        return;
      }

      var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))));

      if (_this.dialog && !(0, _contains.default)(_this.dialog, currentActiveElement)) {
        _this.dialog.focus();
      }
    };

    _this.renderBackdrop = function () {
      var _this$props2 = _this.props,
          renderBackdrop = _this$props2.renderBackdrop,
          Transition = _this$props2.backdropTransition;
      var backdrop = renderBackdrop({
        ref: _this.setBackdropRef,
        onClick: _this.handleBackdropClick
      });

      if (Transition) {
        backdrop = _react.default.createElement(Transition, {
          appear: true,
          in: _this.props.show
        }, backdrop);
      }

      return backdrop;
    };

    return _this;
  }

  Modal.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if (nextProps.show) {
      return {
        exited: false
      };
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      return {
        exited: true
      };
    }

    return null;
  };

  var _proto = Modal.prototype;

  _proto.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps) {
    if (_inDOM.default && !prevProps.show && this.props.show) {
      this.lastFocus = (0, _activeElement.default)();
    }

    return null;
  };

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this.props.show) {
      this.onShow();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;

    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$props3 = this.props,
        show = _this$props3.show,
        transition = _this$props3.transition;
    this._isMounted = false;

    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };

  _proto.autoFocus = function autoFocus() {
    if (!this.props.autoFocus) return;
    var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(this));

    if (this.dialog && !(0, _contains.default)(this.dialog, currentActiveElement)) {
      this.lastFocus = currentActiveElement;
      this.dialog.focus();
    }
  };

  _proto.restoreLastFocus = function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  };

  _proto.isTopModal = function isTopModal() {
    return this.props.manager.isTopModal(this);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        show = _this$props4.show,
        container = _this$props4.container,
        children = _this$props4.children,
        renderDialog = _this$props4.renderDialog,
        _this$props4$role = _this$props4.role,
        role = _this$props4$role === void 0 ? 'dialog' : _this$props4$role,
        Transition = _this$props4.transition,
        backdrop = _this$props4.backdrop,
        className = _this$props4.className,
        style = _this$props4.style,
        onExit = _this$props4.onExit,
        onExiting = _this$props4.onExiting,
        onEnter = _this$props4.onEnter,
        onEntering = _this$props4.onEntering,
        onEntered = _this$props4.onEntered,
        props = _objectWithoutPropertiesLoose(_this$props4, ["show", "container", "children", "renderDialog", "role", "transition", "backdrop", "className", "style", "onExit", "onExiting", "onEnter", "onEntering", "onEntered"]);

    if (!(show || Transition && !this.state.exited)) {
      return null;
    }

    var dialogProps = _extends({
      role: role,
      ref: this.setDialogRef,
      // apparently only works on the dialog role element
      'aria-modal': role === 'dialog' ? true : undefined
    }, omitProps(props, Modal.propTypes), {
      style: style,
      className: className,
      tabIndex: '-1'
    });

    var dialog = renderDialog ? renderDialog(dialogProps) : _react.default.createElement("div", dialogProps, _react.default.cloneElement(children, {
      role: 'document'
    }));

    if (Transition) {
      dialog = _react.default.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        in: show,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, dialog);
    }

    return _react.default.createElement(_Portal.default, {
      container: container,
      onRendered: this.onPortalRendered
    }, _react.default.createElement(_react.default.Fragment, null, backdrop && this.renderBackdrop(), dialog));
  };

  return Modal;
}(_react.default.Component);

Modal.propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: _propTypes.default.bool,

  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes.default.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes.default.func,

  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js
   *  renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: _propTypes.default.func,

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes.default.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes.default.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes.default.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _elementType.default,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _elementType.default,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes.default.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes.default.bool,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes.default.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes.default.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes.default.object.isRequired
};
Modal.defaultProps = {
  show: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  onHide: function onHide() {},
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react.default.createElement("div", props);
  }
};
Modal.Manager = _ModalManager.default;
var _default = Modal;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/ModalManager.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-overlays/ModalManager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _class = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class */ "./node_modules/dom-helpers/class/index.js"));

var _style = _interopRequireDefault(__webpack_require__(/*! dom-helpers/style */ "./node_modules/dom-helpers/style/index.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/scrollbarSize */ "./node_modules/dom-helpers/util/scrollbarSize.js"));

var _isOverflowing = _interopRequireDefault(__webpack_require__(/*! ./utils/isOverflowing */ "./node_modules/react-overlays/utils/isOverflowing.js"));

var _manageAriaHidden = __webpack_require__(/*! ./utils/manageAriaHidden */ "./node_modules/react-overlays/utils/manageAriaHidden.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}
/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */


var ModalManager =
/*#__PURE__*/
function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;

    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = (0, _scrollbarSize.default)();
  }

  var _proto = ModalManager.prototype;

  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };

  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function (d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style = {
      overflow: 'hidden' // we are only interested in the actual `style` here
      // becasue we will override it

    };
    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight = parseInt((0, _style.default)(container, 'paddingRight') || 0, 10) + this.scrollbarSize + "px";
    }

    (0, _style.default)(container, style);
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var style = containerState.style;
    Object.keys(style).forEach(function (key) {
      container.style[key] = style[key];
    });
  };

  _proto.add = function add(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      //right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: (0, _isOverflowing.default)(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(_class.default.addClass.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };

  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(_class.default.removeClass.bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      //otherwise make sure the next top modal is visible to a SR
      var _data$modals = data.modals[data.modals.length - 1],
          backdrop = _data$modals.backdrop,
          dialog = _data$modals.dialog;
      (0, _manageAriaHidden.ariaHidden)(false, dialog);
      (0, _manageAriaHidden.ariaHidden)(false, backdrop);
    }
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

var _default = ModalManager;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/Overlay.js":
/*!************************************************!*\
  !*** ./node_modules/react-overlays/Overlay.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _elementType = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/elementType */ "./node_modules/prop-types-extra/lib/elementType.js"));

var _componentOrElement = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _Portal = _interopRequireDefault(__webpack_require__(/*! ./Portal */ "./node_modules/react-overlays/Portal.js"));

var _RootCloseWrapper = _interopRequireDefault(__webpack_require__(/*! ./RootCloseWrapper */ "./node_modules/react-overlays/RootCloseWrapper.js"));

var _reactPopper = __webpack_require__(/*! react-popper */ "./node_modules/react-popper/lib/esm/index.js");

var _forwardRef = _interopRequireDefault(__webpack_require__(/*! react-context-toolbox/forwardRef */ "./node_modules/react-context-toolbox/forwardRef.js"));

var _WaitForContainer = _interopRequireDefault(__webpack_require__(/*! ./WaitForContainer */ "./node_modules/react-overlays/WaitForContainer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Overlay, _React$Component);

  function Overlay(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleHidden = function () {
      _this.setState({
        exited: true
      });

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.state = {
      exited: !props.show
    };
    _this.onHiddenListener = _this.handleHidden.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._lastTarget = null;
    return _this;
  }

  Overlay.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if (nextProps.show) {
      return {
        exited: false
      };
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      return {
        exited: true
      };
    }

    return null;
  };

  var _proto = Overlay.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      target: this.getTarget()
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;
    var target = this.getTarget();

    if (target !== this.state.target) {
      this.setState({
        target: target
      });
    }
  };

  _proto.getTarget = function getTarget() {
    var target = this.props.target;
    target = typeof target === 'function' ? target() : target;
    return target && _reactDom.default.findDOMNode(target) || null;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        _0 = _this$props2.target,
        container = _this$props2.container,
        containerPadding = _this$props2.containerPadding,
        placement = _this$props2.placement,
        rootClose = _this$props2.rootClose,
        children = _this$props2.children,
        flip = _this$props2.flip,
        _this$props2$popperCo = _this$props2.popperConfig,
        popperConfig = _this$props2$popperCo === void 0 ? {} : _this$props2$popperCo,
        Transition = _this$props2.transition,
        props = _objectWithoutPropertiesLoose(_this$props2, ["target", "container", "containerPadding", "placement", "rootClose", "children", "flip", "popperConfig", "transition"]);

    var target = this.state.target; // Don't un-render the overlay while it's transitioning out.

    var mountOverlay = props.show || Transition && !this.state.exited;

    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    var child = children;
    var _popperConfig$modifie = popperConfig.modifiers,
        modifiers = _popperConfig$modifie === void 0 ? {} : _popperConfig$modifie;

    var popperProps = _extends({}, popperConfig, {
      placement: placement,
      referenceElement: target,
      enableEvents: props.show,
      modifiers: _extends({}, modifiers, {
        preventOverflow: _extends({
          padding: containerPadding || 5
        }, modifiers.preventOverflow),
        flip: _extends({
          enabled: !!flip
        }, modifiers.preventOverflow)
      })
    });

    child = _react.default.createElement(_reactPopper.Popper, popperProps, function (_ref) {
      var arrowProps = _ref.arrowProps,
          style = _ref.style,
          ref = _ref.ref,
          popper = _objectWithoutPropertiesLoose(_ref, ["arrowProps", "style", "ref"]);

      _this2.popper = popper;

      var innerChild = _this2.props.children(_extends({}, popper, {
        // popper doesn't set the initial placement
        placement: popper.placement || placement,
        show: props.show,
        arrowProps: arrowProps,
        props: {
          ref: ref,
          style: style
        }
      }));

      if (Transition) {
        var onExit = props.onExit,
            onExiting = props.onExiting,
            onEnter = props.onEnter,
            onEntering = props.onEntering,
            onEntered = props.onEntered;
        innerChild = _react.default.createElement(Transition, {
          in: props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: _this2.onHiddenListener,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        }, innerChild);
      }

      return innerChild;
    });

    if (rootClose) {
      child = _react.default.createElement(_RootCloseWrapper.default, {
        onRootClose: props.onHide,
        event: props.rootCloseEvent,
        disabled: props.rootCloseDisabled
      }, child);
    }

    return _react.default.createElement(_Portal.default, {
      container: container
    }, child);
  };

  return Overlay;
}(_react.default.Component);

Overlay.propTypes = _extends({}, _Portal.default.propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes.default.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: _propTypes.default.oneOf(_reactPopper.placements),

  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: _propTypes.default.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   outOfBoundaries: ?boolean,
   *   scheduleUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: _propTypes.default.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _propTypes.default.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: _RootCloseWrapper.default.propTypes.event,

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: _RootCloseWrapper.default.propTypes.disabled,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    var propType = _propTypes.default.func;

    if (props.rootClose) {
      propType = propType.isRequired;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return propType.apply(void 0, [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition: _elementType.default,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes.default.func
});

var _default = (0, _forwardRef.default)(function (props, ref) {
  return (// eslint-disable-next-line react/prop-types
    _react.default.createElement(_WaitForContainer.default, {
      container: props.container
    }, function (container) {
      return _react.default.createElement(Overlay, _extends({}, props, {
        ref: ref,
        container: container
      }));
    })
  );
}, {
  displayName: 'withContainer(Overlay)'
});

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/Portal.js":
/*!***********************************************!*\
  !*** ./node_modules/react-overlays/Portal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _componentOrElement = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _WaitForContainer = _interopRequireDefault(__webpack_require__(/*! ./WaitForContainer */ "./node_modules/react-overlays/WaitForContainer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.render = function render() {
    var _this = this;

    return this.props.children ? _react.default.createElement(_WaitForContainer.default, {
      container: this.props.container,
      onContainerResolved: this.props.onRendered
    }, function (container) {
      return _reactDom.default.createPortal(_this.props.children, container);
    }) : null;
  };

  return Portal;
}(_react.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),
  onRendered: _propTypes.default.func
};
var _default = Portal;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/RootCloseWrapper.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/RootCloseWrapper.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _contains = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/contains */ "./node_modules/dom-helpers/query/contains.js"));

var _listen = _interopRequireDefault(__webpack_require__(/*! dom-helpers/events/listen */ "./node_modules/dom-helpers/events/listen.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ./utils/ownerDocument */ "./node_modules/react-overlays/utils/ownerDocument.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The `<RootCloseWrapper/>` component registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 */


var RootCloseWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.addEventListeners = function () {
      var event = _this.props.event;
      var doc = (0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))); // Use capture for this listener so it fires before React's listener, to
      // avoid false positives in the contains() check below if the target DOM
      // element is removed in the React mouse callback.

      _this.removeMouseCaptureListener = (0, _listen.default)(doc, event, _this.handleMouseCapture, true);
      _this.removeMouseListener = (0, _listen.default)(doc, event, _this.handleMouse);
      _this.removeKeyupListener = (0, _listen.default)(doc, 'keyup', _this.handleKeyUp);

      if ('ontouchstart' in doc.documentElement) {
        _this.mobileSafariHackListeners = [].slice.call(document.body.children).map(function (el) {
          return (0, _listen.default)(el, 'mousemove', noop);
        });
      }
    };

    _this.removeEventListeners = function () {
      if (_this.removeMouseCaptureListener) _this.removeMouseCaptureListener();
      if (_this.removeMouseListener) _this.removeMouseListener();
      if (_this.removeKeyupListener) _this.removeKeyupListener();
      if (_this.mobileSafariHackListeners) _this.mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };

    _this.handleMouseCapture = function (e) {
      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains.default)(_reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))), e.target);
    };

    _this.handleMouse = function (e) {
      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.handleKeyUp = function (e) {
      if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.preventMouseRootClose = false;
    return _this;
  }

  var _proto = RootCloseWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (!this.props.disabled) {
      this.addEventListeners();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.props.disabled && prevProps.disabled) {
      this.addEventListeners();
    } else if (this.props.disabled && !prevProps.disabled) {
      this.removeEventListeners();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.props.disabled) {
      this.removeEventListeners();
    }
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return RootCloseWrapper;
}(_react.default.Component);

RootCloseWrapper.displayName = 'RootCloseWrapper';
RootCloseWrapper.propTypes = {
  /**
   * Callback fired after click or mousedown. Also triggers when user hits `esc`.
   */
  onRootClose: _propTypes.default.func,

  /**
   * Children to render.
   */
  children: _propTypes.default.element,

  /**
   * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
   */
  disabled: _propTypes.default.bool,

  /**
   * Choose which document mouse event to bind to.
   */
  event: _propTypes.default.oneOf(['click', 'mousedown'])
};
RootCloseWrapper.defaultProps = {
  event: 'click'
};
var _default = RootCloseWrapper;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/WaitForContainer.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/WaitForContainer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _componentOrElement = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/componentOrElement */ "./node_modules/prop-types-extra/lib/componentOrElement.js"));

var _inDOM = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/inDOM */ "./node_modules/dom-helpers/util/inDOM.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _getContainer = _interopRequireDefault(__webpack_require__(/*! ./utils/getContainer */ "./node_modules/react-overlays/utils/getContainer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),
  onContainerResolved: _propTypes.default.func
};

var WaitForContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(WaitForContainer, _React$Component);

  function WaitForContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    if (!_inDOM.default) return _assertThisInitialized(_this);
    var container = _this.props.container;
    if (typeof container === 'function') container = container();

    if (container && !_reactDom.default.findDOMNode(container)) {
      // The container is a React component that has not yet been rendered.
      // Don't set the container node yet.
      return _assertThisInitialized(_this);
    }

    _this.setContainer(container);

    return _this;
  }

  var _proto = WaitForContainer.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    if (!this._container) {
      this.setContainer(this.props.container);
      this.forceUpdate(this.props.onContainerResolved);
    } else if (this.props.onContainerResolved) {
      this.props.onContainerResolved();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._container = null;
  };

  _proto.setContainer = function setContainer(container) {
    this._container = (0, _getContainer.default)(container, (0, _ownerDocument.default)().body);
  };

  _proto.render = function render() {
    return this._container ? this.props.children(this._container) : null;
  };

  return WaitForContainer;
}(_react.default.Component);

WaitForContainer.propTypes = propTypes;
var _default = WaitForContainer;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-overlays/node_modules/uncontrollable/esm/hook.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-overlays/node_modules/uncontrollable/esm/hook.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUncontrolled; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-overlays/node_modules/uncontrollable/esm/utils.js");



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var defaultValue = result[_utils__WEBPACK_IMPORTED_MODULE_3__["defaultKey"](fieldName)],
        propsValue = result[fieldName],
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(result, [_utils__WEBPACK_IMPORTED_MODULE_3__["defaultKey"](fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];
    var prevProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultValue),
        stateValue = _useState[0],
        setState = _useState[1];

    var isProp = _utils__WEBPACK_IMPORTED_MODULE_3__["isProp"](props, fieldName);
    var wasProp = _utils__WEBPACK_IMPORTED_MODULE_3__["isProp"](prevProps.current, fieldName);
    prevProps.current = props;
    /**
     * If a prop switches from controlled to Uncontrolled
     * reset its value to the defaultValue
     */

    if (!isProp && wasProp) {
      setState(defaultValue);
    }

    var propsHandler = props[handlerName];
    var handler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (value) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (propsHandler) propsHandler.apply(void 0, [value].concat(args));
      setState(value);
    }, [setState, propsHandler]);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = isProp ? propsValue : stateValue, _extends2[handlerName] = handler, _extends2));
  }, props);
}

/***/ }),

/***/ "./node_modules/react-overlays/node_modules/uncontrollable/esm/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-overlays/node_modules/uncontrollable/esm/index.js ***!
  \******************************************************************************/
/*! exports provided: useUncontrolled, uncontrollable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncontrollable", function() { return uncontrollable; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-overlays/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/react-overlays/node_modules/uncontrollable/esm/utils.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hook.js */ "./node_modules/react-overlays/node_modules/uncontrollable/esm/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUncontrolled", function() { return _hook_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });








function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = _utils__WEBPACK_IMPORTED_MODULE_5__["canAcceptRef"](Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(_utils__WEBPACK_IMPORTED_MODULE_5__["defaultKey"]);
  !(canAcceptRef || !methods.length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_4___default()(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : undefined : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          _this._values[propName] = value;
          if (!_this.unmounted) _this.forceUpdate();
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let the forceUpdate trigger the update
      return !this._notifying;
    };

    _proto.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var props = this.props;
      this._values = Object.create(null);
      controlledProps.forEach(function (key) {
        _this2._values[key] = props[_utils__WEBPACK_IMPORTED_MODULE_5__["defaultKey"](key)];
      });
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var props = this.props;
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        if (!_utils__WEBPACK_IMPORTED_MODULE_5__["isProp"](nextProps, key) && _utils__WEBPACK_IMPORTED_MODULE_5__["isProp"](props, key)) {
          _this3._values[key] = nextProps[_utils__WEBPACK_IMPORTED_MODULE_5__["defaultKey"](key)];
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this4.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this4._values[propName];
      });
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    innerRef: function innerRef() {}
  }, _utils__WEBPACK_IMPORTED_MODULE_5__["uncontrolledPropTypes"](controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef) {
    WrappedComponent = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(UncontrolledComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        innerRef: ref
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}
/* harmony default export */ __webpack_exports__["default"] = (uncontrollable);

/***/ }),

/***/ "./node_modules/react-overlays/node_modules/uncontrollable/esm/utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-overlays/node_modules/uncontrollable/esm/utils.js ***!
  \******************************************************************************/
/*! exports provided: uncontrolledPropTypes, isProp, defaultKey, canAcceptRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncontrolledPropTypes", function() { return uncontrolledPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProp", function() { return isProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultKey", function() { return defaultKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAcceptRef", function() { return canAcceptRef; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : undefined : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}

/***/ }),

/***/ "./node_modules/react-overlays/utils/getContainer.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-overlays/utils/getContainer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = getContainer;

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  if (container == null) return defaultContainer;
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || null;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/utils/isOverflowing.js":
/*!************************************************************!*\
  !*** ./node_modules/react-overlays/utils/isOverflowing.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = isOverflowing;

var _isWindow = _interopRequireDefault(__webpack_require__(/*! dom-helpers/query/isWindow */ "./node_modules/dom-helpers/query/isWindow.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument.default)(node);
  var win = (0, _isWindow.default)(doc);
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow.default)(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-overlays/utils/manageAriaHidden.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-overlays/utils/manageAriaHidden.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, exclude, cb) {
  exclude = [].concat(exclude);
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) return;

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, _ref2) {
  var root = _ref2.root,
      backdrop = _ref2.backdrop;
  siblings(container, [root, backdrop], function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, _ref3) {
  var root = _ref3.root,
      backdrop = _ref3.backdrop;
  siblings(container, [root, backdrop], function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),

/***/ "./node_modules/react-overlays/utils/ownerDocument.js":
/*!************************************************************!*\
  !*** ./node_modules/react-overlays/utils/ownerDocument.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = _default;

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! dom-helpers/ownerDocument */ "./node_modules/dom-helpers/ownerDocument.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(componentOrElement) {
  return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(componentOrElement));
}

module.exports = exports.default;

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Manager.js":
/*!******************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Manager.js ***!
  \******************************************************/
/*! exports provided: ManagerContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerContext", function() { return ManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! create-react-context */ "./node_modules/react-popper/node_modules/create-react-context/lib/index.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_5__);






var ManagerContext = create_react_context__WEBPACK_IMPORTED_MODULE_5___default()({
  setReferenceNode: undefined,
  referenceNode: undefined
});

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(Manager, _React$Component);

  function Manager() {
    var _this;

    _this = _React$Component.call(this) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "setReferenceNode", function (referenceNode) {
      if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
        return;
      }

      _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, context, {
            referenceNode: referenceNode
          })
        };
      });
    });

    _this.state = {
      context: {
        setReferenceNode: _this.setReferenceNode,
        referenceNode: undefined
      }
    };
    return _this;
  }

  var _proto = Manager.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ManagerContext.Provider, {
      value: this.state.context
    }, this.props.children);
  };

  return Manager;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Popper.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Popper.js ***!
  \*****************************************************/
/*! exports provided: InnerPopper, placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerPopper", function() { return InnerPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popper; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");









var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      data: undefined,
      placement: undefined
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "popperInstance", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "popperNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "arrowNode", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      Object(_utils__WEBPACK_IMPORTED_MODULE_8__["safeInvoke"])(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers, {
          arrow: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_6__["default"](referenceElement, popperNode, _this.getOptions());
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_8__["safeInvoke"])(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_8__["unwrapArray"])(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

var placements = popper_js__WEBPACK_IMPORTED_MODULE_6__["default"].placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["referenceElement"]);

  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_7__["ManagerContext"].Consumer, null, function (_ref2) {
    var referenceNode = _ref2.referenceNode;
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](InnerPopper, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/Reference.js":
/*!********************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/Reference.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reference; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/react-popper/lib/esm/utils.js");









var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this), "refHandler", function (node) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(_this.props.innerRef, node);
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_utils__WEBPACK_IMPORTED_MODULE_7__["safeInvoke"])(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning__WEBPACK_IMPORTED_MODULE_5___default()(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["unwrapArray"])(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

function Reference(props) {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Manager__WEBPACK_IMPORTED_MODULE_6__["ManagerContext"].Consumer, null, function (_ref) {
    var setReferenceNode = _ref.setReferenceNode;
    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](InnerReference, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/index.js ***!
  \****************************************************/
/*! exports provided: Popper, placements, Manager, Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./node_modules/react-popper/lib/esm/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["placements"]; });

/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager */ "./node_modules/react-popper/lib/esm/Manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return _Manager__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference */ "./node_modules/react-popper/lib/esm/Reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _Reference__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// Public components



 // Public types

/***/ }),

/***/ "./node_modules/react-popper/lib/esm/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/utils.js ***!
  \****************************************************/
/*! exports provided: unwrapArray, safeInvoke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapArray", function() { return unwrapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeInvoke", function() { return safeInvoke; });
/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};

/***/ }),

/***/ "./node_modules/react-popper/node_modules/create-react-context/lib/implementation.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-popper/node_modules/create-react-context/lib/implementation.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-popper/node_modules/create-react-context/lib/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-popper/node_modules/create-react-context/lib/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/react-popper/node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/uncontrollable/esm/hook.js":
/*!*************************************************!*\
  !*** ./node_modules/uncontrollable/esm/hook.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUncontrolled; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/esm/utils.js");



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var defaultValue = result[_utils__WEBPACK_IMPORTED_MODULE_3__["defaultKey"](fieldName)],
        propsValue = result[fieldName],
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(result, [_utils__WEBPACK_IMPORTED_MODULE_3__["defaultKey"](fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];
    var prevProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultValue),
        stateValue = _useState[0],
        setState = _useState[1];

    var isProp = _utils__WEBPACK_IMPORTED_MODULE_3__["isProp"](props, fieldName);
    var wasProp = _utils__WEBPACK_IMPORTED_MODULE_3__["isProp"](prevProps.current, fieldName);
    prevProps.current = props;
    /**
     * If a prop switches from controlled to Uncontrolled
     * reset its value to the defaultValue
     */

    if (!isProp && wasProp) {
      setState(defaultValue);
    }

    var propsHandler = props[handlerName];
    var handler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (value) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (propsHandler) propsHandler.apply(void 0, [value].concat(args));
      setState(value);
    }, [setState, propsHandler]);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, (_extends2 = {}, _extends2[fieldName] = isProp ? propsValue : stateValue, _extends2[handlerName] = handler, _extends2));
  }, props);
}

/***/ }),

/***/ "./node_modules/uncontrollable/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/uncontrollable/esm/index.js ***!
  \**************************************************/
/*! exports provided: useUncontrolled, uncontrollable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook.js */ "./node_modules/uncontrollable/esm/hook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUncontrolled", function() { return _hook_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _uncontrollable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uncontrollable.js */ "./node_modules/uncontrollable/esm/uncontrollable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uncontrollable", function() { return _uncontrollable_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/uncontrollable/esm/uncontrollable.js":
/*!***********************************************************!*\
  !*** ./node_modules/uncontrollable/esm/uncontrollable.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uncontrollable; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/uncontrollable/esm/utils.js");






function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = _utils__WEBPACK_IMPORTED_MODULE_5__["canAcceptRef"](Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(_utils__WEBPACK_IMPORTED_MODULE_5__["defaultKey"]);
  !(canAcceptRef || !methods.length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_4___default()(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : undefined : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          _this._values[propName] = value;
          if (!_this.unmounted) _this.forceUpdate();
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let the forceUpdate trigger the update
      return !this._notifying;
    };

    _proto.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var props = this.props;
      this._values = Object.create(null);
      controlledProps.forEach(function (key) {
        _this2._values[key] = props[_utils__WEBPACK_IMPORTED_MODULE_5__["defaultKey"](key)];
      });
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var props = this.props;
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        if (!_utils__WEBPACK_IMPORTED_MODULE_5__["isProp"](nextProps, key) && _utils__WEBPACK_IMPORTED_MODULE_5__["isProp"](props, key)) {
          _this3._values[key] = nextProps[_utils__WEBPACK_IMPORTED_MODULE_5__["defaultKey"](key)];
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this4.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this4._values[propName];
      });
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    innerRef: function innerRef() {}
  }, _utils__WEBPACK_IMPORTED_MODULE_5__["uncontrolledPropTypes"](controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef) {
    WrappedComponent = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(UncontrolledComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        innerRef: ref
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}

/***/ }),

/***/ "./node_modules/uncontrollable/esm/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/uncontrollable/esm/utils.js ***!
  \**************************************************/
/*! exports provided: uncontrolledPropTypes, isProp, defaultKey, canAcceptRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncontrolledPropTypes", function() { return uncontrolledPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProp", function() { return isProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultKey", function() { return defaultKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAcceptRef", function() { return canAcceptRef; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (true) {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : undefined : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}

/***/ }),

/***/ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/uncontrollable/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ })

})
//# sourceMappingURL=spaces.js.6d4dfb6a111ee63c4e1a.hot-update.js.map