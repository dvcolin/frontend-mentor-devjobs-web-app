import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      tabletPortrait: string;
      tabletLandscape: string;
      desktop: string;
    };
    fonts: {
      body: string;
    };
    fontSizes: {
      h1: {
        base: string;
        tablet: string;
      };
      h2: {
        base: string;
        tablet: string;
      };
      h3: {
        base: string;
      };
      h4: {
        base: string;
      };
      body: {
        base: string;
      };
    };
    colors: {
      primary: {
        violet: string;
        lightViolet: string;
        veryDarkBlue: string;
        midnight: string;
      };
      secondary: {
        white: string;
        lightGray: string;
        gray: string;
        darkGray: string;
      };
    };
    lineHeights: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      body: number;
    };
    fontWeights: {
      body: number;
      bold: number;
    };
  }
}
