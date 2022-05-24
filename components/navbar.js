import { Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

function NavItem({ children, href }) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <Link
        px={3}
        py={2}
        mx={2}
        style={{ textDecoration: "none" }}
        borderBottom={active ? "2px solid black" : undefined}
      >
        {children}
      </Link>
    </NextLink>
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
