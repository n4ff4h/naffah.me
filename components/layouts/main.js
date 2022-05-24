import { Box, Container } from "@chakra-ui/react";
import Meta from "../meta";
import Navbar from "../navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Meta />
      <Container as="main" maxW="container.md" minH="calc(100vh)">
        <Navbar />
        <Box>{children}</Box>
      </Container>
    </>
  );
}
