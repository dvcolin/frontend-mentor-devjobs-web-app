import styled, { css } from "styled-components";

const headingStyles = css`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primary.veryDarkBlue};
`;

export const H1 = styled.h1`
  ${headingStyles};
  font-size: ${(props) => props.theme.fontSizes.h1.base};
  line-height: ${(props) => props.theme.lineHeights.h1};
`;

export const H2 = styled.h2`
  ${headingStyles};
  font-size: ${(props) => props.theme.fontSizes.h2.base};
  line-height: ${(props) => props.theme.lineHeights.h2};
`;

export const H3 = styled.h3`
  ${headingStyles};
  font-size: ${(props) => props.theme.fontSizes.h3.base};
  line-height: ${(props) => props.theme.lineHeights.h3};
`;

export const H4 = styled.h4`
  ${headingStyles};
  font-size: ${(props) => props.theme.fontSizes.h4.base};
  line-height: ${(props) => props.theme.lineHeights.h4};
  color: ${(props) => props.theme.colors.primary.violet};
`;
