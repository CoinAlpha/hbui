"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function NoteIcon() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16"
  }, (0, _react2.jsx)("path", {
    fill: "#767676",
    d: "M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2z"
  }), (0, _react2.jsx)("path", {
    fill: "#fff",
    d: "M13 3H3v1h10V3zM13 6H3v1h10V6zM13 9H3v1h10V9zM13 12H3v1h10v-1z"
  }));
}

var _default = NoteIcon;
exports["default"] = _default;