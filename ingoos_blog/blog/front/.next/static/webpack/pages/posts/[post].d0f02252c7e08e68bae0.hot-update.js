self["webpackHotUpdate_N_E"]("pages/posts/[post]",{

/***/ "./components/Accordion.jsx":
/*!**********************************!*\
  !*** ./components/Accordion.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_07_Desktop_2_ingoos_blog_blog_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\KGA_07\\Desktop\\\uC0C8 \uD3F4\uB354 (2)\\ingoos_blog\\blog\\front\\components\\Accordion.jsx",
    _this = undefined;

function _templateObject() {
  var data = (0,C_Users_KGA_07_Desktop_2_ingoos_blog_blog_front_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    position:absolute;\n    width:100%;\n    left:0px;\n    top:10vh;\n    z-index:5;\n    background:#fff;\n    padding:7vh 0;\n\n    display:", ";\n\n    & > ul {\n        display:flex;\n        flex-direction:column;\n    }\n\n    & > ul > li {\n        margin-top:20px;\n        text-align:center;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var menu = [{
  id: '1',
  category: '???????????????1',
  url: '/posts/1'
}, {
  id: '2',
  category: '???????????????2',
  url: '/posts/2'
}, {
  id: '3',
  category: '???????????????3',
  url: '/posts/3'
}, {
  id: '4',
  category: '???????????????4',
  url: '/posts/4'
}, {
  id: '5',
  category: '???????????????5',
  url: '/posts/5'
}];

var Accordion = function Accordion(_ref) {
  var visible = _ref.visible;
  var category = menu.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 50
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 31
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 16
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AccordionMenu, {
    flag: visible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, _this);
};

_c = Accordion;
var AccordionMenu = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject(), function (props) {
  return props.flag ? 'block' : 'none';
});
_c2 = AccordionMenu;
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

var _c, _c2;

$RefreshReg$(_c, "Accordion");
$RefreshReg$(_c2, "AccordionMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiQWNjb3JkaW9uIiwidmlzaWJsZSIsIm1hcCIsInYiLCJBY2NvcmRpb25NZW51IiwiU3R5bGVkIiwicHJvcHMiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsSUFBRSxFQUFDLEdBRFA7QUFFSUMsVUFBUSxFQUFDLFFBRmI7QUFHSUMsS0FBRyxFQUFDO0FBSFIsQ0FEUyxFQU1UO0FBQ0lGLElBQUUsRUFBQyxHQURQO0FBRUlDLFVBQVEsRUFBQyxRQUZiO0FBR0lDLEtBQUcsRUFBQztBQUhSLENBTlMsRUFXVDtBQUNJRixJQUFFLEVBQUMsR0FEUDtBQUVJQyxVQUFRLEVBQUMsUUFGYjtBQUdJQyxLQUFHLEVBQUM7QUFIUixDQVhTLEVBZ0JUO0FBQ0lGLElBQUUsRUFBQyxHQURQO0FBRUlDLFVBQVEsRUFBQyxRQUZiO0FBR0lDLEtBQUcsRUFBQztBQUhSLENBaEJTLEVBcUJUO0FBQ0lGLElBQUUsRUFBQyxHQURQO0FBRUlDLFVBQVEsRUFBQyxRQUZiO0FBR0lDLEtBQUcsRUFBQztBQUhSLENBckJTLENBQWI7O0FBNEJBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWM7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7QUFFNUIsTUFBTUgsUUFBUSxHQUFHRixJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUs7QUFDM0Isd0JBQU87QUFBQSw2QkFBZSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUEsQ0FBQyxDQUFDSixHQUFkO0FBQUEsK0JBQW1CO0FBQUEsb0JBQUlJLENBQUMsQ0FBQ0w7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZixPQUFTSyxDQUFDLENBQUNOLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGZ0IsQ0FBakI7QUFJQSxzQkFDSSw4REFBQyxhQUFEO0FBQWUsUUFBSSxFQUFFSSxPQUFyQjtBQUFBLDJCQUNBO0FBQUEsZ0JBQ0lIO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBYkQ7O0tBQU1FLFM7QUFlTixJQUFNSSxhQUFhLEdBQUdDLDBEQUFILG9CQVNMLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLElBQU4sR0FBYSxPQUFiLEdBQXVCLE1BQTNCO0FBQUEsQ0FUQSxDQUFuQjtNQUFNSCxhO0FBc0JOLCtEQUFlSixTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1twb3N0XS5kMGYwMjI1MmM3ZTA4ZTY4YmFlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDonMScsXHJcbiAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLFxyXG4gICAgICAgIHVybDonL3Bvc3RzLzEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOicyJyxcclxuICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MicsXHJcbiAgICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6JzMnLFxyXG4gICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyxcclxuICAgICAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDonNCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gICAgICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOic1JyxcclxuICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NScsXHJcbiAgICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgQWNjb3JkaW9uID0gKHt2aXNpYmxlfSkgPT57XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBtZW51Lm1hcCgodik9PntcclxuICAgICAgICByZXR1cm4gPGxpIGtleT17di5pZH0+PExpbmsgaHJlZj17di51cmx9PjxhPnt2LmNhdGVnb3J5fTwvYT48L0xpbms+PC9saT5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBY2NvcmRpb25NZW51IGZsYWc9e3Zpc2libGV9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvQWNjb3JkaW9uTWVudT5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgQWNjb3JkaW9uTWVudSA9IFN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHRvcDoxMHZoO1xyXG4gICAgei1pbmRleDo1O1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgcGFkZGluZzo3dmggMDtcclxuXHJcbiAgICBkaXNwbGF5OiR7cHJvcHM9PiAocHJvcHMuZmxhZyA/ICdibG9jaycgOiAnbm9uZScpIH07XHJcblxyXG4gICAgJiA+IHVsIHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiB1bCA+IGxpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbiJdLCJzb3VyY2VSb290IjoiIn0=