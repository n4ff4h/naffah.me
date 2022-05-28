import { Flex, Heading } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../public/lotties/rocket.json";

export default function Works() {
  return (
    <Flex minH="full" pb={24} mb="auto" justify="center" direction="column">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "300px", width: "300px" }}
      />
      <Heading fontSize="3xl" color="darkPurple" textAlign="center">
        Coming Soon!
      </Heading>
    </Flex>
  );
}
