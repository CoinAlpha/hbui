"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(function (_ref) {
  var isSecondary = _ref.isSecondary,
      isInfo = _ref.isInfo,
      isSuccess = _ref.isSuccess,
      isWarning = _ref.isWarning,
      isDanger = _ref.isDanger,
      isSmall = _ref.isSmall,
      isTiny = _ref.isTiny,
      isLarge = _ref.isLarge,
      isExtraLarge = _ref.isExtraLarge,
      isDisabled = _ref.isDisabled,
      isUppercase = _ref.isUppercase,
      isGhost = _ref.isGhost,
      iconColor = _ref.iconColor;
  return [{
    "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms",
    "display": "flex"
  }, {
    "fontWeight": "500 !important",
    "fontSize": "14px"
  }, {
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "5px",
    "paddingBottom": "5px",
    "borderWidth": "1px",
    "borderRadius": "0.125rem",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      font-family: 'Inter';\n      align-items: center;\n      justify-content: center;\n      user-select: none;\n      cursor: pointer;\n      .icon-before {\n        margin-right: 10px;\n        position: relative;\n      }\n      .icon-after {\n        margin-left: 10px;\n        position: relative;\n      }\n      .icon-before * {\n        fill: ", ";\n      }\n      .icon-after * {\n        fill: ", ";\n      }\n    "])), iconColor ? iconColor : 'auto', iconColor ? iconColor : 'auto'), isUppercase && [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        text-transform: uppercase;\n      "])))], // variantStyle(variant, isInfo, isSuccess, isWarning, isDanger),
  defaultStyle, isSecondary && secondaryStyle, isSuccess && successStyle, isInfo && infoStyle, isWarning && warningStyle, isDanger && dangerStyle, isSmall && [{
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "2px",
    "paddingBottom": "1.5px",
    "fontSize": "13px"
  }], isTiny && [{
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem",
    "paddingTop": "0px",
    "paddingBottom": "0px",
    "fontSize": "11px"
  }], isLarge && [{
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.375rem",
    "paddingBottom": "0.375rem",
    "fontSize": "16px"
  }], isDisabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});

exports.Button = Button;
var defaultStyle = [{
  "color": "var(--text-button)",
  ":hover": {
    "color": "var(--text-button-hover)"
  }
}, {
  "backgroundColor": "var(--bg-button)",
  ":hover": {
    "backgroundColor": "var(--bg-button-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-button-active)"
  }
}, {
  "borderColor": "var(--border-button)",
  ":hover": {
    "borderColor": "var(--border-button-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-active)"
  }
}];
var secondaryStyle = [{
  "color": "var(--text-button-secondary)",
  ":hover": {
    "color": "var(--text-button-secondary-hover)"
  }
}, {
  "backgroundColor": "var(--bg-button-secondary)",
  ":hover": {
    "backgroundColor": "var(--bg-button-secondary-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-button-secondary-active)"
  }
}, {
  "borderColor": "var(--border-button-secondary)",
  ":hover": {
    "borderColor": "var(--border-button-secondary-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-secondary-active)"
  }
}];
var successStyle = [{
  "color": "var(--text-button-success)",
  ":hover": {
    "color": "var(--text-button-success-hover)"
  }
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(0, 194, 206, var(--tw-bg-opacity))",
  ":hover": {
    "backgroundColor": "var(--bg-success-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-success-active)"
  }
}, {
  "borderColor": "var(--border-button-success)",
  ":hover": {
    "borderColor": "var(--border-button-success-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-success-active)"
  }
}];
var infoStyle = [{
  "color": "var(--text-button-info)",
  ":hover": {
    "color": "var(--text-button-info-hover)"
  }
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(49, 141, 255, var(--tw-bg-opacity))",
  ":hover": {
    "backgroundColor": "var(--bg-info-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-info-active)"
  }
}, {
  "borderColor": "var(--border-button-info)",
  ":hover": {
    "borderColor": "var(--border-button-info-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-info-active)"
  }
}];
var warningStyle = [{
  "color": "var(--text-button-warning)",
  ":hover": {
    "color": "var(--text-button-warning-hover)"
  }
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(240, 135, 39, var(--tw-bg-opacity))",
  ":hover": {
    "backgroundColor": "var(--bg-warning-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-warning-active)"
  }
}, {
  "borderColor": "var(--border-button-warning)",
  ":hover": {
    "borderColor": "var(--border-button-warning-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-warning-active)"
  }
}];
var dangerStyle = [{
  "color": "var(--text-button-danger)",
  ":hover": {
    "color": "var(--text-button-danger-hover)"
  }
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(235, 87, 87, var(--tw-bg-opacity))",
  ":hover": {
    "backgroundColor": "var(--bg-danger-hover)"
  },
  ":active": {
    "backgroundColor": "var(--bg-danger-active)"
  }
}, {
  "borderColor": "var(--border-button-danger)",
  ":hover": {
    "borderColor": "var(--border-button-danger-hover)"
  },
  ":active": {
    "borderColor": "var(--border-button-danger-active)"
  }
}];