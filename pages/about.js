import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";

export default function About() {
  return (
    <MainLayout>
      <Flex h="full" py={12} mb="auto" direction="column">
        <Flex justify="center" pt={6} pb={8}>
          <Image
            priority
            src="/images/profile.jpeg"
            w={144}
            h={144}
            alt="profile-picture"
          />
        </Flex>
        <Heading fontSize="3xl" color="darkPurple" textAlign="center" pb={12}>
          Who am I?
        </Heading>
        <Box background="#f6f8fb" p={9} borderRadius={8}>
          <Text
            fontSize={{ base: "xl", sm: "2xl" }}
            fontWeight="semibold"
            color="#5b6988"
          >
            👋 Hi there, I&apos;m Naffah
          </Text>
          <Text fontSize={"md"} color="#5b6988">
            A self taught web developer from Maldives 🌴.
          </Text>
        </Box>
      </Flex>
    </MainLayout>
  );
}
