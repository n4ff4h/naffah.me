import { Box, Flex, Heading, WrapItem } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export default function SkillIcon({ Icon, name }) {
  const [color, setColor] = React.useState("#CCD1E4");

  function handleMouseEnter() {
    setColor("#9672fb");
  }

  function handleMouseLeave() {
    setColor("#CCD1E4");
  }

  return (
    <WrapItem>
      <Flex direction="column">
        <Box
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          pb={4}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Icon size="6em" color={color} />
        </Box>
        <Heading fontSize="md" textAlign="center" color="#5b6988">
          {name}
        </Heading>
      </Flex>
    </WrapItem>
  );
}
