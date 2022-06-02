import { Box, Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { motion } from "framer-motion";

function NavItem({ children, href }) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <>
      <NextLink href={href} passHref>
        <Link
          px={2}
          pt={2}
          mx={2}
          style={{ textDecoration: "none" }}
          color={active ? "darkPurple" : "#908f94"}
          fontWeight="semibold"
        >
          {children}
          {active ? (
            <Box
              as={motion.div}
              layoutId="underline"
              width="full"
              border="solid 1.5px"
              borderRadius={24}
              color="primary"
              background="primary"
              mb={1}
            ></Box>
          ) : null}
        </Link>
      </NextLink>
    </>
  );
}

export default function Navbar() {
  const items = [
    { page: "Home", href: "/" },
    { page: "About", href: "/about" },
    { page: "Works", href: "/works" },
  ];

  return (
    <Flex as="nav" py={4} justify="center">
      <Flex>
        {items.map((item) => (
          <NavItem href={item.href} key={item.page}>
            {item.page}
          </NavItem>
        ))}
      </Flex>
    </Flex>
  );
}
