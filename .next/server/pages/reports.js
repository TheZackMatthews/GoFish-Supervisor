/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/reports";
exports.ids = ["pages/reports"];
exports.modules = {

/***/ "./components/reports/SimpleSelect.js":
/*!********************************************!*\
  !*** ./components/reports/SimpleSelect.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SimpleSelect; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ \"@material-ui/core/InputLabel\");\n/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"@material-ui/core/MenuItem\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ \"@material-ui/core/FormHelperText\");\n/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ \"@material-ui/core/FormControl\");\n/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ \"@material-ui/core/Select\");\n/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/home/pantero/Code/Codeworks/GoFish/GoFish-Supervisor/components/reports/SimpleSelect.js\";\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({\n  formControl: {\n    margin: theme.spacing(1),\n    minWidth: 120\n  },\n  selectEmpty: {\n    marginTop: theme.spacing(2)\n  }\n}));\nfunction SimpleSelect(props) {\n  const classes = useStyles();\n  const {\n    handleChange,\n    itemValue\n  } = props;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {\n      className: classes.formControl,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default()), {\n        id: \"report-label\",\n        children: \"Report Type\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7___default()), {\n        labelId: \"report-label\",\n        id: \"report\",\n        value: itemValue,\n        onChange: handleChange,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n          value: \"All Surveys\",\n          children: \"All Surveys\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n          value: \"Fish Summary\",\n          children: \"Fish Summary\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default()), {\n          value: \"Volunteer Summary\",\n          children: \"Volunteer Summary\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRodW5rLy4vY29tcG9uZW50cy9yZXBvcnRzL1NpbXBsZVNlbGVjdC5qcz9hZjg0Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvcm1Db250cm9sIiwibWFyZ2luIiwic3BhY2luZyIsIm1pbldpZHRoIiwic2VsZWN0RW1wdHkiLCJtYXJnaW5Ub3AiLCJTaW1wbGVTZWxlY3QiLCJwcm9wcyIsImNsYXNzZXMiLCJoYW5kbGVDaGFuZ2UiLCJpdGVtVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxhQUFXLEVBQUU7QUFDWEMsVUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBREc7QUFFWEMsWUFBUSxFQUFFO0FBRkMsR0FEMEI7QUFLdkNDLGFBQVcsRUFBRTtBQUNYQyxhQUFTLEVBQUVOLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQ7QUFEQTtBQUwwQixDQUFaLENBQUQsQ0FBNUI7QUFVZSxTQUFTSSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMxQyxRQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQSxRQUFNO0FBQUVZLGdCQUFGO0FBQWdCQztBQUFoQixNQUE4QkgsS0FBcEM7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHNFQUFEO0FBQWEsZUFBUyxFQUFFQyxPQUFPLENBQUNSLFdBQWhDO0FBQUEsOEJBQ0UsOERBQUMscUVBQUQ7QUFBWSxVQUFFLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsaUVBQUQ7QUFBUSxlQUFPLEVBQUMsY0FBaEI7QUFBK0IsVUFBRSxFQUFDLFFBQWxDO0FBQTJDLGFBQUssRUFBRVUsU0FBbEQ7QUFBNkQsZ0JBQVEsRUFBRUQsWUFBdkU7QUFBQSxnQ0FDRSw4REFBQyxtRUFBRDtBQUFVLGVBQUssRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLG1FQUFEO0FBQVUsZUFBSyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UsOERBQUMsbUVBQUQ7QUFBVSxlQUFLLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9yZXBvcnRzL1NpbXBsZVNlbGVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWwnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZm9ybUNvbnRyb2w6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWluV2lkdGg6IDEyMCxcbiAgfSxcbiAgc2VsZWN0RW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNlbGVjdChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgaGFuZGxlQ2hhbmdlLCBpdGVtVmFsdWUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxuICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInJlcG9ydC1sYWJlbFwiPlJlcG9ydCBUeXBlPC9JbnB1dExhYmVsPlxuICAgICAgICA8U2VsZWN0IGxhYmVsSWQ9XCJyZXBvcnQtbGFiZWxcIiBpZD1cInJlcG9ydFwiIHZhbHVlPXtpdGVtVmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkFsbCBTdXJ2ZXlzXCI+QWxsIFN1cnZleXM8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZpc2ggU3VtbWFyeVwiPkZpc2ggU3VtbWFyeTwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVm9sdW50ZWVyIFN1bW1hcnlcIj5Wb2x1bnRlZXIgU3VtbWFyeTwvTWVudUl0ZW0+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/reports/SimpleSelect.js\n");

/***/ }),

/***/ "./components/reports/TableFromJSON.js":
/*!*********************************************!*\
  !*** ./components/reports/TableFromJSON.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/pantero/Code/Codeworks/GoFish/GoFish-Supervisor/components/reports/TableFromJSON.js\";\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\nconst TableFromJSON = props => {\n  const {\n    0: tableReady,\n    1: setTableReady\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  let {\n    data\n  } = props;\n  const {\n    title\n  } = props;\n  let header;\n  let rows;\n  let table;\n  console.log('data', data); // remove id and any other unnecessary columns\n\n  if (data.length) {\n    data = data.map((_ref) => {\n      let {\n        id,\n        group_id,\n        location,\n        what_ever\n      } = _ref,\n          rest = _objectWithoutProperties(_ref, [\"id\", \"group_id\", \"location\", \"what_ever\"]);\n\n      return rest;\n    });\n    header = Object.keys(data[0]).map((col, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n      children: col\n    }, idx, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 53\n    }, undefined));\n    console.log('header', header);\n    rows = data.map(row => Object.values(row).map(cell => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n      children: cell\n    }, row.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 63\n    }, undefined)));\n    table = rows.map((row, idx) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n      children: row\n    }, idx + 1, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 36\n    }, undefined));\n  }\n\n  return header ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"data-table-title\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n      className: \"data-table\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n          children: header\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, undefined), table]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableFromJSON);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRodW5rLy4vY29tcG9uZW50cy9yZXBvcnRzL1RhYmxlRnJvbUpTT04uanM/ZjIwZiJdLCJuYW1lcyI6WyJUYWJsZUZyb21KU09OIiwicHJvcHMiLCJ0YWJsZVJlYWR5Iiwic2V0VGFibGVSZWFkeSIsInVzZVN0YXRlIiwiZGF0YSIsInRpdGxlIiwiaGVhZGVyIiwicm93cyIsInRhYmxlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsImlkIiwiZ3JvdXBfaWQiLCJsb2NhdGlvbiIsIndoYXRfZXZlciIsInJlc3QiLCJPYmplY3QiLCJrZXlzIiwiY29sIiwiaWR4Iiwicm93IiwidmFsdWVzIiwiY2VsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0IsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDLElBQUQsQ0FBNUM7QUFDQSxNQUFJO0FBQUVDO0FBQUYsTUFBV0osS0FBZjtBQUNBLFFBQU07QUFBRUs7QUFBRixNQUFZTCxLQUFsQjtBQUNBLE1BQUlNLE1BQUo7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsS0FBSjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CTixJQUFwQixFQVArQixDQVEvQjs7QUFDQSxNQUFJQSxJQUFJLENBQUNPLE1BQVQsRUFBaUI7QUFDZlAsUUFBSSxHQUFHQSxJQUFJLENBQUNRLEdBQUwsQ0FBUztBQUFBLFVBQUM7QUFDZkMsVUFEZTtBQUNYQyxnQkFEVztBQUNEQyxnQkFEQztBQUNTQztBQURULE9BQUQ7QUFBQSxVQUN3QkMsSUFEeEI7O0FBQUEsYUFFVkEsSUFGVTtBQUFBLEtBQVQsQ0FBUDtBQUlBWCxVQUFNLEdBQUdZLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZixJQUFJLENBQUMsQ0FBRCxDQUFoQixFQUFxQlEsR0FBckIsQ0FBeUIsQ0FBQ1EsR0FBRCxFQUFNQyxHQUFOLGtCQUFjO0FBQUEsZ0JBQWVEO0FBQWYsT0FBU0MsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF2QyxDQUFUO0FBQ0FaLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLE1BQXRCO0FBQ0FDLFFBQUksR0FBR0gsSUFBSSxDQUFDUSxHQUFMLENBQVVVLEdBQUQsSUFBU0osTUFBTSxDQUFDSyxNQUFQLENBQWNELEdBQWQsRUFBbUJWLEdBQW5CLENBQXdCWSxJQUFELGlCQUFVO0FBQUEsZ0JBQWtCQTtBQUFsQixPQUFTRixHQUFHLENBQUNULEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBakMsQ0FBbEIsQ0FBUDtBQUNBTCxTQUFLLEdBQUdELElBQUksQ0FBQ0ssR0FBTCxDQUFTLENBQUNVLEdBQUQsRUFBTUQsR0FBTixrQkFBYztBQUFBLGdCQUFtQkM7QUFBbkIsT0FBU0QsR0FBRyxHQUFHLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdkIsQ0FBUjtBQUNEOztBQUVELFNBQU9mLE1BQU0sZ0JBQ1g7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxrQkFBZDtBQUFBLGdCQUFrQ0Q7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU8sZUFBUyxFQUFDLFlBQWpCO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR0UsS0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXLGdCQVdYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQWFELENBakNEOztBQW1DQSwrREFBZVQsYUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvcmVwb3J0cy9UYWJsZUZyb21KU09OLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUYWJsZUZyb21KU09OID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt0YWJsZVJlYWR5LCBzZXRUYWJsZVJlYWR5XSA9IHVzZVN0YXRlKG51bGwpO1xuICBsZXQgeyBkYXRhIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0aXRsZSB9ID0gcHJvcHM7XG4gIGxldCBoZWFkZXI7XG4gIGxldCByb3dzO1xuICBsZXQgdGFibGU7XG4gIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4gIC8vIHJlbW92ZSBpZCBhbmQgYW55IG90aGVyIHVubmVjZXNzYXJ5IGNvbHVtbnNcbiAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgZGF0YSA9IGRhdGEubWFwKCh7XG4gICAgICBpZCwgZ3JvdXBfaWQsIGxvY2F0aW9uLCB3aGF0X2V2ZXIsIC4uLnJlc3RcbiAgICB9KSA9PiByZXN0KTtcblxuICAgIGhlYWRlciA9IE9iamVjdC5rZXlzKGRhdGFbMF0pLm1hcCgoY29sLCBpZHgpID0+IDx0aCBrZXk9e2lkeH0+e2NvbH08L3RoPik7XG4gICAgY29uc29sZS5sb2coJ2hlYWRlcicsIGhlYWRlcik7XG4gICAgcm93cyA9IGRhdGEubWFwKChyb3cpID0+IE9iamVjdC52YWx1ZXMocm93KS5tYXAoKGNlbGwpID0+IDx0ZCBrZXk9e3Jvdy5pZH0+e2NlbGx9PC90ZD4pKTtcbiAgICB0YWJsZSA9IHJvd3MubWFwKChyb3csIGlkeCkgPT4gPHRyIGtleT17aWR4ICsgMX0+e3Jvd308L3RyPik7XG4gIH1cblxuICByZXR1cm4gaGVhZGVyID8gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZGF0YS10YWJsZS10aXRsZVwiPnt0aXRsZX08L2gxPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImRhdGEtdGFibGVcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj57aGVhZGVyfTwvdHI+XG4gICAgICAgICAge3RhYmxlfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKSA6IChcbiAgICA8ZGl2IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUZyb21KU09OO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/reports/TableFromJSON.js\n");

/***/ }),

/***/ "./pages/reports.js":
/*!**************************!*\
  !*** ./pages/reports.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var json_2_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json-2-csv */ \"json-2-csv\");\n/* harmony import */ var json_2_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json_2_csv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redux_actions_reportActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/reportActions */ \"./redux/actions/reportActions.js\");\n/* harmony import */ var _components_reports_TableFromJSON__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/reports/TableFromJSON */ \"./components/reports/TableFromJSON.js\");\n/* harmony import */ var _components_reports_SimpleSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/reports/SimpleSelect */ \"./components/reports/SimpleSelect.js\");\n\n\nvar _jsxFileName = \"/home/pantero/Code/Codeworks/GoFish/GoFish-Supervisor/pages/reports.js\";\n\n\n\n\n\n\n\n\n\nconst exportTable = data => {\n  (0,json_2_csv__WEBPACK_IMPORTED_MODULE_2__.json2csv)(data, (err, csv) => {\n    if (err) alert('Problem exporting', err);else return csv;\n  });\n};\n\nconst Reports = () => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  const {\n    0: reportType,\n    1: setReportType\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');\n  const {\n    0: reportData,\n    1: setReportData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n  const {\n    0: reportCSV,\n    1: setReportCSV\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n  /* eslint-disable no-unused-expressions */\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    switch (reportType) {\n      case 'All Surveys':\n        fetchAll();\n        break;\n\n      case 'Fish Summary':\n        fetchAll();\n        break;\n\n      case 'Volunteer Summary':\n        setReportData([]);\n\n      default:\n    }\n  }, [reportType]);\n  /* eslint-enable no-unused-expressions */\n\n  const fetchAll = async () => {\n    const result = await dispatch((0,_redux_actions_reportActions__WEBPACK_IMPORTED_MODULE_6__.fetchAllSurveys)());\n\n    if (result && result.payload) {\n      setReportData(result.payload.data);\n    }\n  };\n\n  const handleDropdownChange = event => {\n    console.log(event.target.value);\n    setReportType(event.target.value);\n  };\n\n  console.log('reportdata', reportData);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Welcome to the Go Fish reports.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reports_SimpleSelect__WEBPACK_IMPORTED_MODULE_8__.default, {\n      handleChange: handleDropdownChange,\n      itemValue: reportType\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_reports_TableFromJSON__WEBPACK_IMPORTED_MODULE_7__.default, {\n        data: reportData,\n        title: reportType\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n        variant: \"contained\",\n        color: \"default\",\n        id: \"exportTable\",\n        onClick: () => {\n          exportTable(reportData);\n        },\n        children: \"Export Table\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRodW5rLy4vcGFnZXMvcmVwb3J0cy5qcz80NzYyIl0sIm5hbWVzIjpbImV4cG9ydFRhYmxlIiwiZGF0YSIsImpzb24yY3N2IiwiZXJyIiwiY3N2IiwiYWxlcnQiLCJSZXBvcnRzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJlcG9ydFR5cGUiLCJzZXRSZXBvcnRUeXBlIiwidXNlU3RhdGUiLCJyZXBvcnREYXRhIiwic2V0UmVwb3J0RGF0YSIsInJlcG9ydENTViIsInNldFJlcG9ydENTViIsInVzZUVmZmVjdCIsImZldGNoQWxsIiwicmVzdWx0IiwiZmV0Y2hBbGxTdXJ2ZXlzIiwicGF5bG9hZCIsImhhbmRsZURyb3Bkb3duQ2hhbmdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBSUMsSUFBRCxJQUFVO0FBQzVCQyxzREFBUSxDQUFDRCxJQUFELEVBQU8sQ0FBQ0UsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDM0IsUUFBSUQsR0FBSixFQUFTRSxLQUFLLENBQUMsbUJBQUQsRUFBc0JGLEdBQXRCLENBQUwsQ0FBVCxLQUNLLE9BQU9DLEdBQVA7QUFDTixHQUhPLENBQVI7QUFJRCxDQUxEOztBQU9BLE1BQU1FLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkYsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCSiwrQ0FBUSxFQUExQztBQUNBOztBQUVBSyxrREFBUyxDQUFDLE1BQU07QUFDZCxZQUFRUCxVQUFSO0FBQ0UsV0FBSyxhQUFMO0FBQ0VRLGdCQUFRO0FBQ1I7O0FBQ0YsV0FBSyxjQUFMO0FBQ0VBLGdCQUFRO0FBQ1I7O0FBQ0YsV0FBSyxtQkFBTDtBQUNFSixxQkFBYSxDQUFDLEVBQUQsQ0FBYjs7QUFDRjtBQVRGO0FBV0QsR0FaUSxFQVlOLENBQUNKLFVBQUQsQ0FaTSxDQUFUO0FBYUE7O0FBRUEsUUFBTVEsUUFBUSxHQUFHLFlBQVk7QUFDM0IsVUFBTUMsTUFBTSxHQUFHLE1BQU1YLFFBQVEsQ0FBQ1ksNkVBQWUsRUFBaEIsQ0FBN0I7O0FBQ0EsUUFBSUQsTUFBTSxJQUFJQSxNQUFNLENBQUNFLE9BQXJCLEVBQThCO0FBQzVCUCxtQkFBYSxDQUFDSyxNQUFNLENBQUNFLE9BQVAsQ0FBZW5CLElBQWhCLENBQWI7QUFDRDtBQUNGLEdBTEQ7O0FBT0EsUUFBTW9CLG9CQUFvQixHQUFJQyxLQUFELElBQVc7QUFDdENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBekI7QUFDQWhCLGlCQUFhLENBQUNZLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUFkLENBQWI7QUFDRCxHQUhEOztBQUtBSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCWixVQUExQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSw4REFBQyxxRUFBRDtBQUFjLGtCQUFZLEVBQUVTLG9CQUE1QjtBQUFrRCxlQUFTLEVBQUVaO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRTtBQUFBLDhCQUNFLDhEQUFDLHNFQUFEO0FBQWUsWUFBSSxFQUFFRyxVQUFyQjtBQUFpQyxhQUFLLEVBQUVIO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBQyxXQURWO0FBRUUsYUFBSyxFQUFDLFNBRlI7QUFHRSxVQUFFLEVBQUMsYUFITDtBQUlFLGVBQU8sRUFBRSxNQUFNO0FBQ2JULHFCQUFXLENBQUNZLFVBQUQsQ0FBWDtBQUNELFNBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUEsa0JBREY7QUFxQkQsQ0F6REQ7O0FBMkRBLCtEQUFlTixPQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVwb3J0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBqc29uMmNzdiB9IGZyb20gJ2pzb24tMi1jc3YnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGZldGNoQWxsU3VydmV5cyB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvcmVwb3J0QWN0aW9ucyc7XG5pbXBvcnQgVGFibGVGcm9tSlNPTiBmcm9tICcuLi9jb21wb25lbnRzL3JlcG9ydHMvVGFibGVGcm9tSlNPTic7XG5pbXBvcnQgU2ltcGxlU2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVwb3J0cy9TaW1wbGVTZWxlY3QnO1xuXG5jb25zdCBleHBvcnRUYWJsZSA9IChkYXRhKSA9PiB7XG4gIGpzb24yY3N2KGRhdGEsIChlcnIsIGNzdikgPT4ge1xuICAgIGlmIChlcnIpIGFsZXJ0KCdQcm9ibGVtIGV4cG9ydGluZycsIGVycik7XG4gICAgZWxzZSByZXR1cm4gY3N2O1xuICB9KTtcbn07XG5cbmNvbnN0IFJlcG9ydHMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3JlcG9ydFR5cGUsIHNldFJlcG9ydFR5cGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVwb3J0RGF0YSwgc2V0UmVwb3J0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZXBvcnRDU1YsIHNldFJlcG9ydENTVl0gPSB1c2VTdGF0ZSgpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN3aXRjaCAocmVwb3J0VHlwZSkge1xuICAgICAgY2FzZSAnQWxsIFN1cnZleXMnOlxuICAgICAgICBmZXRjaEFsbCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Zpc2ggU3VtbWFyeSc6XG4gICAgICAgIGZldGNoQWxsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVm9sdW50ZWVyIFN1bW1hcnknOlxuICAgICAgICBzZXRSZXBvcnREYXRhKFtdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9LCBbcmVwb3J0VHlwZV0pO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG4gIGNvbnN0IGZldGNoQWxsID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRpc3BhdGNoKGZldGNoQWxsU3VydmV5cygpKTtcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5wYXlsb2FkKSB7XG4gICAgICBzZXRSZXBvcnREYXRhKHJlc3VsdC5wYXlsb2FkLmRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEcm9wZG93bkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UmVwb3J0VHlwZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKCdyZXBvcnRkYXRhJywgcmVwb3J0RGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIEdvIEZpc2ggcmVwb3J0cy48L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8U2ltcGxlU2VsZWN0IGhhbmRsZUNoYW5nZT17aGFuZGxlRHJvcGRvd25DaGFuZ2V9IGl0ZW1WYWx1ZT17cmVwb3J0VHlwZX0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxUYWJsZUZyb21KU09OIGRhdGE9e3JlcG9ydERhdGF9IHRpdGxlPXtyZXBvcnRUeXBlfSAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICBpZD1cImV4cG9ydFRhYmxlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBleHBvcnRUYWJsZShyZXBvcnREYXRhKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRXhwb3J0IFRhYmxlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/reports.js\n");

/***/ }),

/***/ "./redux/actions/actionTypes.js":
/*!**************************************!*\
  !*** ./redux/actions/actionTypes.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FETCH_ALL_SURVEYS\": function() { return /* binding */ FETCH_ALL_SURVEYS; }\n/* harmony export */ });\n// REDUX ACTION TYPES\nconst FETCH_ALL_SURVEYS = \"FETCH_ALL_SURVEYS\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRodW5rLy4vcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcy5qcz9mMDk0Il0sIm5hbWVzIjpbIkZFVENIX0FMTF9TVVJWRVlTIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTyxNQUFNQSxpQkFBaUIsR0FBRyxtQkFBMUIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUkVEVVggQUNUSU9OIFRZUEVTXG5leHBvcnQgY29uc3QgRkVUQ0hfQUxMX1NVUlZFWVMgPSBcIkZFVENIX0FMTF9TVVJWRVlTXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/actionTypes.js\n");

/***/ }),

/***/ "./redux/actions/reportActions.js":
/*!****************************************!*\
  !*** ./redux/actions/reportActions.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAllSurveys\": function() { return /* binding */ fetchAllSurveys; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ \"./redux/actions/actionTypes.js\");\n/* eslint-disable import/prefer-default-export */\n\n\nconst urlFetchAll = 'https://gofish-api.herokuapp.com/getAllSurveys'; // const urlFetchAll = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';\n\nconst fetchAllSurveys = () => dispatch => {\n  console.log('fetching all surveys');\n  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(urlFetchAll).then(res => {\n    console.log(res.data);\n    return dispatch({\n      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__.FETCH_ALL_SURVEYS,\n      payload: {\n        name: 'allSurveys',\n        data: res.data\n      }\n    });\n  }).catch(err => {\n    if (err.response) {\n      console.log('client received error', err);\n    } else if (err.request) {\n      console.log('client did not receive response or request never left', err);\n    } else {\n      console.log(err);\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRodW5rLy4vcmVkdXgvYWN0aW9ucy9yZXBvcnRBY3Rpb25zLmpzPzZkYzkiXSwibmFtZXMiOlsidXJsRmV0Y2hBbGwiLCJmZXRjaEFsbFN1cnZleXMiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwidHlwZSIsIkZFVENIX0FMTF9TVVJWRVlTIiwicGF5bG9hZCIsIm5hbWUiLCJjYXRjaCIsImVyciIsInJlc3BvbnNlIiwicmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBRyxnREFBcEIsQyxDQUNBOztBQUNPLE1BQU1DLGVBQWUsR0FBRyxNQUFPQyxRQUFELElBQWM7QUFDakRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0EsU0FBT0MsZ0RBQUEsQ0FDQUwsV0FEQSxFQUVKTSxJQUZJLENBRUVDLEdBQUQsSUFBUztBQUNiSixXQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBRyxDQUFDQyxJQUFoQjtBQUNBLFdBQU9OLFFBQVEsQ0FBQztBQUNkTyxVQUFJLEVBQUVDLDJEQURRO0FBRWRDLGFBQU8sRUFBRTtBQUFFQyxZQUFJLEVBQUUsWUFBUjtBQUFzQkosWUFBSSxFQUFFRCxHQUFHLENBQUNDO0FBQWhDO0FBRkssS0FBRCxDQUFmO0FBSUQsR0FSSSxFQVNKSyxLQVRJLENBU0dDLEdBQUQsSUFBUztBQUNkLFFBQUlBLEdBQUcsQ0FBQ0MsUUFBUixFQUFrQjtBQUNoQlosYUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNVLEdBQXJDO0FBQ0QsS0FGRCxNQUVPLElBQUlBLEdBQUcsQ0FBQ0UsT0FBUixFQUFpQjtBQUN0QmIsYUFBTyxDQUFDQyxHQUFSLENBQVksdURBQVosRUFBcUVVLEdBQXJFO0FBQ0QsS0FGTSxNQUVBO0FBQ0xYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVSxHQUFaO0FBQ0Q7QUFDRixHQWpCSSxDQUFQO0FBa0JELENBcEJNIiwiZmlsZSI6Ii4vcmVkdXgvYWN0aW9ucy9yZXBvcnRBY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEZFVENIX0FMTF9TVVJWRVlTIH0gZnJvbSAnLi9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IHVybEZldGNoQWxsID0gJ2h0dHBzOi8vZ29maXNoLWFwaS5oZXJva3VhcHAuY29tL2dldEFsbFN1cnZleXMnO1xuLy8gY29uc3QgdXJsRmV0Y2hBbGwgPSAnaHR0cHM6Ly9kYXRhdXNhLmlvL2FwaS9kYXRhP2RyaWxsZG93bnM9TmF0aW9uJm1lYXN1cmVzPVBvcHVsYXRpb24nO1xuZXhwb3J0IGNvbnN0IGZldGNoQWxsU3VydmV5cyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBjb25zb2xlLmxvZygnZmV0Y2hpbmcgYWxsIHN1cnZleXMnKTtcbiAgcmV0dXJuIGF4aW9zXG4gICAgLmdldCh1cmxGZXRjaEFsbClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBGRVRDSF9BTExfU1VSVkVZUyxcbiAgICAgICAgcGF5bG9hZDogeyBuYW1lOiAnYWxsU3VydmV5cycsIGRhdGE6IHJlcy5kYXRhIH0sXG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGllbnQgcmVjZWl2ZWQgZXJyb3InLCBlcnIpO1xuICAgICAgfSBlbHNlIGlmIChlcnIucmVxdWVzdCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpZW50IGRpZCBub3QgcmVjZWl2ZSByZXNwb25zZSBvciByZXF1ZXN0IG5ldmVyIGxlZnQnLCBlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/reportActions.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/FormControl");;

/***/ }),

/***/ "@material-ui/core/FormHelperText":
/*!***************************************************!*\
  !*** external "@material-ui/core/FormHelperText" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/FormHelperText");;

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/InputLabel");;

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/MenuItem");;

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Select");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "json-2-csv":
/*!*****************************!*\
  !*** external "json-2-csv" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("json-2-csv");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/reports.js"));
module.exports = __webpack_exports__;

})();