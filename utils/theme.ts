import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Supports weights 100-900
import "@fontsource-variable/kumbh-sans";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Kumbh Sans Variable', sans-serif`,
    body: `'Kumbh Sans Variable', sans-serif`,
  },
  colors: {
    red: {
      50: "#faf5ff",
      100: "#e9d8fd",
      200: "#d6bcfa",
      300: "#b794f4",
      400: "#9f7aea",
      500: "#805ad5",
      600: "#6b46c1",
      700: "#553c9a",
      800: "#44337a",
      900: "#322659",
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: "gray.400", // Customize the border color
          borderWidth: "2px", // Customize the border width
          _hover: {
            borderColor: "gray.600", // Border color on hover
          },
        },
      },
    },
  },
});

export default theme;
