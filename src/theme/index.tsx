import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyles from "./GlobalStyles";

const theme: DefaultTheme = {
  breakpoints: {
    tabletPortrait: "37.5em",
    tabletLandscape: "48em",
    desktop: "62em",
  },
  fonts: {
    body: "'Kumbh Sans', sans-serif",
  },
  fontSizes: {
    h1: {
      base: "2rem",
      tablet: "2.8rem",
    },
    h2: {
      base: "2rem",
      tablet: "2.4rem",
    },
    h3: {
      base: "2rem",
    },
    h4: {
      base: "1.4rem",
    },
    body: {
      base: "1.6rem",
    },
  },
  lineHeights: {
    h1: 1.2,
    h2: 1.2,
    h3: 1.2,
    h4: 1.28,
    body: 1.625,
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
  colors: {
    primary: {
      violet: "#5964E0",
      lightViolet: "#939BF4",
      veryDarkBlue: "#19202D",
      midnight: "#121721",
    },
    secondary: {
      white: "#FFFFFF",
      lightGray: "#F4F6F8",
      gray: "#9DAEC2",
      darkGray: "#6E8098",
    },
  },
};

interface ThemeProps {
  children: React.ReactNode;
}

const Theme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
