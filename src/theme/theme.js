import { rem } from "polished";

export const theme = {
  boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.2)",
  colours: {
    base: "#444444",
    baseMid: "#71747E",
    baseLight: "#D7DAE0",
    baseExtraLight: "#F5F6FA",

    primary: "#000000",
    hover: "#444444",
    pressed: "#71747E",

    foreground: "#FFFFFF"
  },

  opacity: {
    op50: 0.5,
    op70: 0.7,
    op80: 0.8,
    op90: 0.9,
    op95: 0.95
  },

  typography: {
    fontSizes: {
      size14: "14px",
      size16: "16px"
    },

    lineHeight: "1.6",
    lineHeightSmall: "1.4",
    fontWeightBold: "600"
  },

  display: {
    inputHeight: "48px",
    borderRadius: "6px",
    modalPadding: "3rem"
  },

  spacers: {
    size4: rem("4px"),
    size8: rem("8px"),
    size16: rem("16px"),
    size32: rem("32px"),
    size40: rem("40px"),
    size48: rem("48px"),
    size64: rem("64px"),
    size80: rem("80px")
  },

  wrappers: {
    extraLarge: "1280px",
    medium: "480px"
  }
};
