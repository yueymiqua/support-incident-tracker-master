/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/menubar.js":
/*!*******************************!*\
  !*** ./components/menubar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ \"./node_modules/@material-ui/icons/PersonAdd.js\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"./node_modules/@material-ui/icons/AccountCircle.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/components/menubar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    menuButton: {\n      marginRight: theme.spacing(2)\n    },\n    title: {\n      flexGrow: 1\n    }\n  };\n});\nvar StyledMenu = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)({\n  paper: {\n    border: '1px solid #d3d4d5'\n  }\n})(function (props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Menu, _objectSpread({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n});\nvar StyledMenuItem = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.withStyles)(function (theme) {\n  return {\n    root: {\n      '&:focus': {\n        backgroundColor: theme.palette.primary.main,\n        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {\n          color: theme.palette.common.white\n        }\n      }\n    }\n  };\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem);\n\nvar Menubar = function Menubar(_ref) {\n  _s();\n\n  var userAuthenticated = _ref.userAuthenticated,\n      setUserAuthenticated = _ref.setUserAuthenticated,\n      currentUsername = _ref.currentUsername;\n  var classes = useStyles();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      anchorEl = _useState[0],\n      setAnchorEl = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      username = _useState3[0],\n      setUsername = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setUser(JSON.parse(localStorage.getItem('user')));\n    setUsername(localStorage.getItem('username'));\n    console.log(localStorage.getItem('user'), localStorage.getItem('username'));\n  }, []);\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__.default, {\n      position: \"fixed\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__.default, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {\n          edge: \"start\",\n          className: classes.menuButton,\n          color: \"inherit\",\n          \"aria-label\": \"menu\",\n          onClick: handleClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenu, {\n          id: \"customized-menu\",\n          anchorEl: anchorEl,\n          keepMounted: true,\n          open: Boolean(anchorEl),\n          onClose: handleClose,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                primary: \"Home\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 30\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 93,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n              href: \"/new-incident\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                primary: \"Create New Incident\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 96,\n                columnNumber: 44\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n              href: \"/incidents\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                primary: \"List of Incidents\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 99,\n                columnNumber: 41\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n              href: \"/new-user\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                primary: \"Create Account\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 40\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n              href: \"https://github.com/radian-digital/radian-challenge\",\n              target: \"_blank\",\n              onClick: handleClose,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                primary: \"About Project Scope\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 106,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {\n          variant: \"h6\",\n          className: classes.title,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n            href: \"https://github.com/radian-digital/radian-challenge\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \"Radian Technology Challenge\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, _this), user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            children: [\"Hello \", username, \"!\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/incidents\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {\n              color: \"inherit\",\n              style: {\n                marginLeft: \"20px\"\n              },\n              onClick: setUser('false'),\n              children: \"Logout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/new-user\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {\n              color: \"inherit\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 125,\n                columnNumber: 60\n              }, _this), \"Create Account\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/incidents\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__.default, {\n              color: \"inherit\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 126,\n                columnNumber: 61\n              }, _this), \"Login\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menubar, \"onS1BhlCHcGJ5oDnF1AeZ6YB8wA=\", false, function () {\n  return [useStyles];\n});\n\n_c = Menubar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menubar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menubar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51YmFyLmpzP2Y2MjQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiU3R5bGVkTWVudSIsIndpdGhTdHlsZXMiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiU3R5bGVkTWVudUl0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb2xvciIsImNvbW1vbiIsIndoaXRlIiwiTWVudUl0ZW0iLCJNZW51YmFyIiwidXNlckF1dGhlbnRpY2F0ZWQiLCJzZXRVc2VyQXV0aGVudGljYXRlZCIsImN1cnJlbnRVc2VybmFtZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VFZmZlY3QiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJCb29sZWFuIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRCtCO0FBSXJDQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFBRUosS0FB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O0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERyxnQkFLSjtBQUFBLGtDQUNDLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxXQUFYO0FBQUEsbUNBQXVCLDhEQUFDLDhEQUFEO0FBQVEsbUJBQUssRUFBQyxTQUFkO0FBQUEsc0NBQXdCLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBRUMsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFlBQVg7QUFBQSxtQ0FBd0IsOERBQUMsOERBQUQ7QUFBUSxtQkFBSyxFQUFDLFNBQWQ7QUFBQSxzQ0FBd0IsOERBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdURELENBMUVEOztHQUFNVCxPO1VBRVl6QixTOzs7S0FGWnlCLE87QUE0RU4sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnViYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBQZXJzb25BZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb25BZGQnO1xuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgTWVudSwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgbWVudUJ1dHRvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgfSkpO1xuICBcbiAgY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICAgIHBhcGVyOiB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2QzZDRkNScsXG4gICAgfSxcbiAgfSkoKHByb3BzKSA9PiAoXG4gICAgPE1lbnVcbiAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgIGdldENvbnRlbnRBbmNob3JFbD17bnVsbH1cbiAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKTtcbiAgXG4gIGNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgICcmIC5NdWlMaXN0SXRlbUljb24tcm9vdCwgJiAuTXVpTGlzdEl0ZW1UZXh0LXByaW1hcnknOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSkoTWVudUl0ZW0pO1xuXG5jb25zdCBNZW51YmFyID0gKHsgdXNlckF1dGhlbnRpY2F0ZWQsIHNldFVzZXJBdXRoZW50aWNhdGVkLCBjdXJyZW50VXNlcm5hbWUgfSkgPT4ge1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSlcbiAgICBzZXRVc2VybmFtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSlcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSlcbiAgfSxbXSlcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCI+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFN0eWxlZE1lbnVcbiAgICAgICAgICAgIGlkPVwiY3VzdG9taXplZC1tZW51XCJcbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPFN0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkhvbWVcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0vPjwvTGluaz5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXctaW5jaWRlbnRcIj48TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDcmVhdGUgTmV3IEluY2lkZW50XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9Lz48L0xpbms+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgICAgPFN0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5jaWRlbnRzXCI+PExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTGlzdCBvZiBJbmNpZGVudHNcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0vPjwvTGluaz5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXctdXNlclwiPjxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNyZWF0ZSBBY2NvdW50XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9Lz48L0xpbms+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgICAgPFN0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmFkaWFuLWRpZ2l0YWwvcmFkaWFuLWNoYWxsZW5nZVwiIHRhcmdldD1cIl9ibGFua1wiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWJvdXQgUHJvamVjdCBTY29wZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JhZGlhbi1kaWdpdGFsL3JhZGlhbi1jaGFsbGVuZ2VcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgUmFkaWFuIFRlY2hub2xvZ3kgQ2hhbGxlbmdlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIHt1c2VyXG4gICAgICAgICAgPyA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4+SGVsbG8ge3VzZXJuYW1lfSE8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2luY2lkZW50c1wiPjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIgfX0gb25DbGljaz17c2V0VXNlcignZmFsc2UnKX0+TG9nb3V0PC9CdXR0b24+PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDo8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXctdXNlclwiPjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+PFBlcnNvbkFkZEljb24vPkNyZWF0ZSBBY2NvdW50PC9CdXR0b24+PC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmNpZGVudHNcIj48QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPjxBY2NvdW50Q2lyY2xlSWNvbi8+TG9naW48L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menubar.js\n");

/***/ })

});