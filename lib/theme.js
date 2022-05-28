import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#9672fb",
  darkPurple: "#48466D",
  softRed: "#FF8C8C",
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
};

const theme = extendTheme({ colors, fonts });
export default theme;
