// import { ReactNode } from 'react'
"use client"
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function TrackDetails() {
  return (
    <Box
      bg="rgba(255,255,255,0.06)"
      color="white"
      position={"relative"}
      p={{ base: 2, md: 4 }}
    >
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/conf1.jpg')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"55%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient="linear(to-r, #0b0f17 0%, transparent)"
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={2} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.300"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 16, xl: 30 }}
          >
            <Box mb={{ base: 8, md: 10 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"purple.300"}
              >
                April 2024
              </Text>
              <Heading
                color="white"
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Parivahan
              </Heading>
              <Text
                fontSize={"xl"}
                color="gray.300"
              >
                Parivahan - The Global Hyperloop Conference (GHC) marked
                India's first-ever international conference on innovative
                transportation to be held in India. The conference brought
                together leading companies, visionary speakers, and Hyperloop
                teams, to give them an unparalleled opportunity of sharing their
                vision of Hyperloop as a sustainable future transportation
                system on a leading platform. The conference hosted experts
                who have significantly contributed to the technological
                revolution. These leading experts shared their first-hand
                experiences, successes, and challenges!
              </Text>
              <Text
                fontSize={"xl"}
                color="gray.300"
                mt={4}
              >
                The conference hosted experts who have significantly
                contributed to the technological revolution. These leading
                experts shared their first-hand experiences, successes
                and challenges!
              </Text>
            </Box>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}
