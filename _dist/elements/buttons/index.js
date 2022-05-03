"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWarning = exports.ButtonSuccess = exports.ButtonSecondary = exports.ButtonInfo = exports.ButtonDanger = exports.Button = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonBase = _styledComponents["default"].button(function (_ref) {
  var isSecondary = _ref.isSecondary,
      isInfo = _ref.isInfo,
      isSuccess = _ref.isSuccess,
      variant = _ref.variant,
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
    "borderRadius": "0.125rem",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      font-family: 'Inter';\n      align-items: center;\n      justify-content: center;\n      user-select: none;\n      cursor: pointer;\n      .icon-before * {\n        margin-right: 10px;\n        fill: ", ";\n      }\n      .icon-after * {\n        margin-left: 10px;\n        fill: ", ";\n      }\n    "])), iconColor ? iconColor : 'auto', iconColor ? iconColor : 'auto'), isUppercase && [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        text-transform: uppercase;\n      "])))], isSmall && [{
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

var Button = (0, _styledComponents["default"])(ButtonBase)(function (_ref2) {
  _objectDestructuringEmpty(_ref2);

  return [{
    "color": "var(--text-tertiary)",
    ".dark &": {
      "color": "var(--text-secondary)"
    }
  }, {
    "backgroundColor": "var(--bg-tertiary)",
    ":hover": {
      "backgroundColor": "var(--bg-quaternary)"
    },
    ":active": {
      "backgroundColor": "var(--bg-quintenary)"
    }
  }, {
    "borderColor": "var(--border-primary)",
    ":hover": {
      "borderColor": "var(--border-tertiary)"
    },
    ":active": {
      "borderColor": "var(--border-quaternary)"
    }
  }];
});
exports.Button = Button;
var ButtonSecondary = (0, _styledComponents["default"])(ButtonBase)(function (_ref3) {
  _objectDestructuringEmpty(_ref3);

  return [{
    "color": "var(--text-tertiary)",
    ".dark &": {
      "color": "var(--text-secondary)"
    }
  }, {
    "backgroundColor": "rgba(0, 0, 0, 0)",
    ":hover": {
      "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    ":active": {
      "backgroundColor": "var(--bg-tertiary)"
    }
  }, {
    "borderColor": "var(--border-secondary)",
    ":hover": {
      "borderColor": "var(--border-quaternary)"
    },
    ":active": {
      "borderColor": "var(--border-quaternary)"
    }
  }];
});
exports.ButtonSecondary = ButtonSecondary;
var ButtonSuccess = (0, _styledComponents["default"])(ButtonBase)(function (_ref4) {
  _objectDestructuringEmpty(_ref4);

  return [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(0, 194, 206, var(--tw-border-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(0, 194, 206, var(--tw-border-opacity))"
    },
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(0, 194, 206, var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0, 194, 206, var(--tw-bg-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(0, 177, 187, var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(0, 138, 146, var(--tw-bg-opacity))"
    }
  }];
});
exports.ButtonSuccess = ButtonSuccess;
var ButtonInfo = (0, _styledComponents["default"])(ButtonBase)(function (_ref5) {
  _objectDestructuringEmpty(_ref5);

  return [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(49, 141, 255, var(--tw-border-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(49, 141, 255, var(--tw-border-opacity))"
    },
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(49, 141, 255, var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(49, 141, 255, var(--tw-bg-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(45, 128, 232, var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(35, 100, 181, var(--tw-bg-opacity))"
    }
  }];
});
exports.ButtonInfo = ButtonInfo;
var ButtonWarning = (0, _styledComponents["default"])(ButtonBase)(function (_ref6) {
  _objectDestructuringEmpty(_ref6);

  return [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(240, 135, 39, var(--tw-border-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(240, 135, 39, var(--tw-border-opacity))"
    },
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(240, 135, 39, var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(240, 135, 39, var(--tw-bg-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(218, 123, 35, var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(170, 96, 28, var(--tw-bg-opacity))"
    }
  }];
});
exports.ButtonWarning = ButtonWarning;
var ButtonDanger = (0, _styledComponents["default"])(ButtonBase)(function (_ref7) {
  _objectDestructuringEmpty(_ref7);

  return [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(235, 87, 87, var(--tw-border-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(235, 87, 87, var(--tw-border-opacity))"
    },
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(235, 87, 87, var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(235, 87, 87, var(--tw-bg-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(214, 79, 79, var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(167, 62, 62, var(--tw-bg-opacity))"
    }
  }];
});
exports.ButtonDanger = ButtonDanger;