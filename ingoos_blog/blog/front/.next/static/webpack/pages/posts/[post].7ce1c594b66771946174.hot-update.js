self["webpackHotUpdate_N_E"]("pages/posts/[post]",{

/***/ "./pages/posts/[post].jsx":
/*!********************************!*\
  !*** ./pages/posts/[post].jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogLayout */ "./components/BlogLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\KGA_07\\Desktop\\\uC0C8 \uD3F4\uB354 (2)\\ingoos_blog\\blog\\front\\pages\\posts\\[post].jsx",
    _this = undefined,
    _s = $RefreshSig$();

// /admin/:menu/



var data = [{
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}, {
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}, {
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}, {
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}, {
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}];

var Post = function Post() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var post = router.query.post; // 카테고리 번호 DB idx id
  //server 요청해서 id 관련된 게시물들을 가져올수있도록

  /*
  게시번호
  제목
  날짜
  조회수
  */

  var list = data.map;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | \uB9AC\uC2A4\uD2B8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [post, " \uB9AC\uC2A4\uD2B8"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJzdWJqZWN0IiwiY29udGVudCIsImRhdGUiLCJoaXQiLCJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwibGlzdCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFFLENBQ1I7QUFDSUMsSUFBRSxFQUFDLEdBRFA7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsU0FBTyxFQUFDLE9BSFo7QUFJSUMsTUFBSSxFQUFDLFlBSlQ7QUFLSUMsS0FBRyxFQUFDO0FBTFIsQ0FEUSxFQVFSO0FBQ0lKLElBQUUsRUFBQyxHQURQO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFNBQU8sRUFBQyxPQUhaO0FBSUlDLE1BQUksRUFBQyxZQUpUO0FBS0lDLEtBQUcsRUFBQztBQUxSLENBUlEsRUFlUjtBQUNJSixJQUFFLEVBQUMsR0FEUDtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxTQUFPLEVBQUMsT0FIWjtBQUlJQyxNQUFJLEVBQUMsWUFKVDtBQUtJQyxLQUFHLEVBQUM7QUFMUixDQWZRLEVBc0JSO0FBQ0lKLElBQUUsRUFBQyxHQURQO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFNBQU8sRUFBQyxPQUhaO0FBSUlDLE1BQUksRUFBQyxZQUpUO0FBS0lDLEtBQUcsRUFBQztBQUxSLENBdEJRLEVBNkJSO0FBQ0lKLElBQUUsRUFBQyxHQURQO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFNBQU8sRUFBQyxPQUhaO0FBSUlDLE1BQUksRUFBQyxZQUpUO0FBS0lDLEtBQUcsRUFBQztBQUxSLENBN0JRLENBQVo7O0FBdUNBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRGUsTUFFUkMsSUFGUSxHQUVBRixNQUFNLENBQUNHLEtBRlAsQ0FFUkQsSUFGUSxFQUdmO0FBQ0E7O0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVJLE1BQU1FLElBQUksR0FBR1gsSUFBSSxDQUFDWSxHQUFsQjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLDhEQUFDLDJEQUFEO0FBQUEsaUJBQ0tILElBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQVVILENBeEJEOztHQUFNSCxJO1VBQ2FFLGtEOzs7S0FEYkYsSTtBQTBCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bcG9zdF0uN2NlMWM1OTRiNjY3NzE5NDYxNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC9hZG1pbi86bWVudS9cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQmxvZ0xheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nTGF5b3V0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgZGF0YSA9W1xyXG4gICAge1xyXG4gICAgICAgIGlkOicxJyxcclxuICAgICAgICBzdWJqZWN0Oidpbmdvb3MgYmxvZycsXHJcbiAgICAgICAgY29udGVudDonaHRtbCAnLFxyXG4gICAgICAgIGRhdGU6JzIwMjEtMDctMjgnLFxyXG4gICAgICAgIGhpdDonNSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgIHN1YmplY3Q6J2luZ29vcyBibG9nJyxcclxuICAgICAgICBjb250ZW50OidodG1sICcsXHJcbiAgICAgICAgZGF0ZTonMjAyMS0wNy0yOCcsXHJcbiAgICAgICAgaGl0Oic1J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDonMScsXHJcbiAgICAgICAgc3ViamVjdDonaW5nb29zIGJsb2cnLFxyXG4gICAgICAgIGNvbnRlbnQ6J2h0bWwgJyxcclxuICAgICAgICBkYXRlOicyMDIxLTA3LTI4JyxcclxuICAgICAgICBoaXQ6JzUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOicxJyxcclxuICAgICAgICBzdWJqZWN0Oidpbmdvb3MgYmxvZycsXHJcbiAgICAgICAgY29udGVudDonaHRtbCAnLFxyXG4gICAgICAgIGRhdGU6JzIwMjEtMDctMjgnLFxyXG4gICAgICAgIGhpdDonNSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgIHN1YmplY3Q6J2luZ29vcyBibG9nJyxcclxuICAgICAgICBjb250ZW50OidodG1sICcsXHJcbiAgICAgICAgZGF0ZTonMjAyMS0wNy0yOCcsXHJcbiAgICAgICAgaGl0Oic1J1xyXG4gICAgfSxcclxuXVxyXG5cclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qge3Bvc3R9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICAvLyDsubTthYzqs6Drpqwg67KI7Zi4IERCIGlkeCBpZFxyXG4gICAgLy9zZXJ2ZXIg7JqU7LKt7ZW07IScIGlkIOq0gOugqOuQnCDqsozsi5zrrLzrk6TsnYQg6rCA7KC47Jis7IiY7J6I64+E66GdXHJcbiAgICAvKlxyXG4gICAg6rKM7Iuc67KI7Zi4XHJcbiAgICDsoJzrqqlcclxuICAgIOuCoOynnFxyXG4gICAg7KGw7ZqM7IiYXHJcbiAgICAqL1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSBkYXRhLm1hcFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgfCDrpqzsiqTtirg8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxCbG9nTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAge3Bvc3R9IOumrOyKpO2KuFxyXG4gICAgICAgICAgICA8L0Jsb2dMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9