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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ \"./node_modules/@material-ui/icons/PersonAdd.js\");\n/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ \"./node_modules/@material-ui/icons/AccountCircle.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/components/menubar.js\",\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    menuButton: {\n      marginRight: theme.spacing(2)\n    },\n    title: {\n      flexGrow: 1\n    }\n  };\n});\nvar StyledMenu = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)({\n  paper: {\n    border: '1px solid #d3d4d5'\n  }\n})(function (props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Menu, _objectSpread({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n});\nvar StyledMenuItem = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)(function (theme) {\n  return {\n    root: {\n      '&:focus': {\n        backgroundColor: theme.palette.primary.main,\n        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {\n          color: theme.palette.common.white\n        }\n      }\n    }\n  };\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.MenuItem);\n\nvar Menubar = function Menubar(_ref) {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var userAuthenticated = _ref.userAuthenticated,\n      setUserAuthenticated = _ref.setUserAuthenticated,\n      currentUsername = _ref.currentUsername;\n  var classes = useStyles();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      anchorEl = _useState[0],\n      setAnchorEl = _useState[1];\n\n  var _useLocalStorage = useLocalStorage('username', ''),\n      _useLocalStorage2 = (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useLocalStorage, 2),\n      username = _useLocalStorage2[0],\n      setUsername = _useLocalStorage2[1];\n\n  function useLocalStorage(key, initialValue) {\n    _s();\n\n    var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(function () {\n      try {\n        var item = window.localStorage.getItem(key);\n        console.log(item);\n        return item ? JSON.parse(item) : initialValue;\n      } catch (error) {\n        console.log(error);\n        return initialValue;\n      }\n    }),\n        storedValue = _useState2[0],\n        setStoredValue = _useState2[1];\n\n    var setValue = function setValue(value) {\n      try {\n        var valueToStore = value instanceof Function ? value(storedValue) : value;\n        setStoredValue(valueToStore);\n      } catch (error) {\n        console.log(error);\n      }\n    };\n\n    return [storedValue, setValue];\n  }\n\n  _s(useLocalStorage, \"nXH1bV2enKI2KoeLEv190WYk4UY=\");\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    setUsername(localStorage.getItem('username'));\n  }, [window.localStorage.getItem('username')]);\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_7__.default, {\n      position: \"fixed\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_8__.default, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n          edge: \"start\",\n          className: classes.menuButton,\n          color: \"inherit\",\n          \"aria-label\": \"menu\",\n          onClick: handleClick,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenu, {\n          id: \"customized-menu\",\n          anchorEl: anchorEl,\n          keepMounted: true,\n          open: Boolean(anchorEl),\n          onClose: handleClose,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"Home\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 115,\n                columnNumber: 30\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/new-incident\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"Create New Incident\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 44\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/incidents\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"List of Incidents\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 41\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n              href: \"/new-user\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"Create Account\",\n                onClick: handleClose\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 40\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledMenuItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n              href: \"https://github.com/radian-digital/radian-challenge\",\n              target: \"_blank\",\n              onClick: handleClose,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                primary: \"About Project Scope\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 128,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__.default, {\n          variant: \"h6\",\n          className: classes.title,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n            href: \"https://github.com/radian-digital/radian-challenge\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \"Radian Technology Challenge\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, _this), username !== \"\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            children: [\"Hello \", username, \"!\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/incidents\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              style: {\n                marginLeft: \"20px\"\n              },\n              onClick: setUsername(''),\n              children: \"Logout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 144,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/new-user\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 147,\n                columnNumber: 60\n              }, _this), \"Create Account\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 147,\n              columnNumber: 36\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: \"/incidents\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__.default, {\n              color: \"inherit\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 148,\n                columnNumber: 61\n              }, _this), \"Login\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 148,\n              columnNumber: 37\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 148,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 12\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Menubar, \"bn60e/W67zEwzzsTy5khmardJ2o=\", true, function () {\n  return [useStyles];\n});\n\n_c = Menubar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menubar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menubar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51YmFyLmpzP2Y2MjQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiU3R5bGVkTWVudSIsIndpdGhTdHlsZXMiLCJwYXBlciIsImJvcmRlciIsInByb3BzIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiU3R5bGVkTWVudUl0ZW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJjb2xvciIsImNvbW1vbiIsIndoaXRlIiwiTWVudUl0ZW0iLCJNZW51YmFyIiwidXNlckF1dGhlbnRpY2F0ZWQiLCJzZXRVc2VyQXV0aGVudGljYXRlZCIsImN1cnJlbnRVc2VybmFtZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwia2V5IiwiaW5pdGlhbFZhbHVlIiwiaXRlbSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwic2V0VmFsdWUiLCJ2YWx1ZSIsInZhbHVlVG9TdG9yZSIsIkZ1bmN0aW9uIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIkJvb2xlYW4iLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxT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QXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFQyw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsWUFBWDtBQUFBLG1DQUF3Qiw4REFBQyw4REFBRDtBQUFRLG1CQUFLLEVBQUMsU0FBZDtBQUFBLHNDQUF3Qiw4REFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0NIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0FoR0Q7O0lBQU1WLE87VUFFWXpCLFM7OztLQUZaeUIsTztBQWtHTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudWJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaXN0SXRlbVRleHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IFBlcnNvbkFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvbkFkZCc7XG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBNZW51LCBNZW51SXRlbSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBtZW51QnV0dG9uOiB7XG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICB9KSk7XG4gIFxuICBjb25zdCBTdHlsZWRNZW51ID0gd2l0aFN0eWxlcyh7XG4gICAgcGFwZXI6IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDNkNGQ1JyxcbiAgICB9LFxuICB9KSgocHJvcHMpID0+IChcbiAgICA8TWVudVxuICAgICAgZWxldmF0aW9uPXswfVxuICAgICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICB9fVxuICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICkpO1xuICBcbiAgY29uc3QgU3R5bGVkTWVudUl0ZW0gPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgJyYgLk11aUxpc3RJdGVtSWNvbi1yb290LCAmIC5NdWlMaXN0SXRlbVRleHQtcHJpbWFyeSc6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pKShNZW51SXRlbSk7XG5cbmNvbnN0IE1lbnViYXIgPSAoeyB1c2VyQXV0aGVudGljYXRlZCwgc2V0VXNlckF1dGhlbnRpY2F0ZWQsIGN1cnJlbnRVc2VybmFtZSB9KSA9PiB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZUxvY2FsU3RvcmFnZSgndXNlcm5hbWUnLCAnJyk7XG5cbiAgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlKGtleSwgaW5pdGlhbFZhbHVlKSB7XG4gICAgY29uc3QgW3N0b3JlZFZhbHVlLCBzZXRTdG9yZWRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgIHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IGluaXRpYWxWYWx1ZVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gaW5pdGlhbFZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgc2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRVc2VybmFtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKSlcbiAgfSxbd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpXSlcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8U3R5bGVkTWVudVxuICAgICAgICAgICAgaWQ9XCJjdXN0b21pemVkLW1lbnVcIlxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSG9tZVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfS8+PC9MaW5rPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy1pbmNpZGVudFwiPjxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNyZWF0ZSBOZXcgSW5jaWRlbnRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0vPjwvTGluaz5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmNpZGVudHNcIj48TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMaXN0IG9mIEluY2lkZW50c1wiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfS8+PC9MaW5rPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgIDxTdHlsZWRNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy11c2VyXCI+PExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3JlYXRlIEFjY291bnRcIiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0vPjwvTGluaz5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICA8U3R5bGVkTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYWRpYW4tZGlnaXRhbC9yYWRpYW4tY2hhbGxlbmdlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBYm91dCBQcm9qZWN0IFNjb3BlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnVJdGVtPlxuICAgICAgICAgIDwvU3R5bGVkTWVudT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmFkaWFuLWRpZ2l0YWwvcmFkaWFuLWNoYWxsZW5nZVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICBSYWRpYW4gVGVjaG5vbG9neSBDaGFsbGVuZ2VcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAge3VzZXJuYW1lICE9PSBcIlwiXG4gICAgICAgICAgPyA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4+SGVsbG8ge3VzZXJuYW1lfSE8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2luY2lkZW50c1wiPjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIgfX0gb25DbGljaz17c2V0VXNlcm5hbWUoJycpfT5Mb2dvdXQ8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOjxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL25ldy11c2VyXCI+PEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj48UGVyc29uQWRkSWNvbi8+Q3JlYXRlIEFjY291bnQ8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2luY2lkZW50c1wiPjxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+PEFjY291bnRDaXJjbGVJY29uLz5Mb2dpbjwvQnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnViYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menubar.js\n");

/***/ })

});