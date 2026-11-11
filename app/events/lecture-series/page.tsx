import { Box, Container } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import LectureHero from "../../../components/LectureSeries/Hero";
// import FollowWAChannel from "../../../components/Subscribe";
import Videos from "../../../components/LectureSeries/Videos";
import CreatedBy from "../../../components/LectureSeries/AssociatedTeams";

const LectureSeries = () => {
  return (
    <Box minH="100vh" position="relative" bg="#0b0f17" color="white">
      <Navbar />
      <Box position="relative" zIndex={1} pt={{ base: "5.5rem", md: "6rem" }}>
        <Container maxW={"7xl"} px={0}>
          <LectureHero />
          {/* <FollowWAChannel /> */}
          <CreatedBy />
          <Videos />
          <Footer dark />
        </Container>
      </Box>
      <Box
        aria-hidden="true"
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="100vh"
        overflow="hidden"
        pointerEvents="none"
        zIndex={0}
      >
        <Box
          position="absolute"
          top="-10rem"
          left="-10rem"
          w="32rem"
          h="32rem"
          rounded="full"
          bg="purple.600"
          opacity={0.18}
          filter="blur(120px)"
        />
        <Box
          position="absolute"
          bottom={0}
          right={0}
          w="30rem"
          h="30rem"
          rounded="full"
          bg="indigo.500"
          opacity={0.18}
          filter="blur(130px)"
        />
      </Box>
    </Box>
  );
};

export default LectureSeries;
