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
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);
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
  category: '대분류메누1',
  url: '/posts/1'
}, {
  id: '2',
  category: '대분류메누2',
  url: '/posts/2'
}, {
  id: '3',
  category: '대분류메누3',
  url: '/posts/3'
}, {
  id: '4',
  category: '대분류메누4',
  url: '/posts/4'
}, {
  id: '5',
  category: '대분류메누5',
  url: '/posts/5'
}];

var Accordion = function Accordion(_ref) {
  var visible = _ref.visible;
  var category = menu.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
      children: v.category
    }, void 0, false, {
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


/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = next;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Iiwid2VicGFjazovL19OX0UvZXh0ZXJuYWwgXCJuZXh0XCIiXSwibmFtZXMiOlsibWVudSIsImlkIiwiY2F0ZWdvcnkiLCJ1cmwiLCJBY2NvcmRpb24iLCJ2aXNpYmxlIiwibWFwIiwidiIsIkFjY29yZGlvbk1lbnUiLCJTdHlsZWQiLCJwcm9wcyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxJQUFFLEVBQUMsR0FEUDtBQUVJQyxVQUFRLEVBQUMsUUFGYjtBQUdJQyxLQUFHLEVBQUM7QUFIUixDQURTLEVBTVQ7QUFDSUYsSUFBRSxFQUFDLEdBRFA7QUFFSUMsVUFBUSxFQUFDLFFBRmI7QUFHSUMsS0FBRyxFQUFDO0FBSFIsQ0FOUyxFQVdUO0FBQ0lGLElBQUUsRUFBQyxHQURQO0FBRUlDLFVBQVEsRUFBQyxRQUZiO0FBR0lDLEtBQUcsRUFBQztBQUhSLENBWFMsRUFnQlQ7QUFDSUYsSUFBRSxFQUFDLEdBRFA7QUFFSUMsVUFBUSxFQUFDLFFBRmI7QUFHSUMsS0FBRyxFQUFDO0FBSFIsQ0FoQlMsRUFxQlQ7QUFDSUYsSUFBRSxFQUFDLEdBRFA7QUFFSUMsVUFBUSxFQUFDLFFBRmI7QUFHSUMsS0FBRyxFQUFDO0FBSFIsQ0FyQlMsQ0FBYjs7QUE0QkEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBLE1BQVpDLE9BQVksUUFBWkEsT0FBWTtBQUU1QixNQUFNSCxRQUFRLEdBQUdGLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSztBQUMzQix3QkFBTztBQUFBLGdCQUFLQSxDQUFDLENBQUNMO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGZ0IsQ0FBakI7QUFJQSxzQkFDSSw4REFBQyxhQUFEO0FBQWUsUUFBSSxFQUFFRyxPQUFyQjtBQUFBLDJCQUNBO0FBQUEsZ0JBQ0lIO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBYkQ7O0tBQU1FLFM7QUFlTixJQUFNSSxhQUFhLEdBQUdDLDBEQUFILG9CQVNMLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLElBQU4sR0FBYSxPQUFiLEdBQXVCLE1BQTNCO0FBQUEsQ0FUQSxDQUFuQjtNQUFNSCxhO0FBc0JOLCtEQUFlSixTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUEsc0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RdLjU2MmI2ZTcxYmZkNDQ1ZWY1ZjQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0J1xyXG5cclxuY29uc3QgbWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDonMScsXHJcbiAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuIhDEnLFxyXG4gICAgICAgIHVybDonL3Bvc3RzLzEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOicyJyxcclxuICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64iEMicsXHJcbiAgICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6JzMnLFxyXG4gICAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTriIQzJyxcclxuICAgICAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDonNCcsXHJcbiAgICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuIhDQnLFxyXG4gICAgICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOic1JyxcclxuICAgICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64iENScsXHJcbiAgICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgQWNjb3JkaW9uID0gKHt2aXNpYmxlfSkgPT57XHJcblxyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBtZW51Lm1hcCgodik9PntcclxuICAgICAgICByZXR1cm4gPGxpPnt2LmNhdGVnb3J5fTwvbGk+XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8QWNjb3JkaW9uTWVudSBmbGFnPXt2aXNpYmxlfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L0FjY29yZGlvbk1lbnU+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEFjY29yZGlvbk1lbnUgPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB0b3A6MTB2aDtcclxuICAgIHotaW5kZXg6NTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIHBhZGRpbmc6N3ZoIDA7XHJcblxyXG4gICAgZGlzcGxheToke3Byb3BzPT4gKHByb3BzLmZsYWcgPyAnYmxvY2snIDogJ25vbmUnKSB9O1xyXG5cclxuICAgICYgPiB1bCB7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAmID4gdWwgPiBsaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb24iLCJtb2R1bGUuZXhwb3J0cyA9IG5leHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==