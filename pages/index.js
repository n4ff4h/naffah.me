import { Heading, HStack, VStack } from "@chakra-ui/react";
import { FULL_NAME } from "../lib/constants";
import {
  UilTwitterAlt,
  UilGithubAlt,
  UilEnvelopeAlt,
} from "@iconscout/react-unicons";
import SocialLink from "../components/social-link";

export default function Home() {
  return (
    <VStack h="full" py={12} align="center" my="auto">
      <Heading
        fontSize={{ base: "4xl", md: "5xl" }}
        color="darkPurple"
        pb={2}
        textAlign="center"
      >
        {FULL_NAME}
      </Heading>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        color="primary"
        pb={6}
        textAlign="center"
      >
        Full Stack Developer
      </Heading>
      <HStack justify="center" gap={3}>
        <SocialLink Icon={UilTwitterAlt} href="https://twitter.com/n4ff4h" />
        <SocialLink Icon={UilEnvelopeAlt} href="mailto:mail@naffah.me" />
        <SocialLink Icon={UilGithubAlt} href="https://github.com/n4ff4h" />
      </HStack>
    </VStack>
  );
}
