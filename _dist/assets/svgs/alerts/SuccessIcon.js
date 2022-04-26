"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SuccessIcon() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "23",
    fill: "none",
    viewBox: "0 0 22 23"
  }, (0, _react2.jsx)("path", {
    fill: "#fff",
    d: "M11 .594C5.025.594.219 5.445.219 11.375A10.755 10.755 0 0011 22.156c5.93 0 10.781-4.806 10.781-10.781C21.781 5.445 16.93.594 11 .594zm5.166 8.804l-5.75 5.75c-.225.27-.539.36-.854.36-.359 0-.673-.09-.898-.36L5.79 12.273a1.22 1.22 0 010-1.752 1.22 1.22 0 011.752 0l2.021 1.977 4.852-4.852a1.22 1.22 0 011.752 0 1.22 1.22 0 010 1.752z"
  }));
}

var _default = SuccessIcon;
exports["default"] = _default;