"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PlayButton(_ref) {
  var props = _extends({}, _ref);

  return (0, _react2.jsx)("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "11",
    height: "13",
    viewBox: "0 0 11 13",
    css: {
      "fill": "currentColor",
      "color": "var(--text-primary)"
    }
  }, props), (0, _react2.jsx)("path", {
    d: "M9.938 5.028L1.688.153C1.007-.245 0 .153 0 1.114v9.75c0 .89.938 1.43 1.688.985l8.25-4.875a1.14 1.14 0 000-1.946z"
  }));
}

var _default = PlayButton;
exports["default"] = _default;