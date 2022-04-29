"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _typography = require("../../elements/typography");

var _layout = require("../../elements/layout");

var _buttons = require("../../elements/buttons");

var _Home = _interopRequireDefault(require("../../assets/svgs/icons/Home"));

var _textlink = _interopRequireDefault(require("../textlink"));

var _react2 = require("@emotion/react");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function BreadcrumbsBar(_ref) {
  var links = _ref.links,
      buttons = _ref.buttons,
      history = _ref.history;
  return (0, _react2.jsx)(BreadcrumbsBarRoot, null, links && (0, _react2.jsx)(_Home["default"], null), links && (0, _react2.jsx)(ChevronRight, null), links && (0, _react2.jsx)(LinksRow, null, links.map(function (link, index) {
    return (0, _react2.jsx)("span", {
      key: link.url,
      css: {
        "display": "flex",
        "alignItems": "center"
      }
    }, index !== 0 && (0, _react2.jsx)(_typography.P, {
      className: "divider"
    }, "/"), (0, _react2.jsx)(_textlink["default"], {
      to: link.url,
      label: link.label
    }));
  })), buttons && (0, _react2.jsx)("div", {
    style: {
      margin: '0 auto',
      width: '696px'
    },
    className: "AQUI"
  }, (0, _react2.jsx)(_layout.ItemsRow, null, buttons.map(function (button) {
    return (0, _react2.jsx)(_reactRouterDom.Link, {
      key: button.url,
      to: button.url
    }, (0, _react2.jsx)(_buttons.Button, {
      isSmall: true,
      isSuccess: button.url === history.pathname
    }, button.label));
  }))));
}

var _default = BreadcrumbsBar;
exports["default"] = _default;

var BreadcrumbsBarRoot = _styledComponents["default"].div(function (_ref2) {
  var isUppercase = _ref2.isUppercase,
      isDisabled = _ref2.isDisabled;
  return [{
    "display": "flex",
    "width": "100%",
    "position": "relative"
  }, {
    "alignItems": "center"
  }, {
    "position": "relative",
    "paddingTop": "0.625rem",
    "paddingBottom": "0.625rem",
    "paddingLeft": "1rem",
    "paddingRight": "1rem"
  }, {
    "borderBottomWidth": "1px",
    "borderColor": "var(--border-secondary)"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    a.active {\n      ", "\n    }\n    .home-icon {\n      ", "\n    }\n    .divider {\n      ", "\n      display: inline;\n      line-height: 100%;\n    }\n    .inner-chevron-right, .divider {\n      ", "\n    }\n  "])), {
    "--tw-text-opacity": "1",
    "color": "rgba(0, 194, 206, var(--tw-text-opacity))"
  }, {
    "position": "relative",
    "top": "-1px"
  }, {
    "fontSize": "0.875rem",
    "lineHeight": "20px",
    "color": "var(--text-quaternary)"
  }, {
    "marginLeft": "10px",
    "marginRight": "10px"
  })];
});

var LinksRow = _styledComponents["default"].div(function (_ref3) {
  _objectDestructuringEmpty(_ref3);

  return [{
    "display": "flex",
    "alignItems": "center"
  }];
});

function ChevronRight() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "5",
    height: "9",
    fill: "none",
    viewBox: "0 0 5 9",
    className: "inner-chevron-right"
  }, (0, _react2.jsx)("path", {
    fill: "#788187",
    d: "M1.086.562C.876.328.524.328.289.54c-.234.211-.234.563-.023.797l3 3.164-3 3.187c-.211.235-.211.586.023.797.235.211.586.211.797-.023l3.375-3.563a.665.665 0 00.164-.398c0-.117-.07-.258-.164-.375L1.086.562z"
  }));
}