import { Heading, HStack, VStack } from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import { FULL_NAME } from "../lib/constants";
import {
  UilTwitterAlt,
  UilGithubAlt,
  UilEnvelopeAlt,
} from "@iconscout/react-unicons";

export default function Home() {
  return (
    <MainLayout>
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
          pb={12}
          textAlign="center"
        >
          Full Stack Developer
        </Heading>
        <HStack justify="center" gap={3}>
          <a href="https://twitter.com/n4ff4h">
            <UilTwitterAlt size="30" color="#48466D" />
          </a>
          <a href="mailto:mail@naffah.me">
            <UilEnvelopeAlt size="30" color="#48466D" />
          </a>
          <a href="https://github.com/n4ff4h">
            <UilGithubAlt size="30" color="#48466D" />
          </a>
        </HStack>
      </VStack>
    </MainLayout>
  );
}
