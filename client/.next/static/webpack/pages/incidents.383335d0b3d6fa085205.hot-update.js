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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ \"./node_modules/@material-ui/icons/PersonAdd.js\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"./node_modules/@material-ui/icons/AccountCircle.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/components/menubar.js\",\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    menuButton: {\n      marginRight: theme.spacing(2)\n    },\n    title: {\n      flexGrow: 1\n    }\n  };\n});\nvar StyledMenu = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)({\n  paper: {\n    border: '1px solid #d3d4d5'\n  }\n})(function (props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Menu, _objectSpread({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n});\nvar StyledMenuItem = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)(function (theme) {\n  return {\n    root: {\n      '&:focus': {\n        backgroundColor: theme.palette.primary.main,\n        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {\n          color: theme.palette.common.white\n        }\n      }\n    }\n  };\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem);\n\nvar Menubar = function Menubar(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var userAuthenticated = _ref.userAuthenticated,\n      setUserAuthenticated = _ref.setUserAuthenticated,\n      currentUsername = _ref.currentUsername;\n  var classes = useStyles();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      anchorEl = _useState[0],\n      setAnchorEl = _useState[1];\n\n  var _useLocalStorage = useLocalStorage('username', ''),\n      _useLocalStorage2 = (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useLocalStorage, 2),\n      username = _useLocalStorage2[0],\n      setUsername = _useLocalStorage2[1];\n\n  var useLocalStorage = function useLocalStorage(key, initialValue) {\n    _s();\n\n    var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(function () {\n      try {\n        var item = window.localStorage.getItem(key);\n        return item ? item : initialValue;\n      } catch (error) {\n        console.log(error);\n        return initialValue;\n      }\n    }),\n        storedValue = _useState2[0],\n        setStoredValue = _useState2[1];\n\n    var setValue = function setValue(value) {\n      try {\n        var valueToStore = value instanceof Function ? value(storedValue) : value;\n        setStoredValue(valueToStore);\n      } catch (error) {\n        console.log(error);\n      }\n    };\n\n    return [storedValue, setValue];\n  };\n\n  _s(useLocalStorage, \"MeKnC7+RDAPWB1LLkbNRuKfXxvI=\");\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n      position: \"fixed\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n          edge: \"start\",\n          className: classes.menuButton,\n          color: \"inherit\",\n          \"aria-label\": \"menu\",\n          onClick: handleClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenu, {\n          id: \"customized-menu\",\n          anchorEl: anchorEl,\n          keepMounted: true,\n          open: Boolean(anchorEl),\n          onClose: handleClose,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"Home\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 30\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/new-incident\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"Create New Incident\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 113,\n                columnNumber: 44\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/incidents\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"List of Incidents\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 116,\n                columnNumber: 41\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/new-user\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"Create Account\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 40\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n              href: \"https://github.com/radian-digital/radian-challenge\",\n              target: \"_blank\",\n              onClick: handleClose,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"About Project Scope\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 123,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"h6\",\n          className: classes.title,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n            href: \"https://github.com/radian-digital/radian-challenge\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \"Radian Technology Challenge\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, _this), username !== \"\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            children: [\"Hello \", username, \"!\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/incidents\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              style: {\n                marginLeft: \"20px\"\n              },\n              onClick: setUsername(''),\n              children: \"Logout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/new-user\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 142,\n                columnNumber: 60\n              }, _this), \"Create Account\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 142,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 142,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/incidents\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 143,\n                columnNumber: 61\n              }, _this), \"Login\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 143,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Menubar, \"D6AiWHBXbodortEoMnFEyMGrmIo=\", true, function () {\n  return [useStyles];\n});\n\n_c = Menubar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menubar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menubar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51YmFyLmpzP2Y2MjQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiU3R5bGVkTWVudSIsIndpdGhTdHlsZXMiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiU3R5bGVkTWVudUl0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb2xvciIsImNvbW1vbiIsIndoaXRlIiwiTWVudUl0ZW0iLCJNZW51YmFyIiwidXNlckF1dGhlbnRpY2F0ZWQiLCJzZXRVc2VyQXV0aGVudGljYXRlZCIsImN1cnJlbnRVc2VybmFtZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwia2V5IiwiaW5pdGlhbFZhbHVlIiwiaXRlbSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwic2V0VmFsdWUiLCJ2YWx1ZSIsInZhbHVlVG9TdG9yZSIsIkZ1bmN0aW9uIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIkJvb2xlYW4iLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0Ms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QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVERCxDQTNGRDs7SUFBTVYsTztVQUVZekIsUzs7O0tBRlp5QixPO0FBNkZOLCtEQUFlQSxPQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZW51YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpc3RJdGVtVGV4dCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgUGVyc29uQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uQWRkJztcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IE1lbnUsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIG1lbnVCdXR0b246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gIH0pKTtcbiAgXG4gIGNvbnN0IFN0eWxlZE1lbnUgPSB3aXRoU3R5bGVzKHtcbiAgICBwYXBlcjoge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkM2Q0ZDUnLFxuICAgIH0sXG4gIH0pKChwcm9wcykgPT4gKFxuICAgIDxNZW51XG4gICAgICBlbGV2YXRpb249ezB9XG4gICAgICBnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XG4gICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgIH19XG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSk7XG4gIFxuICBjb25zdCBTdHlsZWRNZW51SXRlbSA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICAnJiAuTXVpTGlzdEl0ZW1JY29uLXJvb3QsICYgLk11aUxpc3RJdGVtVGV4dC1wcmltYXJ5Jzoge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSkpKE1lbnVJdGVtKTtcblxuY29uc3QgTWVudWJhciA9ICh7IHVzZXJBdXRoZW50aWNhdGVkLCBzZXRVc2VyQXV0aGVudGljYXRlZCwgY3VycmVudFVzZXJuYW1lIH0pID0+IHtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlTG9jYWxTdG9yYWdlKCd1c2VybmFtZScsICcnKTtcblxuICBjb25zdCB1c2VMb2NhbFN0b3JhZ2UgPSAoa2V5LCBpbml0aWFsVmFsdWUpID0+IHtcbiAgICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPyBpdGVtIDogaW5pdGlhbFZhbHVlXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmFsdWVUb1N0b3JlID0gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlO1xuICAgICAgICBzZXRTdG9yZWRWYWx1ZSh2YWx1ZVRvU3RvcmUpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFtzdG9yZWRWYWx1ZSwgc2V0VmFsdWVdXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8U3R5bGVkTWVudVxuICAgICAgICAgICAgaWQ9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSG9tZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfS8+PC9MaW5rPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy1pbmNpZGVudFwiPjxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNyZWF0ZSBOZXcgSW5jaWRlbnRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0vPjwvTGluaz5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmNpZGVudHNcIj48TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMaXN0IG9mIEluY2lkZW50c1wiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfS8+PC9MaW5rPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy11c2VyXCI+PExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3JlYXRlIEFjY291bnRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0vPjwvTGluaz5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYWRpYW4tZGlnaXRhbC9yYWRpYW4tY2hhbGxlbmdlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBYm91dCBQcm9qZWN0IFNjb3BlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDwvU3R5bGVkTWVudT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmFkaWFuLWRpZ2l0YWwvcmFkaWFuLWNoYWxsZW5nZVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICBSYWRpYW4gVGVjaG5vbG9neSBDaGFsbGVuZ2VcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge3VzZXJuYW1lICE9PSBcIlwiXG4gICAgICAgICAgPyA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4+SGVsbG8ge3VzZXJuYW1lfSE8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2luY2lkZW50c1wiPjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIgfX0gb25DbGljaz17c2V0VXNlcm5hbWUoJycpfT5Mb2dvdXQ8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOjxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy11c2VyXCI+PEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj48UGVyc29uQWRkSWNvbi8+Q3JlYXRlIEFjY291bnQ8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2luY2lkZW50c1wiPjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+PEFjY291bnRDaXJjbGVJY29uLz5Mb2dpbjwvQnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnViYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menubar.js\n");

/***/ })

});