"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Underline = exports.Red = exports.PrimaryColor = exports.PTiny = exports.PSmall = exports.PNano = exports.P = exports.Orange = exports.LabelTiny = exports.LabelSmall = exports.LabelNano = exports.Label = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Green = exports.Bold = exports.Body = exports.Blue = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = require("../../constants/colors");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var sharedTransforms = function sharedTransforms(props) {
  return [{
    "color": "var(--text-primary)"
  }, {
    "margin": "0px",
    "fontWeight": "400"
  }, props.isSmall && {
    "fontSize": "0.8125rem"
  }, props.isUnderline && {
    "textDecoration": "underline"
  }, props.isUppercase && {
    "textTransform": "uppercase"
  }, props.isItalic && {
    "fontStyle": "italic"
  }, props.isLight && {
    "fontWeight": "300"
  }, props.isMedium && {
    "fontWeight": "500"
  }, props.isBold && {
    "fontWeight": "700"
  }, props.isExtraBold && {
    "fontWeight": "800"
  }, props.isHeavy && {
    "fontWeight": "900"
  }, props.isPulsing && {
    "animation": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
  }, props.isCentered && {
    "textAlign": "center"
  }, props.noSelect && {
    "userSelect": "none"
  }, props.isWhite && {
    "color": "rgba(255, 255, 255, 1) !important"
  }, props.isBrandColor && {
    "color": "rgba(0, 194, 206, 1) !important"
  }, props.isGreen && {
    "color": "rgba(0, 194, 206, 1) !important"
  }, props.isRed && {
    "color": "rgba(235, 87, 87, 1) !important"
  }, props.isBlue && {
    "color": "rgba(49, 141, 255, 1) !important"
  }, props.isOrange && {
    "color": "rgba(240, 135, 39, 1) !important"
  }, props.isYellow && {
    "color": "rgba(252, 219, 23, 1) !important"
  }, props.leadingNone && (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      line-height: 100% !important;\n    "]))), props.isLabel && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      user-select: none;\n      font-family: Inter !important;\n      line-height: 100% !important;\n    "]))), (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    a {\n      text-decoration: underline;\n    }\n  "])))];
};

var PNano = _styledComponents["default"].p({}, function (props) {
  return [{
    "fontSize": "11px"
  }];
}, sharedTransforms);

exports.PNano = PNano;

var PTiny = _styledComponents["default"].p({}, function (props) {
  return [{
    "fontSize": "0.75rem"
  }];
}, sharedTransforms);

exports.PTiny = PTiny;

var PSmall = _styledComponents["default"].p({}, function (props) {
  return [{
    "fontSize": "0.8125rem"
  }];
}, sharedTransforms);

exports.PSmall = PSmall;

var P = _styledComponents["default"].p({}, function (props) {
  return [{
    "fontSize": "0.9375rem",
    "@media (min-width: 976px)": {
      "fontSize": "1.125rem"
    }
  }];
}, sharedTransforms);

exports.P = P;

var Body = _styledComponents["default"].p({}, function (props) {
  return [{
    "paddingBottom": "0.25rem",
    "fontSize": "1.125rem",
    "@media (min-width: 768px)": {
      "paddingBottom": "2rem",
      "fontSize": "1.25rem"
    }
  }];
}, sharedTransforms);

exports.Body = Body;

var H6 = _styledComponents["default"].h6({}, function (props) {
  return [{
    "fontSize": "1.125rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.25rem"
    },
    "@media (min-width: 976px)": {
      "fontSize": "1.5rem"
    }
  }];
}, sharedTransforms);

exports.H6 = H6;

var H5 = _styledComponents["default"].h5({}, function (props) {
  return [{
    "fontSize": "1.25rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.5rem"
    },
    "@media (min-width: 976px)": {
      "fontSize": "1.875rem"
    }
  }, {
    "letterSpacing": "0em"
  }];
}, sharedTransforms);

exports.H5 = H5;

var H4 = _styledComponents["default"].h4({}, function (props) {
  return [{
    "fontSize": "1.5rem",
    "@media (min-width: 768px)": {
      "fontSize": "1.875rem"
    },
    "@media (min-width: 976px)": {
      "fontSize": "2.25rem"
    }
  }, {
    "letterSpacing": "0em"
  }];
}, sharedTransforms);

exports.H4 = H4;

var H3 = _styledComponents["default"].h3({}, function (props) {
  return [{
    "fontSize": "1.875rem",
    "@media (min-width: 768px)": {
      "fontSize": "2.25rem"
    },
    "@media (min-width: 976px)": {
      "fontSize": "3rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms);

exports.H3 = H3;

var H2 = _styledComponents["default"].h2({}, function (props) {
  return [{
    "fontSize": "2.25rem",
    "@media (min-width: 768px)": {
      "fontSize": "3rem"
    },
    "@media (min-width: 976px)": {
      "fontSize": "3.75rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms);

exports.H2 = H2;

var H1 = _styledComponents["default"].h1({}, function (props) {
  return [{
    "fontSize": "3rem",
    "@media (min-width: 768px)": {
      "fontSize": "3.75rem"
    },
    "@media (min-width: 976px)": {
      "fontSize": "4.5rem"
    }
  }, {
    "letterSpacing": "-0.025em"
  }];
}, sharedTransforms); // helpers


exports.H1 = H1;

var PrimaryColor = _styledComponents["default"].span({
  color: _colors.green
});

exports.PrimaryColor = PrimaryColor;

var Bold = _styledComponents["default"].span({
  fontWeight: 'bold'
});

exports.Bold = Bold;

var Underline = _styledComponents["default"].span({
  textDecoration: 'underline'
});

exports.Underline = Underline;

var Red = _styledComponents["default"].span({
  color: _colors.red
});

exports.Red = Red;

var Blue = _styledComponents["default"].span({
  color: _colors.blue
});

exports.Blue = Blue;

var Green = _styledComponents["default"].span({
  color: _colors.green
});

exports.Green = Green;

var Orange = _styledComponents["default"].span({
  color: _colors.orange
}); // forms / dashboards


exports.Orange = Orange;
var FieldLabelNano = (0, _styledComponents["default"])(PNano)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabelTiny = (0, _styledComponents["default"])(PTiny)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabelSmall = (0, _styledComponents["default"])(PSmall)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var FieldLabel = (0, _styledComponents["default"])(P)({
  fontFamily: 'Inter',
  lineHeight: '1 !important'
});
var labelStyles = [{
  "color": "var(--text-tertiary)"
}, {
  "fontWeight": "500"
}, {
  "lineHeight": "1"
}];
var LabelNano = (0, _styledComponents["default"])(FieldLabelNano)({}, function (props) {
  return labelStyles;
});
exports.LabelNano = LabelNano;
var LabelTiny = (0, _styledComponents["default"])(FieldLabelTiny)({}, function (props) {
  return labelStyles;
});
exports.LabelTiny = LabelTiny;
var LabelSmall = (0, _styledComponents["default"])(FieldLabelSmall)({}, function (props) {
  return labelStyles;
});
exports.LabelSmall = LabelSmall;
var Label = (0, _styledComponents["default"])(FieldLabel)({}, function (props) {
  return labelStyles;
});
exports.Label = Label;