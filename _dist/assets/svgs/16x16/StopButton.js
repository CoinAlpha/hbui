"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function StopButton(_ref) {
  var props = _extends({}, _ref);

  return (0, _react2.jsx)("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "11",
    height: "11",
    viewBox: "0 0 11 11"
  }, props), (0, _react2.jsx)("path", {
    fill: "#484D51",
    d: "M9.375 0h-8.25C.492 0 0 .516 0 1.125v8.25A1.11 1.11 0 001.125 10.5h8.25c.61 0 1.125-.492 1.125-1.125v-8.25A1.14 1.14 0 009.375 0z"
  }));
}

var _default = StopButton;
exports["default"] = _default;