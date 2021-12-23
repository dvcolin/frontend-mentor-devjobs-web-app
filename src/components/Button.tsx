import styled, { css } from "styled-components";

const defaultButtonStyles = css`
  border: none;
  border-radius: 0.5rem;
  transition: all 0.15s;
  cursor: pointer;
`;

const primaryButtonStyles = css`
  background-color: ${(props) => props.theme.colors.primary.violet};
  color: ${(props) => props.theme.colors.secondary.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.lightViolet};
  }
`;

const secondaryButtonStyles = css`
  background-color: ${(props) => props.theme.colors.secondary.lightGray};
  color: ${(props) => props.theme.colors.primary.violet};
`;

const secondaryIconButtonStyles = css`
  background-color: transparent;
  color: inherit;
`;

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  ${defaultButtonStyles}
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizes.body.base};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 1.6rem 3rem;
  ${(props) => (props.variant === "primary" ? primaryButtonStyles : secondaryButtonStyles)};
`;

export const IconButton = styled.button<ButtonProps>`
  ${defaultButtonStyles}
  width: 4.8rem;
  height: 4.8rem;
  ${(props) => (props.variant === "primary" ? primaryButtonStyles : secondaryIconButtonStyles)};
`;
