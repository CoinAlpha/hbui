"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ErrorIcon() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    fill: "none",
    viewBox: "0 0 14 14"
  }, (0, _react2.jsx)("path", {
    fill: "#EB5757",
    d: "M9.797.25H4.202L.25 4.202v5.595l3.952 3.953h5.595l3.953-3.953V4.202L9.797.25zm.953 9.555l-.945.945L7 7.945 4.195 10.75l-.945-.945L6.055 7 3.25 4.195l.945-.945L7 6.055 9.805 3.25l.945.945L7.945 7l2.805 2.805z"
  }));
}

var _default = ErrorIcon;
exports["default"] = _default;