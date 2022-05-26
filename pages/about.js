import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";

export default function About() {
  return (
    <MainLayout>
      <Flex minH="full" py={12} mb="auto" direction="column">
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
        <Box background="#f6f8fb" p={9} borderRadius={8} mb={24}>
          <Text
            fontSize={{ base: "xl", sm: "2xl" }}
            fontWeight="semibold"
            color="#5b6988"
            pb={2}
          >
            👋 Hi there, I&apos;m Naffah.
          </Text>
          <Text fontSize={"md"} color="#5b6988">
            A self taught developer from Maldives 🌴. From a young age, i found
            computers fascinating. This led me to tinker and expand my knowledge
            in computer science. In my spare time, I enjoy learning more about
            linux and playing chess.
          </Text>
        </Box>
        <Heading fontSize="3xl" color="darkPurple" textAlign="center" pb={12}>
          Skills
        </Heading>
      </Flex>
    </MainLayout>
  );
}
