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
      isLarge = _ref.isLarge,
      isExtraLarge = _ref.isExtraLarge,
      isDisabled = _ref.isDisabled,
      isUppercase = _ref.isUppercase,
      isGhost = _ref.isGhost,
      iconColor = _ref.iconColor;
  return [{
    "display": "flex"
  }, {
    "color": "var(--text-tertiary)",
    "fontSize": "14px",
    "fontWeight": "500"
  }, {
    "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms"
  }, // tw`focus:border-blue`,
  {
    "borderWidth": "2px",
    "borderColor": "var(--border-primary)",
    ":hover": {
      "borderColor": "var(--border-tertiary)"
    },
    ":active": {
      "borderColor": "var(--border-quaternary)"
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
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "5px",
    "paddingBottom": "5px",
    "borderRadius": "4px",
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
  }], isLarge && [{
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.375rem",
    "paddingBottom": "0.375rem",
    "fontSize": "16px"
  }], // isLarge && [tw`px-4 py-1.5 text-lg lg:text-xl lg:px-14 lg:py-3`],
  // isExtraLarge && [tw`px-14 py-4 text-xl lg:text-2xl lg:px-16 lg:py-5`],
  // hover:bg-quaternary active:bg-grey-dark-100
  isSecondary && [{
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
    }
  }], isSuccess && [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
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
  }], isInfo && [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
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
  }], isWarning && [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
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
  }], isDanger && [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
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
  }], isDisabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});

exports.Button = Button;