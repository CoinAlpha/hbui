"use strict";

var extend = {
  opacity: {
    5: "0.05",
    10: "0.1",
    20: "0.2",
    50: "0.5"
  },
  colors: {
    black: "#000000ff",
    "color-palettes": {
      blue: {
        50: "#eaf4ffff",
        100: "#bfdcffff",
        200: "#a0cbffff",
        300: "#75b3ffff",
        400: "#5aa4ffff",
        500: "#318dffff",
        600: "#2d80e8ff",
        700: "#2364b5ff",
        800: "#1b4e8cff",
        900: "#153b6bff",
        950: "#0d223dff"
      },
      brand: {
        50: "#e6f9faff",
        100: "#b0ecf0ff",
        200: "#8ae3e8ff",
        300: "#54d6deff",
        400: "#33ced8ff",
        500: "#00c2ceff",
        600: "#008a92ff",
        800: "#006b71ff",
        900: "#005157ff"
      },
      green: {
        50: "#e6f9faff",
        100: "#b0ecf0ff",
        200: "#8ae3e8ff",
        300: "#54d6deff",
        400: "#33ced8ff",
        500: "#00c2ceff",
        600: "#00b1bbff",
        700: "#008a92ff",
        800: "#006b71ff",
        900: "#005157ff",
        950: "#02292cff"
      },
      "grey-dark": {
        50: "#989fa4ff",
        100: "#788187ff",
        200: "#484d51ff",
        300: "#3e4347ff",
        400: "#323639ff",
        500: "#282c2fff",
        600: "#1e2224ff",
        700: "#151819ff",
        800: "#070808ff",
        900: "#000000ff"
      },
      "grey-light": {
        50: "#fcfcfcff",
        100: "#fafafaff",
        200: "#f1f3f3ff",
        300: "#e9ebecff",
        400: "#dfe1e2ff",
        500: "#c9cdcfff",
        600: "#aeb4b7ff",
        700: "#939b9fff",
        800: "#868e93ff",
        900: "#767f84ff"
      },
      magenta: {
        50: "#fcedffff",
        100: "#f7c7ffff",
        200: "#f3abffff",
        300: "#ee85ffff",
        400: "#ea6dffff",
        500: "#e549ffff",
        600: "#d042e8ff",
        700: "#a334b5ff",
        800: "#7e288cff",
        900: "#601f6bff"
      },
      orange: {
        50: "#fef3e9ff",
        100: "#fadabcff",
        200: "#f8c89cff",
        300: "#f5af6eff",
        400: "#f39f52ff",
        500: "#f08727ff",
        600: "#da7b23ff",
        700: "#aa601cff",
        800: "#844a15ff",
        900: "#653910ff",
        950: "#37210dff"
      },
      purple: {
        50: "#efe6fdff",
        100: "#ceb0faff",
        200: "#b78af7ff",
        300: "#9654f4ff",
        400: "#8133f1ff",
        500: "#6200eeff",
        600: "#5900d9ff",
        700: "#4600a9ff",
        800: "#360083ff",
        900: "#290064ff"
      },
      red: {
        50: "#fdeeeeff",
        100: "#f9cbcbff",
        200: "#f6b2b2ff",
        300: "#f28e8eff",
        400: "#ef7979ff",
        500: "#eb5757ff",
        600: "#d64f4fff",
        700: "#a73e3eff",
        800: "#813030ff",
        900: "#632525ff",
        950: "#3b1616ff"
      },
      yellow: {
        50: "#fffbe8ff",
        100: "#fef4b7ff",
        200: "#feee94ff",
        300: "#fde764ff",
        400: "#fde245ff",
        500: "#fcdb17ff",
        600: "#e5c715ff",
        700: "#b39b10ff",
        800: "#8b780dff",
        900: "#6a5c0aff"
      }
    },
    dark: {
      "body-bg": "#151819ff",
      "body-border": "#3e4347ff",
      buttons: {
        danger: {
          bg: {
            active: "#d64f4fff",
            enabled: "#eb5757ff",
            hover: "#ef7979ff"
          },
          border: {
            active: "#d64f4fff",
            enabled: "#eb5757ff",
            hover: "#ef7979ff"
          },
          text: {
            active: "#632525ff",
            enabled: "#3b1616ff",
            hover: "#3b1616ff"
          }
        },
        "default": {
          bg: {
            active: "#484d51ff",
            enabled: "#282c2fff",
            hover: "#3e4347ff"
          },
          border: {
            active: "#484d51ff",
            enabled: "#282c2fff",
            hover: "#3e4347ff"
          },
          text: {
            active: "#dfe1e2ff",
            enabled: "#dfe1e2ff",
            hover: "#f1f3f3ff"
          }
        },
        info: {
          bg: {
            active: "#2364b5ff",
            enabled: "#318dffff",
            hover: "#75b3ffff"
          },
          border: {
            active: "#2364b5ff",
            enabled: "#318dffff",
            hover: "#75b3ffff"
          },
          text: {
            active: "#153b6bff",
            enabled: "#0d223dff",
            hover: "#0d223dff"
          }
        },
        secondary: {
          bg: {
            active: "#282c2fff",
            enabled: "#1e2224ff",
            hover: "#1e2224ff"
          },
          border: {
            active: "#aeb4b7ff",
            enabled: "#484d51ff",
            hover: "#989fa4ff"
          },
          text: {
            active: "#dfe1e2ff",
            enabled: "#dfe1e2ff",
            hover: "#f1f3f3ff"
          }
        },
        success: {
          bg: {
            active: "#00b1bbff",
            enabled: "#00c2ceff",
            hover: "#54d6deff"
          },
          border: {
            active: "#00b1bbff",
            enabled: "#00c2ceff",
            hover: "#54d6deff"
          },
          text: {
            active: "#005157ff",
            enabled: "#02292cff",
            hover: "#02292cff"
          }
        },
        warning: {
          bg: {
            active: "#aa601cff",
            enabled: "#f08727ff",
            hover: "#f5af6eff"
          },
          border: {
            active: "#aa601cff",
            enabled: "#f08727ff",
            hover: "#f5af6eff"
          },
          text: {
            active: "#653910ff",
            enabled: "#37210dff",
            hover: "#37210dff"
          }
        }
      },
      checkboxes: {
        selected: {
          bg: {
            active: "#00b1bbff",
            enabled: "#00c2ceff",
            hover: "#54d6deff"
          },
          border: {
            active: "#00b1bbff",
            enabled: "#00c2ceff",
            hover: "#54d6deff"
          },
          svg: "#02292cff",
          text: {
            active: "#dfe1e2ff",
            enabled: "#dfe1e2ff",
            hover: "#f1f3f3ff"
          }
        },
        unselected: {
          bg: {
            active: "#155257ff",
            enabled: "#3e4347ff",
            hover: "#155257ff"
          },
          border: {
            active: "#00c2ceff",
            enabled: "#60676cff",
            hover: "#54d6deff"
          },
          svg: "#989fa4ff",
          text: {
            active: "#dfe1e2ff",
            enabled: "#dfe1e2ff",
            over: "#f1f3f3ff"
          }
        }
      },
      input: {
        bg: {
          enabled: "#323639ff",
          focus: "#1e2224ff",
          hover: "#31373bff"
        },
        border: {
          danger: "#eb5757ff",
          focus: "#bac6ceff",
          hover: "#57636bff",
          info: "#318dffff",
          success: "#00c2ceff",
          warning: "#f08727ff"
        },
        text: {
          danger: "#eb5757ff",
          enabled: "#939b9fff",
          "field-label": "#939b9fff",
          focus: "#ffffffff",
          hover: "#dfe1e2ff",
          info: "#318dffff",
          prefix: "#868e93ff",
          success: "#00c2ceff",
          warning: "#f08727ff"
        }
      },
      navbutton: {
        bg: {
          active: "#323639ff",
          enabled: "#151819ff",
          hover: "#282c2fff",
          press: "#323639ff"
        },
        text: {
          active: "#fcfcfcff",
          enabled: "#aeb4b7ff",
          hover: "#fcfcfcff",
          press: "#aeb4b7ff"
        }
      },
      "notification-status": {
        bg: {
          danger: "#5b3233ff",
          "default": "#323639ff",
          info: "#244266ff",
          success: "#155257ff",
          warning: "#5d4025ff"
        },
        text: {
          danger: "#f6b2b2ff",
          "default": "#c9cdcfff",
          info: "#a0cbffff",
          success: "#8ae3e8ff",
          warning: "#f8c89cff"
        }
      },
      "radio-group": {
        bg: {
          active: "#00c2ceff",
          enabled: "#282c2fff",
          hover: "#1e2224ff",
          press: "#151819ff"
        },
        text: {
          active: "#1e2224ff",
          enabled: "#dfe1e2ff",
          hover: "#fcfcfcff",
          press: "#aeb4b7ff"
        }
      },
      "text-link": {
        text: {
          active: "#2d80e8ff",
          enabled: "#318dffff",
          hover: "#75b3ffff",
          press: "#2d80e8ff",
          visited: "#9654f4ff"
        }
      },
      "text-primary": "#ffffffff",
      "text-secondary": "#aeb4b7ff",
      "text-tertiary": "#767f84ff",
      "window-bg": "#1e2224ff",
      "window-border": "#323639ff"
    },
    light: {
      "body-bg": "#fafafaff",
      "body-border": "#e9ebecff",
      buttons: {
        danger: {
          bg: {
            active: "#a73e3eff",
            enabled: "#eb5757ff",
            hover: "#d64f4fff"
          },
          border: {
            active: "#a73e3eff",
            enabled: "#eb5757ff",
            hover: "#d64f4fff"
          },
          text: {
            active: "#fdeeeeff",
            enabled: "#ffffffff",
            hover: "#ffffffff"
          }
        },
        "default": {
          bg: {
            active: "#c9cdcfff",
            enabled: "#f1f3f3ff",
            hover: "#dfe1e2ff"
          },
          border: {
            active: "#c9cdcfff",
            enabled: "#f1f3f3ff",
            hover: "#dfe1e2ff"
          },
          text: {
            active: "#323639ff",
            enabled: "#323639ff",
            hover: "#1e2224ff"
          }
        },
        info: {
          bg: {
            active: "#2364b5ff",
            enabled: "#318dffff",
            hover: "#2d80e8ff"
          },
          border: {
            active: "#2364b5ff",
            enabled: "#318dffff",
            hover: "#2d80e8ff"
          },
          text: {
            active: "#eaf4ffff",
            enabled: "#ffffffff",
            hover: "#ffffffff"
          }
        },
        secondary: {
          bg: {
            active: "#fafafaff",
            enabled: "#ffffffff",
            hover: "#ffffffff"
          },
          border: {
            active: "#aeb4b7ff",
            enabled: "#dfe1e2ff",
            hover: "#c9cdcfff"
          },
          text: {
            active: "#323639ff",
            enabled: "#323639ff",
            hover: "#1e2224ff"
          }
        },
        success: {
          bg: {
            active: "#008a92ff",
            enabled: "#00c2ceff",
            hover: "#00b1bbff"
          },
          border: {
            active: "#008a92ff",
            enabled: "#00c2ceff",
            hover: "#00b1bbff"
          },
          text: {
            active: "#e6f9faff",
            enabled: "#ffffffff",
            hover: "#ffffffff"
          }
        },
        warning: {
          bg: {
            active: "#aa601cff",
            enabled: "#f08727ff",
            hover: "#da7b23ff"
          },
          border: {
            active: "#aa601cff",
            enabled: "#f08727ff",
            hover: "#da7b23ff"
          },
          text: {
            active: "#fef3e9ff",
            enabled: "#ffffffff",
            hover: "#ffffffff"
          }
        }
      },
      checkboxes: {
        selected: {
          bg: {
            active: "#008a92ff",
            enabled: "#00c2ceff",
            hover: "#00b1bbff"
          },
          border: {
            active: "#008a92ff",
            enabled: "#00c2ceff",
            hover: "#00b1bbff"
          },
          svg: "#ffffffff",
          text: {
            active: "#323639ff",
            enabled: "#323639ff",
            hover: "#1e2224ff"
          }
        },
        unselected: {
          bg: {
            active: "#e6f9faff",
            enabled: "#f1f3f3ff",
            hover: "#e6f9faff"
          },
          border: {
            active: "#00b1bbff",
            enabled: "#dfe1e2ff",
            hover: "#00c2ceff"
          },
          svg: "#aeb4b7ff",
          text: {
            active: "#323639ff",
            enabled: "#323639ff",
            hover: "#1e2224ff"
          }
        }
      },
      inputs: {
        bg: {
          enabled: "#fafafaff",
          focus: "#ffffffff",
          hover: "#fafafaff"
        },
        border: {
          danger: "#eb5757ff",
          focus: "#282c2fff",
          hover: "#c9cdcfff",
          info: "#318dffff",
          success: "#00c2ceff",
          warning: "#f08727ff"
        },
        text: {
          danger: "#eb5757ff",
          enabled: "#788187ff",
          "field-label": "#3e4347ff",
          focus: "#282c2fff",
          hover: "#484d51ff",
          info: "#318dffff",
          prefix: "#989fa4ff",
          success: "#00c2ceff",
          warning: "#f08727ff"
        }
      },
      navbutton: {
        bg: {
          active: "#e9ebecff",
          enabled: "#fafafaff",
          hover: "#f1f3f3ff",
          press: "#e9ebecff"
        },
        text: {
          active: "#151819ff",
          enabled: "#788187ff",
          hover: "#323639ff",
          press: "#788187ff"
        }
      },
      "notification-status": {
        bg: {
          danger: "#fdeeeeff",
          "default": "#f1f3f3ff",
          info: "#eaf4ffff",
          success: "#e6f9faff",
          warning: "#fef3e9ff"
        },
        text: {
          danger: "#eb5757ff",
          "default": "#484d51ff",
          info: "#318dffff",
          success: "#00c2ceff",
          warning: "#f08727ff"
        }
      },
      "radio-group": {
        bg: {
          active: "#00c2ceff",
          enabled: "#fafafaff",
          hover: "#f1f3f3ff",
          press: "#e9ebecff"
        },
        text: {
          active: "#ffffffff",
          enabled: "#484d51ff",
          hover: "#323639ff",
          press: "#788187ff"
        }
      },
      "text-link": {
        text: {
          active: "#2d80e8ff",
          enabled: "#318dffff",
          hover: "#2364b5ff",
          press: "#2d80e8ff",
          visited: "#6200eeff"
        }
      },
      "text-primary": "#151819ff",
      "text-secondary": "#788187ff",
      "text-tertiary": "#989fa4ff",
      "window-bg": "#ffffffff",
      "window-border": "#e9ebecff"
    },
    terminal: "#5fffd7ff",
    white: "#ffffffff"
  },
  borderWidth: {
    dashed: "1px",
    divider: "4px",
    dots: "1px",
    solid: "1px"
  },
  borderColor: {
    dashed: "#f1f3f3ff",
    divider: "#f1f3f3ff",
    dots: "#f1f3f3ff",
    solid: "#f1f3f3ff"
  },
  spacing: {
    xxs: "4px",
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "48px",
    xl: "64px",
    xxl: "80px",
    xxxl: "120px"
  },
  boxShadow: {
    shadow: "0px 1px 2px -1px #0000001a, 0px 1px 3px #0000001a",
    "shadow-2-xl": "0px 25px 50px -12px #00000040",
    "shadow-inner": "inset 0px 2px 4px #0000000d",
    "shadow-lg": "0px 4px 6px -4px #0000001a, 0px 10px 15px -3px #0000001a",
    "shadow-md": "0px 2px 4px -2px #0000001a, 0px 4px 6px -1px #0000001a",
    "shadow-sm": "0px 1px 2px #0000000d",
    "shadow-xl": "0px 8px 10px -6px #0000001a, 0px 20px 25px -5px #0000001a"
  },
  fontSize: {
    "text-2-xxs": "0.625rem",
    "text-xxs": "0.6875rem",
    "text-xs": "0.75rem",
    "text-sm": "0.8125rem",
    "text-base": "0.9375rem",
    "text-lg": "1.125rem",
    "text-xl": "1.25rem",
    "text-2-xl": "1.5rem",
    "text-3-xl": "1.875rem",
    "text-4-xl": "2.25rem",
    "text-5-xl": "3rem",
    "text-6-xl": "3.75rem",
    "text-7-xl": "4.5rem",
    "text-8-xl": "6rem",
    "text-9-xl": "8rem"
  },
  lineHeight: {
    "text-2-xxs": "16px",
    "text-xs": "16px",
    "text-xxs": "16px",
    "text-sm": "20px",
    "text-base": "24px",
    "text-lg": "28px",
    "text-xl": "28px",
    "text-2-xl": "32px",
    "text-3-xl": "36px",
    "text-4-xl": "40px",
    "text-5-xl": "48px",
    "text-6-xl": "60px",
    "text-7-xl": "72px",
    "text-8-xl": "96px",
    "text-9-xl": "128px"
  },
  fontFamily: {
    "text-2-xl": ["Satoshi-Regular"],
    "text-2-xxs": ["Inter-Regular"],
    "text-3-xl": ["Satoshi-Regular"],
    "text-4-xl": ["Satoshi-Regular"],
    "text-5-xl": ["Satoshi-Regular"],
    "text-6-xl": ["Satoshi-Regular"],
    "text-7-xl": ["Satoshi-Regular"],
    "text-8-xl": ["Satoshi-Regular"],
    "text-9-xl": ["Satoshi-Regular"],
    "text-base": ["Inter-Regular"],
    "text-lg": ["Inter-Regular"],
    "text-sm": ["Inter-Regular"],
    "text-xl": ["Satoshi-Regular"],
    "text-xs": ["Inter-Regular"],
    "text-xxs": ["Inter-Regular"]
  },
  fontWeight: {
    "text-2-xl": 400,
    "text-2-xxs": 400,
    "text-3-xl": 400,
    "text-4-xl": 400,
    "text-5-xl": 400,
    "text-6-xl": 400,
    "text-7-xl": 400,
    "text-8-xl": 400,
    "text-9-xl": 400,
    "text-base": 400,
    "text-lg": 400,
    "text-sm": 400,
    "text-xl": 400,
    "text-xs": 400,
    "text-xxs": 400
  }
};
module.exports = extend;
