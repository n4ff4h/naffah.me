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
      <Wrap justify="center" spacing="30px" mb={12} pt={2}>
        <SkillIcon
          Icon={Html5PlainWordmarkIcon}
          name="HTML"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <SkillIcon
          Icon={Css3PlainWordmarkIcon}
          name="CSS"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillIcon
          Icon={BootstrapPlainIcon}
          name="Bootstrap"
          href="https://getbootstrap.com/"
        />
        <SkillIcon
          Icon={TailwindcssPlainIcon}
          name="Tailwind"
          href="https://tailwindcss.com/"
        />
        <SkillIcon
          Icon={JavascriptPlainIcon}
          name="Javascript"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillIcon
          Icon={ReactOriginalIcon}
          name="React"
          href="https://reactjs.org/"
        />
        <SkillIcon
          Icon={NextjsOriginalIcon}
          name="Next"
          href="https://nextjs.org/"
        />
        <SkillIcon Icon={JavaPlainIcon} name="Java" href="https://dev.java/" />
        <SkillIcon
          Icon={PythonPlainIcon}
          name="Python"
          href="https://www.python.org/"
        />
        <SkillIcon
          Icon={DjangoPlainIcon}
          name="Django"
          href="https://www.djangoproject.com/"
        />
      </Wrap>
    </Flex>
  );
}
