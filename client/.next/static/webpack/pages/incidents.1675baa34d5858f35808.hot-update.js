/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/incidents",{

/***/ "./components/menubar.js":
/*!*******************************!*\
  !*** ./components/menubar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ \"./node_modules/@material-ui/icons/PersonAdd.js\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"./node_modules/@material-ui/icons/AccountCircle.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _providers_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/user.provider */ \"./providers/user.provider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/components/menubar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    menuButton: {\n      marginRight: theme.spacing(2)\n    },\n    title: {\n      flexGrow: 1\n    }\n  };\n});\nvar StyledMenu = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)({\n  paper: {\n    border: '1px solid #d3d4d5'\n  }\n})(function (props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Menu, _objectSpread({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n});\nvar StyledMenuItem = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)(function (theme) {\n  return {\n    root: {\n      '&:focus': {\n        backgroundColor: theme.palette.primary.main,\n        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {\n          color: theme.palette.common.white\n        }\n      }\n    }\n  };\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem);\n\nvar Menubar = function Menubar() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_providers_user_provider__WEBPACK_IMPORTED_MODULE_4__.UserContext),\n      currentUser = _useContext.currentUser,\n      setCurrentUser = _useContext.setCurrentUser;\n\n  var classes = useStyles();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      anchorEl = _useState[0],\n      setAnchorEl = _useState[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n      position: \"fixed\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n          edge: \"start\",\n          className: classes.menuButton,\n          color: \"inherit\",\n          \"aria-label\": \"menu\",\n          onClick: handleClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenu, {\n          id: \"customized-menu\",\n          anchorEl: anchorEl,\n          keepMounted: true,\n          open: Boolean(anchorEl),\n          onClose: handleClose,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"Home\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 88,\n                columnNumber: 30\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n              href: \"/new-incident\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"Create New Incident\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 44\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n              href: \"/incidents\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"List of Incidents\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 41\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n              href: \"https://github.com/radian-digital/radian-challenge\",\n              target: \"_blank\",\n              onClick: handleClose,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"About Project Scope\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"h6\",\n          className: classes.title,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n            href: \"https://github.com/radian-digital/radian-challenge\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \"Radian Technology Challenge\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), currentUser ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n            children: [\"Hello \", currentUser, \"!\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/incidents\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              style: {\n                marginLeft: \"20px\"\n              },\n              onClick: function onClick() {\n                return setCurrentUser(null);\n              },\n              children: \"Logout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              children: \"Home\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 28\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/new-user\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 60\n              }, _this), \"Create Account\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/incidents\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 61\n              }, _this), \"Login\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Menubar, \"8rZZmqB9kyE2okpmZtlMe6uQkDY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Menubar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menubar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menubar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51YmFyLmpzP2Y2MjQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiU3R5bGVkTWVudSIsIndpdGhTdHlsZXMiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiU3R5bGVkTWVudUl0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb2xvciIsImNvbW1vbiIsIndoaXRlIiwiTWVudUl0ZW0iLCJNZW51YmFyIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwiQm9vbGVhbiIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDckNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQUQrQjtBQUlyQ0MsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFESCxLQUp5QjtBQU9yQ0MsU0FBSyxFQUFFO0FBQ0xKLGNBQVEsRUFBRTtBQURMO0FBUDhCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBWUUsSUFB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TztBQW1FTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudWJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBQZXJzb25BZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb25BZGQnO1xuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgTWVudSwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vcHJvdmlkZXJzL3VzZXIucHJvdmlkZXInXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgbWVudUJ1dHRvbjoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgfSkpO1xuICBcbiAgY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICAgIHBhcGVyOiB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2QzZDRkNScsXG4gICAgfSxcbiAgfSkoKHByb3BzKSA9PiAoXG4gICAgPE1lbnVcbiAgICAgIGVsZXZhdGlvbj17MH1cbiAgICAgIGdldENvbnRlbnRBbmNob3JFbD17bnVsbH1cbiAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApKTtcbiAgXG4gIGNvbnN0IFN0eWxlZE1lbnVJdGVtID0gd2l0aFN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgICcmIC5NdWlMaXN0SXRlbUljb24tcm9vdCwgJiAuTXVpTGlzdEl0ZW1UZXh0LXByaW1hcnknOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KSkoTWVudUl0ZW0pO1xuXG5jb25zdCBNZW51YmFyID0gKCkgPT4ge1xuICBjb25zdCB7IGN1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8U3R5bGVkTWVudVxuICAgICAgICAgICAgaWQ9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSG9tZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfS8+PC9MaW5rPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy1pbmNpZGVudFwiPjxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNyZWF0ZSBOZXcgSW5jaWRlbnRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0vPjwvTGluaz5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmNpZGVudHNcIj48TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMaXN0IG9mIEluY2lkZW50c1wiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfS8+PC9MaW5rPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JhZGlhbi1kaWdpdGFsL3JhZGlhbi1jaGFsbGVuZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkFib3V0IFByb2plY3QgU2NvcGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgPC9TdHlsZWRNZW51PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYWRpYW4tZGlnaXRhbC9yYWRpYW4tY2hhbGxlbmdlXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIFJhZGlhbiBUZWNobm9sb2d5IENoYWxsZW5nZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7Y3VycmVudFVzZXJcbiAgICAgICAgICA/IDxkaXY+XG4gICAgICAgICAgICA8c3Bhbj5IZWxsbyB7Y3VycmVudFVzZXJ9ITwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5jaWRlbnRzXCI+PEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjIwcHhcIiB9fSBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50VXNlcihudWxsKX0+TG9nb3V0PC9CdXR0b24+PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDo8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkhvbWU8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy11c2VyXCI+PEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj48UGVyc29uQWRkSWNvbi8+Q3JlYXRlIEFjY291bnQ8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2luY2lkZW50c1wiPjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+PEFjY291bnRDaXJjbGVJY29uLz5Mb2dpbjwvQnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnViYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menubar.js\n");

/***/ })

});