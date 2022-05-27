import { Box, Center, Container, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer">
      <Container pb={7}>
        <Center fontSize="sm" color="#5b6988">
          © 2022 Naffah Abdulla Rasheed.
        </Center>
        <Center fontSize="sm" color="#5b6988">
          Built with{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            ml={1}
          >
            <Text as="u">Next.js</Text>
          </Link>
        </Center>
      </Container>
    </Box>
  );
}
