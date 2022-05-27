import { Box, Flex, Heading, WrapItem } from "@chakra-ui/react";

export default function SkillIcon({ Icon, name }) {
  return (
    <WrapItem>
      <Flex direction="column">
        <Box pb={4}>
          <Icon size="6em" color="#CCD1E4" />
        </Box>
        <Heading fontSize="md" textAlign="center" color="#5b6988">
          {name}
        </Heading>
      </Flex>
    </WrapItem>
  );
}
