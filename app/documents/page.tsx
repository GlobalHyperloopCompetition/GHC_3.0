"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const registerUrl = "https://forms.gle/jgFNPaJzrB8H8jyM6";

const dates = [
  { d: "Sun 8 Nov", t: "Registration opens" },
  { d: "Wed 25 Nov", t: "Registration closes" },
  { d: "Tue 8 Dec", t: "DPD, PDS, RPD due" },
  { d: "Mon 21 Dec", t: "SBT due" },
  { d: "Thu 24 Dec", t: "CDR, FDS, FRR due" },
  { d: "Mon 28 Dec", t: "Paperwork due" },
  { d: "4 to 6 Jan 2027", t: "GHC 3.0, IIT Madras" },
];

const startDocs = [
  {
    title: "Participation Guide",
    what: "Steps for each track, forms and FAQ.",
    file: null,
  },
  {
    title: "Competition Framework",
    what: "Rules, schedule, event days, scoring overview, code of conduct.",
    file: null,
  },
  {
    title: "Terms & Conditions",
    what: "Fee, insurance, liability, conduct. Signed copy due 28 Dec.",
    file: null,
  },
];

const trackData = [
  {
    id: "demonstration",
    name: "Demonstration",
    line: "Bring a pod or subsystem and run it outdoors under safety supervision.",
    steps: [
      {
        code: "DPD",
        full: "Demonstration Proposal Document",
        due: "Tue 8 Dec",
        what: "Your proposal: what you will bring and demonstrate.",
        pages: "6 pages per subsystem group, 24 in total",
        guide: null,
        submit: null,
      },
      {
        code: "SBT",
        full: "Safety Briefing and Testing Document",
        due: "Mon 21 Dec",
        what: "Tests done, DPS compliance, procedures, datasheets.",
        pages: "40 pages in total",
        guide: null,
        submit: null,
      },
      {
        code: "CDR",
        full: "Comprehensive Demonstration Report",
        due: "Thu 24 Dec",
        what: "Full design, analysis, safety case, track and logistics.",
        pages: "80 pages in total, appendix up to 20 more",
        guide: null,
        submit: null,
      },
    ],
    reference: [
      {
        title: "DPS",
        what: "Demonstration Procedures & Safety: the safety requirements your pod must meet.",
        file: null,
      },
      {
        title: "Scrutineering Procedures",
        what: "Inspection stages and checks, 4 to 6 Jan. Bring 3 printed copies of CDR and SBT.",
        file: null,
      },
    ],
    note:
      "Want to use the GHC Tube? Tell us in the registration form. Custom tracks can be up to 30 m.",
  },
  {
    id: "designx",
    name: "DesignX Blueprint",
    line: "Design a Hyperloop system on paper and defend it before the jury.",
    steps: [
      {
        code: "PDS",
        full: "Preliminary Design Submission",
        due: "Tue 8 Dec",
        what: "Your first design: concept, subsystems, safety, plan.",
        pages: "2 pages for the introduction and 6 pages per subsystem group, 26 in total",
        guide: null,
        submit: null,
      },
      {
        code: "FDS",
        full: "Final Design Submission",
        due: "Thu 24 Dec",
        what: "The complete design with analysis, budget and risks.",
        pages: "90 pages in total",
        guide: null,
        submit: null,
      },
    ],
    reference: [],
    note: "",
  },
  {
    id: "innoquest",
    name: "Hyperloop Innoquest",
    line: "Research an open Hyperloop question and present what you found.",
    steps: [
      {
        code: "RPD",
        full: "Research Proposal Document",
        due: "Tue 8 Dec",
        what: "Problem, category, method and expected outcome. One per topic.",
        pages: "10 pages",
        guide: null,
        submit: null,
      },
      {
        code: "FRR",
        full: "Final Research Report",
        due: "Thu 24 Dec",
        what: "Findings and conclusions. One per topic.",
        pages: "40 pages",
        guide: null,
        submit: null,
      },
    ],
    reference: [
      {
        title: "Innoquest Research Topics",
        what: "Priority topics to choose from. You may propose your own.",
        file: null,
      },
    ],
    note: "",
  },
];

const allTeams = [
  {
    title: "Evaluation and Awarding Criteria",
    what: "How each track is scored out of 100, awards and ties.",
    file: null,
  },
  {
    title: "Letter of Promise, T&C and insurance proof",
    what: "Signed upload. The Letter of Promise is in the Competition Framework.",
    due: "Mon 28 Dec",
    file: null,
    submit: null,
    submitLabel: "Upload",
  },
  {
    title: "Participant list and logistics",
    what: "Member details, faculty advisor, arrival and departure, accommodation, pod transport.",
    due: "Mon 28 Dec",
    file: null,
    submit: null,
    submitLabel: "Submit",
  },
];

const laterDocs = [
  { title: "Presentation Guidelines", when: "15 Dec" },
  { title: "Event Guide", when: "15 Dec" },
];

function btn(label: string, url?: string | null, primary = false, disabledLabel = "Opens soon") {
  const isDisabled = !url;
  return (
    <Button
      type="button"
      isDisabled={isDisabled}
      onClick={() => {
        if (!isDisabled && url) {
          window.open(url, "_blank", "noopener,noreferrer");
        }
      }}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      opacity={isDisabled ? 0.65 : 1}
      variant={primary ? "solid" : "outline"}
      bg={
        primary
          ? "linear-gradient(115deg, rgba(168,85,247,0.72), rgba(99,102,241,0.68))"
          : "rgba(255,255,255,0.06)"
      }
      color="#f9fafb"
      borderColor="rgba(255,255,255,0.2)"
      borderWidth={primary ? 0 : 1}
      backdropFilter="blur(14px)"
      boxShadow="0 8px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.16)"
      transition="background 300ms ease, border-color 300ms ease, box-shadow 300ms ease, transform 300ms ease"
      _hover={
        isDisabled
          ? undefined
          : {
              bg: primary
                ? "linear-gradient(115deg, rgba(192,132,252,0.9), rgba(129,140,248,0.88))"
                : "linear-gradient(115deg, rgba(168,85,247,0.35), rgba(99,102,241,0.32))",
              borderColor: "rgba(216,180,254,0.75)",
              boxShadow: "0 10px 28px rgba(124,58,237,0.28), inset 0 1px 0 rgba(255,255,255,0.24)",
              transform: "translateY(-2px)",
            }
      }
      _active={{ transform: "translateY(0) scale(0.98)" }}
      fontWeight={700}
      fontSize="14px"
      px={4}
      py={2}
      borderRadius="9px"
      minW="fit-content"
    >
      {isDisabled ? disabledLabel : label}
    </Button>
  );
}

function docCard(doc: any) {
  return (
    <Box
      key={doc.title}
      bg="rgba(255,255,255,0.04)"
      border="1px solid rgba(255,255,255,0.12)"
      borderRadius="14px"
      p={5}
      display="flex"
      flexDirection="column"
      gap={2}
      minH="200px"
    >
      <Heading as="h3" fontSize="17px" color="#f9fafb" m={0}>
        {doc.title}
      </Heading>
      <Text fontSize="14px" color="#a1a1aa" m={0}>
        {doc.what}
      </Text>
      <Flex wrap="wrap" gap={2} mt={1}>
        {doc.due ? (
          <Tag
            bg="rgba(251,191,36,0.12)"
            color="#fbbf24"
            border="1px solid rgba(251,191,36,0.35)"
            borderRadius="999px"
            fontSize="12px"
          >
            Due {doc.due}
          </Tag>
        ) : null}
        {doc.pages ? (
          <Tag
            bg="rgba(255,255,255,0.06)"
            color="#a1a1aa"
            border="1px solid rgba(255,255,255,0.12)"
            borderRadius="999px"
            fontSize="12px"
          >
            {doc.pages}
          </Tag>
        ) : null}
      </Flex>
      <Flex gap={2} flexWrap="wrap" mt="auto">
        {btn("Download PDF", doc.file, true, "PDF opens soon")}
        {doc.submit ? btn(doc.submitLabel || "Submit", doc.submit) : null}
      </Flex>
    </Box>
  );
}

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  const targetTop =
    window.scrollY +
    section.getBoundingClientRect().top -
    parseFloat(getComputedStyle(section).scrollMarginTop || "0");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetTop);
    return;
  }

  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const duration = 900;
  let startTime: number | undefined;

  const animateScroll = (time: number) => {
    startTime ??= time;
    const progress = Math.min((time - startTime) / duration, 1);
    const easedProgress =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startTop + distance * easedProgress);

    if (progress < 1) requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
}

const Documents = () => {
  const [selectedTrack, setSelectedTrack] = useState("demonstration");
  const [activeSection, setActiveSection] = useState("dates");
  const activeTrack = trackData.find((track) => track.id === selectedTrack) || trackData[0];

  useEffect(() => {
    const sectionIds = ["dates", "start", "tracks", "everyone", "later", "help"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-150px 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      bg="#0b0f17"
      color="#f9fafb"
      minH="100vh"
    >
      <Navbar />

      <Box bg="radial-gradient(900px 300px at 80% -20%, rgba(124,58,237,0.25), transparent), radial-gradient(700px 260px at 0% 0%, rgba(99,102,241,0.18), transparent)">
        <Container
          width="92%"
          maxW="1200px"
          px={6}
          pt={{ base: 24, md: 28 }}
          pb={{ base: 10, md: 14 }}
        >
          <Text
            as="div"
            fontSize="12px"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color="#c084fc"
            fontWeight={700}
          >
            Global Hyperloop Competition 3.0
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "36px", sm: "48px", lg: "64px" }}
            fontWeight={800}
            lineHeight={0.98}
            letterSpacing="-0.03em"
            fontFamily="Inter, sans-serif"
            mt={3}
            mb={3}
          >
            Documents and submissions
          </Heading>
          <Text color="#a1a1aa" maxW="640px" fontSize={{ base: "md", md: "lg" }} lineHeight={1.6}>
            Everything your team needs, in the order you need it. Start with the three documents below,
            then pick your track.
          </Text>
        </Container>
      </Box>

      <Box position="sticky" top={{ base: "76px", md: "84px" }} zIndex={5} bg="rgba(11,15,23,0.92)" backdropFilter="blur(8px)" borderBottom="1px solid rgba(255,255,255,0.12)">
        <Container
          width="92%"
          maxW="1200px"
          px={6}
        >
          <Flex gap={2} py={3} overflowX="auto" sx={{ scrollbarWidth: "none" }}>
            {[
              { label: "Key dates", href: "#dates" },
              { label: "Start here", href: "#start" },
              { label: "Your track", href: "#tracks" },
              { label: "All teams", href: "#everyone" },
              { label: "Coming later", href: "#later" },
              { label: "Help", href: "#help" },
            ].map((item) => (
              <Button
                key={item.label}
                as="a"
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  const sectionId = item.href.slice(1);
                  setActiveSection(sectionId);
                  scrollToSection(sectionId);
                }}
                variant="ghost"
                color={activeSection === item.href.slice(1) ? "#ffffff" : "#a1a1aa"}
                border="1px solid transparent"
                position="relative"
                overflow="hidden"
                borderRadius="999px"
                fontSize="14px"
                px={3}
                py={2}
                minW="max-content"
                bg="rgba(255,255,255,0.04)"
                backdropFilter="blur(12px)"
                transition="color 400ms ease, border-color 400ms ease, box-shadow 400ms ease, transform 400ms ease"
                _before={{
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "inherit",
                  bg: "linear-gradient(115deg, rgba(168,85,247,0.72), rgba(99,102,241,0.68))",
                  opacity: activeSection === item.href.slice(1) ? 1 : 0,
                  transform: activeSection === item.href.slice(1) ? "scaleX(1)" : "scaleX(0.75)",
                  transition: "opacity 450ms ease, transform 450ms ease",
                }}
                _hover={{
                  color: "#f9fafb",
                  borderColor: "rgba(216,180,254,0.6)",
                  boxShadow: "0 6px 18px rgba(124,58,237,0.2)",
                  transform: "translateY(-1px)",
                  _before: { opacity: 1, transform: "scaleX(1)" },
                }}
              >
                <Box as="span" position="relative" zIndex={1}>
                  {item.label}
                </Box>
              </Button>
            ))}
          </Flex>
        </Container>
      </Box>

      <Container
        width="92%"
        maxW="1200px"
        px={6}
        py={5}
      >
        <Box id="dates" py={6} scrollMarginTop="150px">
          <Heading as="h2" fontSize={{ base: "24px", md: "30px" }} fontWeight={700} mb={1}>
            Key dates
          </Heading>
          <Text color="#a1a1aa" mb={4}>
            All deadlines close at 23:59 IST.
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
            {dates.map((item, index) => (
              <Box
                key={item.d}
                bg="rgba(255,255,255,0.04)"
                border={index === 1 ? "1px solid #a78bfa" : "1px solid rgba(255,255,255,0.12)"}
                borderRadius="12px"
                p={4}
                boxShadow={index === 1 ? "0 0 0 1px #a78bfa inset" : "none"}
              >
                <Text fontSize="13px" color="#c084fc" fontWeight={700}>
                  {item.d}
                </Text>
                <Text fontSize="14px" color="#a1a1aa" mt={1}>
                  {item.t}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box id="start" py={6} scrollMarginTop="150px">
          <Heading as="h2" fontSize={{ base: "24px", md: "30px" }} fontWeight={700} mb={1}>
            Start here
          </Heading>
          <Text color="#a1a1aa" mb={4}>
            Every team reads these three, whatever the track.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            <Box
              bg="rgba(255,255,255,0.04)"
              border="1px solid rgba(255,255,255,0.12)"
              borderRadius="14px"
              p={5}
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <Heading as="h3" fontSize="17px" color="#f9fafb" m={0}>
                Register your team
              </Heading>
              <Text fontSize="14px" color="#a1a1aa" m={0}>
                Fill the registration form once per team. Closes Wed 25 Nov 2026.
              </Text>
              <Flex mt="auto">
                {btn("Register", registerUrl, true)}
              </Flex>
            </Box>
            {startDocs.map((item) => docCard(item))}
          </SimpleGrid>
        </Box>

        <Box id="tracks" py={6} scrollMarginTop="150px">
          <Heading as="h2" fontSize={{ base: "24px", md: "30px" }} fontWeight={700} mb={1}>
            Your track
          </Heading>
          <Text color="#a1a1aa" mb={4}>
            Choose your track to see its documents in the order you will use them. Teams in more than one
            track follow each.
          </Text>

          <Flex wrap="wrap" gap={3} mb={4}>
            {trackData.map((track) => (
              <Button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                variant={selectedTrack === track.id ? "solid" : "outline"}
                bg={selectedTrack === track.id ? "#a78bfa" : "rgba(255,255,255,0.04)"}
                color={selectedTrack === track.id ? "#0b0f17" : "#a1a1aa"}
                borderColor="rgba(255,255,255,0.2)"
                borderRadius="10px"
                fontWeight={600}
                backdropFilter="blur(14px)"
                boxShadow="inset 0 1px 0 rgba(255,255,255,0.14)"
                transition="background 300ms ease, color 300ms ease, border-color 300ms ease, box-shadow 300ms ease, transform 300ms ease"
                _hover={{
                  bg: selectedTrack === track.id
                    ? "linear-gradient(115deg, rgba(192,132,252,0.95), rgba(129,140,248,0.92))"
                    : "linear-gradient(115deg, rgba(168,85,247,0.35), rgba(99,102,241,0.32))",
                  color: selectedTrack === track.id ? "#0b0f17" : "#f9fafb",
                  borderColor: "rgba(216,180,254,0.75)",
                  boxShadow: "0 8px 22px rgba(124,58,237,0.24), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transform: "translateY(-2px)",
                }}
                _active={{ transform: "translateY(0) scale(0.98)" }}
              >
                {track.name}
              </Button>
            ))}
          </Flex>

          <Box borderRadius="14px" bg="rgba(255,255,255,0.02)" border="1px solid rgba(255,255,255,0.12)" p={4}>
            <Text color="#a1a1aa" mb={4}>
              <Text as="span" fontWeight={700} color="#f9fafb">
                {activeTrack.name}. 
              </Text>
              {activeTrack.line}
            </Text>

            <Stack spacing={4}>
              {activeTrack.steps.map((step, index) => (
                <Flex key={step.code} gap={4} align="flex-start" wrap={{ base: "wrap", md: "nowrap" }}>
                  <Box
                    w="36px"
                    h="36px"
                    borderRadius="50%"
                    bg="#a78bfa"
                    color="#0b0f17"
                    fontWeight={800}
                    display="grid"
                    placeItems="center"
                    mt={2}
                  >
                    {index + 1}
                  </Box>
                  <Box flex={1} bg="rgba(255,255,255,0.04)" border="1px solid rgba(255,255,255,0.12)" borderRadius="14px" p={4}>
                    <Flex justify="space-between" align="flex-start" gap={3} wrap="wrap">
                      <Heading as="h3" fontSize="17px" color="#f9fafb" m={0}>
                        {step.code} <Text as="span" fontSize="14px" color="#a1a1aa" ml={2}>
                          {step.full}
                        </Text>
                      </Heading>
                      <Tag bg="rgba(251,191,36,0.12)" color="#fbbf24" border="1px solid rgba(251,191,36,0.35)" borderRadius="999px">
                        Due {step.due}
                      </Tag>
                    </Flex>
                    <Text fontSize="14px" color="#a1a1aa" mt={3} mb={3}>
                      {step.what}
                    </Text>
                    <Flex wrap="wrap" gap={2} mb={4}>
                      <Tag bg="rgba(255,255,255,0.06)" color="#a1a1aa" border="1px solid rgba(255,255,255,0.12)" borderRadius="999px">{step.pages}</Tag>
                      <Tag bg="rgba(255,255,255,0.06)" color="#a1a1aa" border="1px solid rgba(255,255,255,0.12)" borderRadius="999px">PDF, A4, English</Tag>
                    </Flex>
                    <Flex wrap="wrap" gap={2}>
                      {btn("Read the guidelines", step.guide, true, "Guidelines open soon")}
                      {btn(`Submit ${step.code}`, step.submit, false, "Submission opens soon")}
                    </Flex>
                  </Box>
                </Flex>
              ))}
            </Stack>

            {activeTrack.reference.length > 0 ? (
              <Box mt={6}>
                <Text fontSize="15px" color="#a1a1aa" fontWeight={600} mb={3}>
                  Also for this track
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  {activeTrack.reference.map((item) => docCard(item))}
                </SimpleGrid>
              </Box>
            ) : null}

            {activeTrack.note ? (
              <Box mt={6} p={4} borderRadius="10px" border="1px solid rgba(255,255,255,0.12)" borderLeft="4px solid #a78bfa" bg="rgba(255,255,255,0.04)">
                {activeTrack.note}
              </Box>
            ) : null}

            <Box mt={6} p={4} borderRadius="10px" border="1px solid rgba(255,255,255,0.12)" borderLeft="4px solid #a78bfa" bg="rgba(255,255,255,0.04)">
              <Text as="span" fontWeight={700} color="#f9fafb">
                Late?
              </Text>{" "}
              A submission received up to 48 hours late is accepted with 2 points deducted per day or part of a day. After that it is not accepted. Name your file <Text as="span" fontWeight={700} color="#f9fafb">GHC3_&lt;TeamID&gt;_&lt;CODE&gt;.pdf</Text> (your Team ID comes with the registration confirmation).
            </Box>
          </Box>
        </Box>

        <Box id="everyone" py={6} scrollMarginTop="150px">
          <Heading as="h2" fontSize={{ base: "24px", md: "30px" }} fontWeight={700} mb={1}>
            For all teams
          </Heading>
          <Text color="#a1a1aa" mb={4}>
            Paperwork and scoring that apply to every track.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {allTeams.map((item) => docCard(item))}
          </SimpleGrid>
        </Box>

        <Box id="later" py={6} scrollMarginTop="150px">
          <Heading as="h2" fontSize={{ base: "24px", md: "30px" }} fontWeight={700} mb={1}>
            Coming later
          </Heading>
          <Text color="#a1a1aa" mb={4}>
            These will appear here when published.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
            {laterDocs.map((item) => (
              <Box key={item.title} bg="rgba(255,255,255,0.04)" border="1px solid rgba(255,255,255,0.12)" borderRadius="14px" p={5}>
                <Heading as="h3" fontSize="17px" color="#f9fafb" m={0}>
                  {item.title}
                </Heading>
                <Flex mt={3}>
                  <Tag bg="rgba(167,139,250,0.12)" color="#c084fc" border="1px solid rgba(167,139,250,0.45)" borderRadius="999px">
                    Publishes {item.when}
                  </Tag>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box id="help" mt={8} p={6} border="1px solid rgba(255,255,255,0.12)" borderRadius="14px" bg="linear-gradient(135deg, rgba(91,33,182,0.45), rgba(67,56,202,0.35))">
          <Heading as="h2" fontSize="20px" mb={2}>
            Need help?
          </Heading>
          <Text color="#d4d4d8" m={0}>
            Email <a href="mailto:ghc@smail.iitm.ac.in" style={{ color: "#f9fafb", fontWeight: 700 }}>
              ghc@smail.iitm.ac.in
            </a>
          </Text>
          <Text color="#d4d4d8" mt={2}>
            Sashank <a href="tel:+919666110425" style={{ color: "#f9fafb" }}>+91 96661 10425</a> &nbsp;|&nbsp; Nizamuddin <a href="tel:+917034943826" style={{ color: "#f9fafb" }}>+91 70349 43826</a>
          </Text>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default Documents;
