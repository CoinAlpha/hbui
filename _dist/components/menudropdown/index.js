"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _typography = require("../../elements/typography");

var _react2 = require("@emotion/react");

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["links", "side", "type"],
    _excluded2 = ["active"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MenuDropdown(_ref) {
  var links = _ref.links,
      _ref$side = _ref.side,
      side = _ref$side === void 0 ? 'right' : _ref$side,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'kebab' : _ref$type,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)(KebabMenuRoot, props, type === 'kebab' && (0, _react2.jsx)(KebabControl, null), type === 'chevron' && (0, _react2.jsx)(TriangleDown, null), (0, _react2.jsx)(KebabMenuContent, {
    className: "kebab-menu-content",
    side: side
  }, links.map(function (link) {
    return (0, _react2.jsx)(_reactRouterDom.Link, {
      to: link.to,
      key: link.label
    }, (0, _react2.jsx)(KebabMenuItem, null, link.label));
  })));
}

var _default = MenuDropdown;
exports["default"] = _default;

var KebabMenuRoot = _styledComponents["default"].div(function () {
  return [{
    "position": "relative",
    "height": "18px"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .kebab-menu-content {\n      display: none;\n    }\n    .kebab-highlight {\n      display: none;\n    }\n    :hover {\n      .kebab-highlight {\n        display: block;\n      }\n      .kebab-menu-content {\n        display: block;\n      }\n    }\n  "])))];
});

var KebabMenuContent = _styledComponents["default"].div(function (_ref2) {
  var side = _ref2.side;
  return [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    min-width: 80px;\n  "]))), {
    "position": "absolute",
    "right": "-4px",
    "top": "18px"
  }, side === 'right' && {
    "right": "-4px"
  }, side === 'left' && {
    "left": "-4px"
  }, {
    "zIndex": "50",
    "borderRadius": "0.125rem",
    "borderWidth": "1px",
    "borderColor": "var(--border-window)"
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(201, 205, 207, var(--tw-bg-opacity))",
    ".dark &": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(40, 44, 47, var(--tw-bg-opacity))"
    }
  }];
});

var KebabControlRoot = _styledComponents["default"].div(function (_ref3) {
  var active = _ref3.active;
  return [{
    "position": "relative",
    "width": "10px",
    "height": "16px"
  }, active && [(0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      .kebab-highlight {\n        display: block;\n      }\n    "])))]];
});

var KebabMenuItem = (0, _styledComponents["default"])(_typography.LabelSmall)(function (_ref4) {
  var active = _ref4.active;
  return [{
    "userSelect": "none",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "color": "var(--text-secondary)",
    ":hover": {
      "color": "var(--text-primary)"
    },
    "cursor": "pointer"
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(252, 252, 252, var(--tw-bg-opacity))",
    ".dark &": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(40, 44, 47, var(--tw-bg-opacity))"
    }
  }, {
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(241, 243, 243, var(--tw-bg-opacity))",
      ".dark &": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(30, 34, 36, var(--tw-bg-opacity))"
      }
    }
  }];
});

function KebabControl(_ref5) {
  var active = _ref5.active,
      props = _objectWithoutProperties(_ref5, _excluded2);

  return (0, _react2.jsx)(KebabControlRoot, _extends({
    active: active
  }, props), (0, _react2.jsx)("div", {
    className: "kebab-highlight",
    css: {
      "position": "absolute",
      "top": "-2px",
      "left": "-3px",
      "borderRadius": "0.125rem",
      "backgroundColor": "var(--bg-input)",
      "width": "16px",
      "height": "20px"
    }
  }), (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "16",
    viewBox: "0 0 10 16",
    css: {
      "cursor": "pointer",
      "position": "absolute",
      "top": "0px",
      "left": "0px",
      "fill": "currentColor",
      "color": "var(--text-primary)"
    }
  }, (0, _react2.jsx)("path", {
    d: "M4 3.947c0 .533.438.948 1 .948.531 0 1-.415 1-.948C6 3.444 5.531 3 5 3c-.563 0-1 .444-1 .947zM4 7.947C4 7.444 4.438 7 5 7c.531 0 1 .444 1 .947 0 .533-.469.948-1 .948-.563 0-1-.415-1-.948zM5 12.895c-.563 0-1-.415-1-.948 0-.503.438-.947 1-.947.531 0 1 .444 1 .947 0 .533-.469.948-1 .948z"
  })));
}

function TriangleDown() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    css: {
      "fill": "currentColor",
      "color": "var(--text-primary)"
    },
    className: "chevron-down",
    viewBox: "0 0 16 16"
  }, (0, _react2.jsx)("path", {
    fill: "transparent",
    d: "M0 0H16V16H0z"
  }), (0, _react2.jsx)("path", {
    fill: "#AEB4B7",
    d: "M11.404 7.059a.512.512 0 00.022-.73.512.512 0 00-.73-.022l-2.923 2.75-2.9-2.75a.512.512 0 00-.73.021.512.512 0 00.02.73l3.267 3.094a.571.571 0 00.343.13.583.583 0 00.366-.13l3.265-3.093z"
  }));
}