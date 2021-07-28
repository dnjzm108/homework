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
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\KGA_07\\Desktop\\\uC0C8 \uD3F4\uB354 (2)\\ingoos_blog\\blog\\front\\pages\\join.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_07_Desktop_2_ingoos_blog_blog_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/*
 아이디 
               이름
               패스워드
               패스워드 확인 
               전화번호
 */

var Join = function Join() {
  _s();

  var username = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var password = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var passwordCheck = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var userPhon = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | \uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "text"
          }, userid), {}, {
            placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 84
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "text"
          }, username), {}, {
            placeholder: "\uC774\uB984\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 85
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "password"
          }, password), {}, {
            placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 91
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "password"
          }, passwordCheck), {}, {
            placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 96
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
            type: "text"
          }, userPhon), {}, {
            placeholder: "\uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 87
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Join, "letYyFBsTB9l6eZa4ZHWBEjhQWo=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvam9pbi5qc3giXSwibmFtZXMiOlsiSm9pbiIsInVzZXJuYW1lIiwidXNlSW5wdXQiLCJ1c2VyaWQiLCJwYXNzd29yZCIsInBhc3N3b3JkQ2hlY2siLCJ1c2VyUGhvbiIsImhhbmRsZVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVEsQ0FBQyxFQUFELENBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCx3REFBUSxDQUFDLEVBQUQsQ0FBdkI7QUFDQSxNQUFNRSxRQUFRLEdBQUdGLHdEQUFRLENBQUMsRUFBRCxDQUF6QjtBQUNBLE1BQU1HLGFBQWEsR0FBR0gsd0RBQVEsQ0FBQyxFQUFELENBQTlCO0FBQ0EsTUFBTUksUUFBUSxHQUFHSix3REFBUSxDQUFDLEVBQUQsQ0FBekI7QUFHQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQywyREFBRDtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFNLGtCQUFRLEVBQUVLLFlBQWhCO0FBQUEsa0NBQ0k7QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBdUJKLE1BQXZCO0FBQStCLHVCQUFXLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUMrRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQvRCxlQUVJO0FBQU8sZ0JBQUksRUFBQztBQUFaLGFBQXVCRixRQUF2QjtBQUFpQyx1QkFBVyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFFZ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGaEUsZUFHSTtBQUFPLGdCQUFJLEVBQUM7QUFBWixhQUEyQkcsUUFBM0I7QUFBcUMsdUJBQVcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKLGVBR3NFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSHRFLGVBSUk7QUFBTyxnQkFBSSxFQUFDO0FBQVosYUFBMkJDLGFBQTNCO0FBQTBDLHVCQUFXLEVBQUM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUkyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUozRSxlQUtJO0FBQU8sZ0JBQUksRUFBQztBQUFaLGFBQXVCQyxRQUF2QjtBQUFpQyx1QkFBVyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosZUFLa0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMbEUsZUFNSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBLGtCQURKO0FBcUJILENBN0JEOztHQUFNTixJO1VBQ2VFLG9ELEVBQ0ZBLG9ELEVBQ0VBLG9ELEVBQ0tBLG9ELEVBQ0xBLG9EOzs7S0FMZkYsSTtBQStCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qb2luLmZhNjRmYzVmN2JiNDNkYTE5MjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtTGF5b3V0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnXHJcblxyXG4vKlxyXG4g7JWE7J2065SUIFxyXG4gICAgICAgICAgICAgICDsnbTrpoRcclxuICAgICAgICAgICAgICAg7Yyo7Iqk7JuM65OcXHJcbiAgICAgICAgICAgICAgIO2MqOyKpOybjOuTnCDtmZXsnbggXHJcbiAgICAgICAgICAgICAgIOyghO2ZlOuyiO2YuFxyXG4gKi9cclxuXHJcbmNvbnN0IEpvaW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpXHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgcGFzc3dvcmRDaGVjayA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3QgdXNlclBob24gPSB1c2VJbnB1dCgnJylcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyB8IO2ajOybkOqwgOyehTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj7tmozsm5DqsIDsnoU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcmlkfSBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlOulvCDsnoXroKXtlbTso7zshLjsmpRcIiAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcm5hbWV9IHBsYWNlaG9sZGVyPVwi7J2066aE66W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4ucGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwi7Yyo7Iqk7JuM65Oc66W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4ucGFzc3dvcmRDaGVja30gcGxhY2Vob2xkZXI9XCLtjKjsiqTsm4zrk5zrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJQaG9ufSBwbGFjZWhvbGRlcj1cIuyghO2ZlOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIiAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7tmozsm5DqsIDsnoU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbiJdLCJzb3VyY2VSb290IjoiIn0=