import { Box, Flex, Link, ScaleFade } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

function NavItem({ children, href }) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <>
      <NextLink href={href} passHref>
        <Link
          px={2}
          pt={1}
          mx={2}
          style={{ textDecoration: "none" }}
          color={active ? "darkPurple" : "#908f94"}
          fontWeight="semibold"
        >
          {children}
          <ScaleFade initialScale={0.9} in={active}>
            <Box
              width="full"
              border="solid 1.5px"
              borderRadius={24}
              borderColor="primary"
            ></Box>
          </ScaleFade>
        </Link>
      </NextLink>
    </>
  );
}

export default function Navbar() {
  return (
    <Flex as="nav" py={4} justify="center">
      <Flex>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/works">Works</NavItem>
      </Flex>
    </Flex>
  );
}
