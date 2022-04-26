"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Window = exports.Separator = exports.Section = exports.SBLRootSidebar = exports.SBLRootContent = exports.SBLRoot = exports.PageRoot = exports.PaddingBox = exports.ItemsRow = exports.ContainerRow = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _colors = require("../../constants/colors");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = _styledComponents["default"].div(function () {
  return [(0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    // outline: 1px solid red;\n    display: flex;\n    flex-direction: column;\n  "]))), {
    "width": "100%"
  }];
});

exports.Section = Section;

var Container = _styledComponents["default"].div(function () {
  return [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    // outline: 1px solid blue;\n    align-self: center;\n  "]))), {
    "width": "calc(100% - 40px)",
    "@media (min-width: 768px)": {
      "width": "91.666667%"
    },
    "@media (min-width: 1440px)": {
      "width": "83.333333%"
    },
    "@media (min-width: 1536px)": {
      "width": "75%"
    }
  }];
});

exports.Container = Container;
var ContainerRow = (0, _styledComponents["default"])(Container)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.ContainerRow = ContainerRow;

var PaddingBox = _styledComponents["default"].div(function () {
  return [{
    "paddingTop": "1rem",
    "paddingBottom": "1rem",
    "@media (min-width: 768px)": {
      "paddingTop": "2rem",
      "paddingBottom": "2rem"
    },
    "@media (min-width: 976px)": {
      "paddingTop": "3rem",
      "paddingBottom": "3rem"
    }
  }];
});

exports.PaddingBox = PaddingBox;
var PageRoot = (0, _styledComponents["default"])(Section)(function () {
  return [(0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    min-height: 100vh;\n  "])))];
}); // sidebar layout

exports.PageRoot = PageRoot;

var SBLRoot = _styledComponents["default"].div(function () {
  return [(0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    height: 100vh;\n    overflow: hidden;\n  "])))];
});

exports.SBLRoot = SBLRoot;

var SBLRootContent = _styledComponents["default"].div(function () {
  return [(0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    height: 100vh;\n    overflow-y: scroll;\n  "]))), {
    "backgroundColor": "var(--bg-secondary)",
    "width": "100%"
  }];
});

exports.SBLRootContent = SBLRootContent;

var SBLRootSidebar = _styledComponents["default"].div(function () {
  return [{
    "backgroundColor": "var(--bg-primary)",
    "width": "0",
    "@media (min-width: 768px)": {
      "width": "270px"
    }
  }, (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    height: 100vh;\n  "])))];
});

exports.SBLRootSidebar = SBLRootSidebar;

var ItemsRow = _styledComponents["default"].div(function () {
  return [{
    "display": "flex",
    "flexWrap": "wrap"
  }, (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    > * {\n      ", "\n    }\n    > *:last-child {\n      ", "\n    }\n  "])), {
    "marginRight": "0.5rem"
  }, {
    "marginRight": "0px"
  })];
});

exports.ItemsRow = ItemsRow;

var Separator = _styledComponents["default"].div(function (props) {
  return [(0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    height: 1px;\n    width: 100%;\n    opacity: 0.5;\n    margin-top: 20px;\n  "]))), {
    "backgroundColor": "var(--bg-quaternary)",
    ".dark &": {
      "backgroundColor": "var(--bg-quaternary)"
    }
  }];
});

exports.Separator = Separator;

var Window = _styledComponents["default"].div(function (_ref) {
  _objectDestructuringEmpty(_ref);

  return [{
    "backgroundColor": "var(--bg-primary)",
    "paddingTop": "24px",
    "paddingBottom": "24px",
    "paddingLeft": "32px",
    "paddingRight": "32px",
    "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    "borderRadius": "4px"
  }, (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin: 0 auto;\n    max-width: 696px;\n  "])))];
});

exports.Window = Window;