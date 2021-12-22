import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    html {
        font-size: 62.5%;
    }
    body {
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.body};
        font-size: ${(props) => props.theme.fontSizes.body.base};
        font-weight: ${(props) => props.theme.fontWeights.body};
        line-height: ${(props) => props.theme.lineHeights.body};
        background-color: ${(props) => props.theme.colors.secondary.lightGray};
        color: ${(props) => props.theme.colors.secondary.darkGray};    }
`;

export default GlobalStyles;
