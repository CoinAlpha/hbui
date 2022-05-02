"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _typography = require("../../elements/typography");

var _react2 = require("@emotion/react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Modal(_ref) {
  var content = _ref.content,
      path = _ref.path,
      closeFunction = _ref.closeFunction;
  return (0, _react2.jsx)("div", {
    css: {
      "zIndex": "50",
      "position": "fixed",
      "top": "0px",
      "left": "0px",
      "width": "100%",
      "height": "100%",
      "backgroundColor": "rgba(0, 0, 0, 0.8)",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center"
    }
  }, (0, _react2.jsx)("div", {
    css: {
      "position": "relative",
      "width": "33.333333%",
      "backgroundColor": "var(--bg-primary)",
      "padding": "24px"
    }
  }, (0, _react2.jsx)("div", {
    css: {
      "display": "flex",
      "justifyContent": "space-between"
    }
  }, path && (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true,
    css: {
      "marginBottom": "24px"
    }
  }, path), (0, _react2.jsx)(CloseIcon, {
    css: {
      "cursor": "pointer"
    },
    onClick: function onClick() {
      return closeFunction();
    }
  })), content));
}

var _default = Modal;
exports["default"] = _default;

function CloseIcon(_ref2) {
  var props = _extends({}, _ref2);

  return (0, _react2.jsx)("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "none",
    viewBox: "0 0 20 20"
  }, props), (0, _react2.jsx)("path", {
    fill: "#C9CDCF",
    d: "M14.844 14.875a.53.53 0 000-.719L10.688 10l4.156-4.125a.53.53 0 000-.719.53.53 0 00-.719 0L10 9.313 5.844 5.155a.53.53 0 00-.719 0 .53.53 0 000 .719L9.281 10l-4.156 4.156a.53.53 0 000 .719.53.53 0 00.719 0L10 10.719l4.125 4.156a.53.53 0 00.719 0z"
  }));
}