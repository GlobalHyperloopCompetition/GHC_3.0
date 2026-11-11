"use client";

import { Box, Text } from "@chakra-ui/react";
import { usePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import useGetTeam from "@/utils/useGetTeam";

export default function Loading() {
  const ref = useRef<HTMLDivElement>(null);
  const [isPresent, safeToRemove] = usePresence();
  const [, isLoading] = useGetTeam();

  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isLoading ? show : hide}
      ref={ref}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        transition="all ease 12s"
        height="100vh"
        width="100vw"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ ease: "easeIn" }}
        >
          <Text fontWeight="extrabold" fontSize="6xl">
            GHC
          </Text>
        </motion.div>
      </Box>
    </motion.div>
  );
}
