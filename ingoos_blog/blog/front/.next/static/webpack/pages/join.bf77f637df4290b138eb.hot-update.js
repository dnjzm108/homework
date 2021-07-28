self["webpackHotUpdate_N_E"]("pages/join",{

/***/ "./pages/join.jsx":
/*!************************!*\
  !*** ./pages/join.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_07_Desktop_2_ingoos_blog_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\KGA_07\\Desktop\\\uC0C8 \uD3F4\uB354 (2)\\ingoos_blog\\blog\\front\\pages\\join.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_07_Desktop_2_ingoos_blog_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Join = function Join() {
  _s();

  var username = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var password = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var userPhone = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var handlePassword = function handlePassword(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setPasswordError(password.value !== value);
    setPasswordCheck(value);
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var handleTerm = function handleTerm(e) {
    setTermError(e.target.cjecked !== true);
    setTerm(!term);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(userid.value, username.value, password.value, userPhone.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | \uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "text"
          }, userid), {}, {
            placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 84
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "text"
          }, username), {}, {
            placeholder: "\uC774\uB984\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 85
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "password"
          }, password), {}, {
            placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 91
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "password",
            value: passwordCheck,
            onChange: handlePassword,
            placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 125
          }, _this), passwordError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              color: 'red'
            },
            children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uB2E4\uB985\uB2C8\uB2E4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 44
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "text"
          }, userPhone), {}, {
            placeholder: "\uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 88
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            id: "term",
            onChange: handleTerm,
            checked: term
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "term",
            children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC148"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), termError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              color: 'red'
            },
            children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574 \uC8FC\uC138\uC694!!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 39
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Join, "Qb1dzPmHrc/w6ZK9bmAkh4+3tNI=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Join;
/* harmony default export */ __webpack_exports__["default"] = (Join);

var _c;

$RefreshReg$(_c, "Join");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9pbi5qc3giXSwibmFtZXMiOlsiSm9pbiIsInVzZXJuYW1lIiwidXNlSW5wdXQiLCJ1c2VyaWQiLCJwYXNzd29yZCIsInVzZXJQaG9uZSIsInVzZVN0YXRlIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsImhhbmRsZVBhc3N3b3JkIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJoYW5kbGVUZXJtIiwiY2plY2tlZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFNQyxRQUFRLEdBQUdDLHdEQUFRLENBQUMsRUFBRCxDQUF6QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0Qsd0RBQVEsQ0FBQyxFQUFELENBQXZCO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRix3REFBUSxDQUFDLEVBQUQsQ0FBekI7QUFDQSxNQUFNRyxTQUFTLEdBQUdILHdEQUFRLENBQUMsRUFBRCxDQUExQjs7QUFKZSxrQkFNMEJJLCtDQUFRLENBQUMsRUFBRCxDQU5sQztBQUFBLE1BTVJDLGFBTlE7QUFBQSxNQU1NQyxnQkFOTjs7QUFBQSxtQkFPeUJGLCtDQUFRLENBQUMsS0FBRCxDQVBqQztBQUFBLE1BT1RHLGFBUFM7QUFBQSxNQU9LQyxnQkFQTDs7QUFTaEIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDLEVBQUc7QUFBQSxzQ0FDSEEsQ0FBQyxDQUFDQyxNQURDO0FBQUEsUUFDaEJDLEtBRGdCLGFBQ2hCQSxL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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVGxCLGVBVUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWTCxlQVdJO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUEwQkgsQ0F0REQ7O0dBQU16QixJO1VBQ2VFLG9ELEVBQ0ZBLG9ELEVBQ0VBLG9ELEVBQ0NBLG9EOzs7S0FKaEJGLEk7QUF3RE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvam9pbi5iZjc3ZjYzN2RmNDI5MGIxMzhlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybUxheW91dFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0J1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEpvaW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlclBob25lID0gdXNlSW5wdXQoJycpXHJcblxyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgnJylcclxuICAgY29uc3QgW3Bhc3N3b3JkRXJyb3Isc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkID0gZSA9PntcclxuICAgICAgIGNvbnN0IHt2YWx1ZX0gPSB7Li4uZS50YXJnZXR9XHJcbiAgICAgICBzZXRQYXNzd29yZEVycm9yKHBhc3N3b3JkLnZhbHVlICE9PSB2YWx1ZSlcclxuICAgICAgIHNldFBhc3N3b3JkQ2hlY2sodmFsdWUpXHJcbiAgIH1cclxuXHJcbiAgIGNvbnN0IFt0ZXJtLHNldFRlcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgIGNvbnN0IFt0ZXJtRXJyb3Isc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgY29uc3QgaGFuZGxlVGVybSA9IGUgPT57XHJcbiAgICAgICBzZXRUZXJtRXJyb3IoZS50YXJnZXQuY2plY2tlZCAhPT10cnVlKVxyXG4gICAgICAgc2V0VGVybSghdGVybSlcclxuICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkLnZhbHVlLHVzZXJuYW1lLnZhbHVlLHBhc3N3b3JkLnZhbHVlLHVzZXJQaG9uZS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IO2ajOybkOqwgOyehTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj7tmozsm5DqsIDsnoU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcmlkfSBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlOulvCDsnoXroKXtlbTso7zshLjsmpRcIiAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcm5hbWV9IHBsYWNlaG9sZGVyPVwi7J2066aE66W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4ucGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwi7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmRDaGVja30gb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIu2MqOyKpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpRcIiAvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgcGFzc3dvcmRFcnJvciAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6J3JlZCd9fT7ruYTrsIDrsojtmLjqsIAg64uk66aF64uI64ukPC9kaXY+fSAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VyUGhvbmV9IHBsYWNlaG9sZGVyPVwi7KCE7ZmU67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRlcm1cIiBvbkNoYW5nZT17aGFuZGxlVGVybX0gY2hlY2tlZD17dGVybX0gLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVybVwiPuyVveq0gOyXkCDrj5nsnZjtlbTso7zshYg8L2xhYmVsPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3Rlcm1FcnJvciAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6J3JlZCd9fT7slb3qtIDsl5Ag64+Z7J2Y7ZW0IOyjvOyEuOyalCEhPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7ZqM7JuQ6rCA7J6FPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvaW4iXSwic291cmNlUm9vdCI6IiJ9