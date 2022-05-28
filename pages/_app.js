import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import { motion, AnimatePresence } from "framer-motion";

// font source
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import MainLayout from "../components/layouts/main";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Box
          as={motion.div}
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "relative" }}
          my="auto"
        >
          <Component {...pageProps} />
        </Box>
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
