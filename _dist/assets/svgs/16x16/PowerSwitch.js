"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _excluded = ["active"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function PowerSwitch(_ref) {
  var active = _ref.active,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    fill: "none",
    viewBox: "0 0 14 14"
  }, props), (0, _react2.jsx)("path", {
    fill: active ? "00C2CE" : "#C9CDCF",
    d: "M10.391 1.285c-.164-.11-.383-.055-.465.11l-.328.574c-.082.136-.027.328.11.437A5.434 5.434 0 0112.25 7a5.467 5.467 0 01-5.468 5.469A5.45 5.45 0 011.312 7c0-1.914.985-3.637 2.517-4.594.136-.11.191-.3.109-.437l-.328-.574c-.082-.165-.301-.22-.465-.11C1.258 2.488-.027 4.594 0 7.027c0 3.72 3.063 6.782 6.782 6.754A6.78 6.78 0 0013.562 7c0-2.406-1.284-4.512-3.17-5.715zM7.438 7.547V.328A.353.353 0 007.11 0h-.656a.332.332 0 00-.329.328v7.219c0 .191.137.328.329.328h.656a.332.332 0 00.328-.328z"
  }));
}

var _default = PowerSwitch;
exports["default"] = _default;