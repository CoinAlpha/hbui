"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("@emotion/react");

var _tokens = _interopRequireDefault(require("../tokens"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var darkModeConfig = (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .light {\n    color-scheme: light;\n    --bg-primary: ", ";\n    --bg-secondary: ", ";\n    --bg-tertiary: ", ";\n    --bg-quaternary: ", ";\n    --bg-quintenary: ", ";\n\n    --border-primary: ", ";\n    --border-secondary: ", ";\n    --border-tertiary: ", ";\n    --border-quaternary: ", ";\n    --border-quintenary: ", ";\n\n    --text-primary: ", ";\n    --text-secondary: ", ";\n    --text-tertiary: ", ";\n    --text-quaternary: ", ";\n    --text-quintenary: ", ";\n  }\n  .dark {\n    color-scheme: dark;\n    --bg-primary: ", ";\n    --bg-secondary: ", ";\n    --bg-tertiary: ", ";\n    --bg-quaternary: ", ";\n    --bg-quintenary: ", ";\n\n    --border-primary: ", ";\n    --border-secondary: ", ";\n    --border-tertiary: ", ";\n    --border-quaternary: ", ";\n    --border-quintenary: ", ";\n\n    --text-primary: ", ";\n    --text-secondary: ", ";\n    --text-tertiary: ", ";\n    --text-quaternary: ", ";\n    --text-quintenary: ", ";\n  }\n  body {\n    -webkit-tap-highlight-color: ", ";\n    ", "\n  }\n"])), _tokens["default"].colors.light['bg-primary'], _tokens["default"].colors.light['bg-secondary'], _tokens["default"].colors.light['bg-tertiary'], _tokens["default"].colors.light['bg-quaternary'], _tokens["default"].colors.light['bg-quintenary'], _tokens["default"].colors.light['border-primary'], _tokens["default"].colors.light['border-secondary'], _tokens["default"].colors.light['border-tertiary'], _tokens["default"].colors.light['border-quaternary'], _tokens["default"].colors.light['border-quintenary'], _tokens["default"].colors.light['text-primary'], _tokens["default"].colors.light['text-secondary'], _tokens["default"].colors.light['text-tertiary'], _tokens["default"].colors.light['text-quaternary'], _tokens["default"].colors.light['text-quintenary'], _tokens["default"].colors.dark['bg-primary'], _tokens["default"].colors.dark['bg-secondary'], _tokens["default"].colors.dark['bg-tertiary'], _tokens["default"].colors.dark['bg-quaternary'], _tokens["default"].colors.dark['bg-quintenary'], _tokens["default"].colors.dark['border-primary'], _tokens["default"].colors.dark['border-secondary'], _tokens["default"].colors.dark['border-tertiary'], _tokens["default"].colors.dark['border-quaternary'], _tokens["default"].colors.dark['border-quintenary'], _tokens["default"].colors.dark['text-primary'], _tokens["default"].colors.dark['text-secondary'], _tokens["default"].colors.dark['text-tertiary'], _tokens["default"].colors.dark['text-quaternary'], _tokens["default"].colors.dark['text-quintenary'], _tokens["default"].colors.yellow['500'], {
  "WebkitFontSmoothing": "antialiased",
  "MozOsxFontSmoothing": "grayscale"
});
var _default = darkModeConfig;
exports["default"] = _default;