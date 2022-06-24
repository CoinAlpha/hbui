"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function CoinAlphaLogo() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "47",
    height: "38",
    fill: "none",
    viewBox: "0 0 45 51"
  }, (0, _react2.jsx)("path", {
    css: {
      "color": "var(--text-primary)",
      "fill": "currentColor"
    },
    d: "M23.918 0C17.323 0 11.707 2.335 7.037 7.005S.032 17.292 0 23.886c0 6.595 2.335 12.211 7.005 16.881s10.287 7.006 16.881 7.006c6.27 0 11.656-2.113 16.185-6.335l-2.18-4.177c-.102.107-.205.214-.31.32-3.787 3.755-8.362 5.648-13.695 5.648-5.332 0-9.907-1.893-13.694-5.648-3.755-3.787-5.648-8.362-5.648-13.695 0-5.332 1.893-9.908 5.648-13.694 3.787-3.755 8.362-5.648 13.694-5.648 5.333 0 9.908 1.893 13.695 5.648.216.223.426.45.632.68l.9-5.417C34.794 1.82 29.736 0 23.917 0z"
  }), (0, _react2.jsx)("path", {
    css: {
      "color": "var(--text-primary)",
      "fill": "currentColor"
    },
    d: "M23.664 10.215l-2.752 5.144v.03L10.887 34.477l3.575 2.455 9.203-17.268L39.86 50.347h4.86L26.236 15.12l-2.572-4.905zM5.7 44.348l-3.15 5.999h4.761l1.92-3.604-3.53-2.395z"
  }));
}

var _default = CoinAlphaLogo;
exports["default"] = _default;