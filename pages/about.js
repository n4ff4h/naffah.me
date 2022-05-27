import { Box, Flex, Heading, Image, Text, Wrap } from "@chakra-ui/react";
import {
  Html5PlainWordmarkIcon,
  Css3PlainWordmarkIcon,
  BootstrapPlainIcon,
  TailwindcssPlainIcon,
  JavascriptPlainIcon,
  ReactOriginalIcon,
  NextjsOriginalIcon,
  JavaPlainIcon,
  PythonPlainIcon,
  DjangoPlainIcon,
} from "react-devicons";
import SkillIcon from "../components/skill-icon";

export default function About() {
  return (
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
          linux and playing chess. Oh, and i love coffee ☕️.
        </Text>
      </Box>
      <Heading fontSize="3xl" color="darkPurple" textAlign="center" pb={12}>
        Skills
      </Heading>
      <Wrap justify="center" spacing="30px" mb={12}>
        <SkillIcon Icon={Html5PlainWordmarkIcon} name="HTML" />
        <SkillIcon Icon={Css3PlainWordmarkIcon} name="CSS" />
        <SkillIcon Icon={BootstrapPlainIcon} name="Bootstrap" />
        <SkillIcon Icon={TailwindcssPlainIcon} name="Tailwind" />
        <SkillIcon Icon={JavascriptPlainIcon} name="Javascript" />
        <SkillIcon Icon={ReactOriginalIcon} name="React" />
        <SkillIcon Icon={NextjsOriginalIcon} name="Next" />
        <SkillIcon Icon={JavaPlainIcon} name="Java" />
        <SkillIcon Icon={PythonPlainIcon} name="Python" />
        <SkillIcon Icon={DjangoPlainIcon} name="Django" />
      </Wrap>
    </Flex>
  );
}
