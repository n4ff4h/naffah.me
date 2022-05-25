import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

import "@fontsource/open-sans/500.css";
import "@fontsource/inter/800.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
