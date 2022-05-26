import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

// font source
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
