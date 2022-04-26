"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _typography = require("../../elements/typography");

var _HummingbotLogo = _interopRequireDefault(require("../../assets/svgs/logos/HummingbotLogo"));

var _TriangleDown = _interopRequireDefault(require("../../assets/svgs/arrows/TriangleDown"));

var _chip = _interopRequireDefault(require("../chip"));

var _ThemeToggle = _interopRequireDefault(require("../../system/ThemeToggle"));

var _react2 = require("@emotion/react");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var _excluded = ["siteNameA", "siteNameB", "linksLeft", "linksRight", "userData", "showThemeToggle"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NavBar = function NavBar(_ref) {
  var siteNameA = _ref.siteNameA,
      siteNameB = _ref.siteNameB,
      linksLeft = _ref.linksLeft,
      linksRight = _ref.linksRight,
      userData = _ref.userData,
      showThemeToggle = _ref.showThemeToggle,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)(NavBarRoot, null, (0, _react2.jsx)(LeftSide, null, (0, _react2.jsx)(LogoContainer, null, (0, _react2.jsx)(_HummingbotLogo["default"], null), (0, _react2.jsx)(_typography.Body, null, (0, _react2.jsx)(_typography.Bold, null, siteNameA), " ", siteNameB)), (0, _react2.jsx)(LinksRow, null, linksLeft.map(function (link) {
    return (0, _react2.jsx)(_chip["default"], {
      key: link.url,
      to: link.url,
      label: link.label
    });
  }))), (0, _react2.jsx)(RightSide, null, showThemeToggle && (0, _react2.jsx)(_ThemeToggle["default"], null), (0, _react2.jsx)(LinksRow, null, linksRight.map(function (link) {
    return (0, _react2.jsx)(_chip["default"], {
      key: link.url,
      to: link.url,
      label: link.label
    });
  })), (0, _react2.jsx)(Menu, null, userData.profileImage ? (0, _react2.jsx)("img", {
    src: userData.profileImage,
    alt: userData.name
  }) : (0, _react2.jsx)(ProfileIcon, null), (0, _react2.jsx)(_typography.P, null, userData.name), (0, _react2.jsx)(_TriangleDown["default"], null))));
};

var _default = NavBar;
exports["default"] = _default;

var NavBarRoot = _styledComponents["default"].div(function (_ref2) {
  var isUppercase = _ref2.isUppercase,
      isDisabled = _ref2.isDisabled;
  return [{
    "display": "flex",
    "width": "100%",
    "backgroundColor": "var(--bg-primary)"
  }, {
    "justifyContent": "space-between",
    "alignItems": "center"
  }, {
    "position": "relative",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "paddingLeft": "3rem",
    "paddingRight": "1rem"
  }, {
    "borderBottomWidth": "1px",
    "borderColor": "var(--border-secondary)"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .chip {\n      ", ";\n    }\n    .theme-toggle {\n      ", ";\n    }\n  "])), {
    "marginRight": "0.25rem"
  }, {
    "marginRight": "1rem"
  })];
});

var LeftSide = _styledComponents["default"].div(function (_ref3) {
  _objectDestructuringEmpty(_ref3);

  return [{
    "display": "flex"
  }, (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    .logo {\n      top: 7px;\n      left: 10px;\n      ", ";\n    }\n  "])), {
    "position": "absolute"
  })];
});

var LinksRow = _styledComponents["default"].div(function (_ref4) {
  _objectDestructuringEmpty(_ref4);

  return [{
    "display": "none",
    "alignItems": "center",
    "@media (min-width: 976px)": {
      "display": "flex"
    }
  }];
});

var RightSide = _styledComponents["default"].div(function (_ref5) {
  _objectDestructuringEmpty(_ref5);

  return [{
    "display": "flex",
    "alignItems": "center"
  }, (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    img {\n      ", ";\n    }\n    svg {\n      ", ";\n    }\n    p {\n      ", ";\n    }\n  "])), {
    "marginLeft": "1rem",
    "borderRadius": "4px"
  }, {
    "marginLeft": "0.5rem"
  }, {
    "marginLeft": "0.5rem",
    "padding": "0px",
    "fontWeight": "500",
    "fontSize": "1rem",
    "lineHeight": "24px"
  })];
});

var LogoContainer = _styledComponents["default"].div(function (_ref6) {
  _objectDestructuringEmpty(_ref6);

  return [{
    "display": "flex",
    "marginRight": "2rem"
  }, (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    svg {\n      ", ";\n    }\n    p {\n      ", ";\n    }\n  "])), {
    "marginRight": "0.5rem"
  }, {
    "marginLeft": "0.5rem",
    "padding": "0px",
    "userSelect": "none"
  })];
});

var Menu = _styledComponents["default"].div(function (_ref7) {
  _objectDestructuringEmpty(_ref7);

  return [{
    "display": "flex",
    "cursor": "pointer",
    "height": "32px",
    "alignItems": "center"
  }];
});

function ProfileIcon() {
  return (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "21",
    css: {
      "fill": "currentColor",
      "color": "var(--text-secondary)"
    },
    viewBox: "0 0 22 21"
  }, (0, _react2.jsx)("path", {
    d: "M18.188.313H3.813A2.866 2.866 0 00.937 3.187v14.376a2.838 2.838 0 002.875 2.875h14.376a2.866 2.866 0 002.875-2.875V3.188A2.895 2.895 0 0018.188.312zM11 4.625c1.752 0 3.234 1.482 3.234 3.234 0 1.797-1.482 3.235-3.234 3.235a3.221 3.221 0 01-3.234-3.235c0-1.752 1.437-3.234 3.234-3.234zM4.576 17.563c.36-2.426 2.426-4.313 4.987-4.313h2.874c2.516 0 4.583 1.887 4.942 4.313H4.576z"
  }));
}