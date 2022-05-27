"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextInput = _styledComponents["default"].input(function (_ref) {
  var isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      isWarning = _ref.isWarning;
  return [{
    "display": "flex",
    "width": "100%"
  }, {
    "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms"
  }, {
    "paddingLeft": "0.625rem",
    "paddingRight": "0.625rem",
    "paddingTop": "0.25rem",
    "paddingBottom": "0.25rem",
    "borderRadius": "4px",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, {
    "fontWeight": "400"
  }, {
    "backgroundColor": "var(--bg-input)",
    "color": "var(--text-input)",
    "borderColor": "var(--border-input)"
  }, {
    "borderWidth": "2px",
    ":focus": {
      "borderColor": "rgba(49, 141, 255, 1)"
    }
  }, isValid && [{
    "borderColor": "rgba(0, 194, 206, 1)",
    ":focus": {
      "borderColor": "rgba(0, 194, 206, 1)"
    }
  }], isInvalid && [{
    "borderColor": "rgba(235, 87, 87, 1)",
    ":focus": {
      "borderColor": "rgba(235, 87, 87, 1)"
    }
  }], isWarning && [{
    "borderColor": "rgba(240, 135, 39, 1)",
    ":focus": {
      "borderColor": "rgba(240, 135, 39, 1)"
    }
  }]];
});

exports.TextInput = TextInput;