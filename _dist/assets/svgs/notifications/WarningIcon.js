"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function WarningIcon() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "15",
    fill: "none",
    viewBox: "0 0 18 15"
  }, (0, _react2.jsx)("path", {
    fill: "#F08727",
    d: "M.75 14.75h16.5L9 .5.75 14.75zm9-2.25h-1.5V11h1.5v1.5zm0-3h-1.5v-3h1.5v3z"
  }));
}

var _default = WarningIcon;
exports["default"] = _default;