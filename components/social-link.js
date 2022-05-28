import { Box, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function SocialLink({ Icon, href }) {
  const [color, setColor] = React.useState("#FF8C8C");

  function handleMouseEnter() {
    setColor("#FF7777");
  }

  function handleMouseLeave() {
    setColor("#FF8C8C");
  }

  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.2 }}
      pb={4}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon size="30" color={color} />
      </Link>
    </Box>
  );
}
