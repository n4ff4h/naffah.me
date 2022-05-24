import { Box, Container } from "@chakra-ui/react";

export default function MainLayout({ children }) {
  return (
    <>
      <Container as="main" maxW="md" minH="calc(100vh)">
        <Box>{children}</Box>
      </Container>
    </>
  );
}
