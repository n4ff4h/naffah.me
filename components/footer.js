import { Box, Center, Container } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer">
      <Container pb={7}>
        <Center fontSize="sm" color="#5b6988">
          © 2022 Naffah Abdulla Rasheed.
        </Center>
        <Center fontSize="sm" color="#5b6988">
          Built with Next.js
        </Center>
      </Container>
    </Box>
  );
}
