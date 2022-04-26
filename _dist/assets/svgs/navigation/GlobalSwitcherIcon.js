"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function GlobalSwitcherIcon() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    css: {
      "fill": "currentColor",
      "color": "var(--text-primary)"
    },
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, (0, _react2.jsx)("path", {
    d: "M0 0H4V4H0z"
  }), (0, _react2.jsx)("path", {
    d: "M0 6H4V10H0z"
  }), (0, _react2.jsx)("path", {
    d: "M6 6H10V10H6z"
  }), (0, _react2.jsx)("path", {
    d: "M6 0H10V4H6z"
  }), (0, _react2.jsx)("path", {
    d: "M12 0H16V4H12z"
  }), (0, _react2.jsx)("path", {
    d: "M12 6H16V10H12z"
  }), (0, _react2.jsx)("path", {
    d: "M12 12H16V16H12z"
  }), (0, _react2.jsx)("path", {
    d: "M6 12H10V16H6z"
  }), (0, _react2.jsx)("path", {
    d: "M0 12H4V16H0z"
  }));
}

var _default = GlobalSwitcherIcon;
exports["default"] = _default;