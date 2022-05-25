import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#9672fb",
  darkPurple: "#48466D",
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Open Sans', sans-serif`,
};

const theme = extendTheme({ colors, fonts });
export default theme;
