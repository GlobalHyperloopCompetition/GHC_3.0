"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import Link from "next/link";

import { MdMail, MdPhone } from "react-icons/md";

const SocialButton = ({
  children,
  label,
  href,
  dark = false,
}: {
  children: ReactNode;
  label: string;
  href: string;
  dark?: boolean;
}) => {
  const defaultBackground = useColorModeValue(
    "blackAlpha.100",
    "whiteAlpha.100"
  );

  return (
    <chakra.button
      bg={dark ? "whiteAlpha.100" : defaultBackground}
      rounded={"full"}
      w={12}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: dark ? "purple.500" : "red.500",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const FooterLink = ({
  children,
  href,
  dark = false,
}: {
  children: ReactNode;
  href: string;
  dark?: boolean;
}) => {
  return (
    <Link href={href}>
      <Box
        color={dark ? "gray.300" : "gray.500"}
        _hover={{
          color: dark ? "purple.300" : "red.400",
          textDecoration: "underline",
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default function LargeWithNewsletter({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const defaultBackground = useColorModeValue("gray.100", "gray.900");
  const defaultColor = useColorModeValue("gray.700", "gray.200");
  const defaultLogo = useColorModeValue(
    "/GHC-LOGO-BLACK.png",
    "/GHC-logo.png"
  );
  const defaultInputBackground = useColorModeValue(
    "blackAlpha.100",
    "whiteAlpha.100"
  );
  const defaultButtonBackground = useColorModeValue("red.400", "red.600");
  const defaultButtonColor = useColorModeValue("white", "gray.200");
  const defaultButtonHoverBackground = useColorModeValue("red.600", "red.400");

  return (
    <Box
      bg={dark ? "#0b0f17" : defaultBackground}
      color={dark ? "gray.200" : defaultColor}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <HStack>
              <Link href="/">
                <Image
                  alt="GHC_logo"
                  src={dark ? "/GHC-logo.png" : defaultLogo}
                  h={6}
                />
              </Link>
            </HStack>
            <Text fontSize={"sm"}>© 2027 GHC . All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Instagram"}
                href="https://www.instagram.com/ghc_india/"
                dark={dark}
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={"Linkedin"}
                href={
                  "https://www.linkedin.com/company/global-hyperloop-competition-iitm/mycompany/"
                }
                dark={dark}
              >
                <FaLinkedin />
              </SocialButton>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/GHCIITM"}
                dark={dark}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"YouTube"}
                href={
                  "https://www.youtube.com/@GHCIITM"
                }
                dark={dark}
              >
                <FaYoutube />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <FooterLink href="/about/mission" dark={dark}>Mission and Vision</FooterLink>
            <FooterLink href="/about/team" dark={dark}>Our Team</FooterLink>
            <FooterLink href="/about/activity" dark={dark}>Activity</FooterLink>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <FooterLink href="#" dark={dark}>Blog (Coming soon)</FooterLink>
            <FooterLink href="/contact" dark={dark}>Contact us</FooterLink>
            <FooterLink href="mailto: ghc@smail.iitm.ac.in" dark={dark}>Email</FooterLink>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Stack direction={"row"} w={""}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Your email address"}
                bg={dark ? "whiteAlpha.100" : defaultInputBackground}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
                focusBorderColor={dark ? "purple.400" : "red.400"}
              />
              <Link href={`/contact?email=${email}`}>
                <IconButton
                  bg={dark ? "purple.600" : defaultButtonBackground}
                  color={dark ? "white" : defaultButtonColor}
                  _hover={{
                    bg: dark ? "purple.500" : defaultButtonHoverBackground,
                  }}
                  aria-label="Contact"
                  icon={<BiMailSend />}
                />
              </Link>
            </Stack>
            <Stack mt={6} direction={"row"} w="80%">
              <IconButton
                as="a"
                href="tel:+91 97408 71617"
                width={"50%"}
                icon={<MdPhone />}
                aria-label="phone"
              />
              <IconButton
                as="a"
                href="mailto: ghc@smail.iitm.ac.in"
                width={"50%"}
                icon={<MdMail />}
                aria-label="email"
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
