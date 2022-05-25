import { Container, Flex } from "@chakra-ui/react";
import Footer from "../footer";
import Meta from "../meta";
import Navbar from "../navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Meta />
      <Container as="main" maxW="container.md">
        <Flex flexDirection="column" minH="100vh">
          <Navbar />
          {children}
          <Footer />
        </Flex>
      </Container>
    </>
  );
}
