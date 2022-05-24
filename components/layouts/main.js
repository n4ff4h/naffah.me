import { Box, Container } from "@chakra-ui/react";
import Meta from "../meta";

export default function MainLayout({ children }) {
  return (
    <>
      <Meta />
      <Container as="main" maxW="container.md" minH="calc(100vh)">
        <Box>{children}</Box>
      </Container>
    </>
  );
}
