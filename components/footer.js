import { Box, Center, Container } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer">
      <Container pb={7}>
        <Center fontSize="sm" color="#696969">
          © 2022 Naffah Abdulla Rasheed.
        </Center>
        <Center fontSize="sm" color="#696969">
          Built with Next.js
        </Center>
      </Container>
    </Box>
  );
}
