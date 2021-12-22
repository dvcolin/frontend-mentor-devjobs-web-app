import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

const Button = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSizes.body.base};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  border: none;
  border-radius: 0.5rem;
  padding: 1.6rem 3rem;
  cursor: pointer;
  transition: all 0.15s;
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary.violet
      : props.theme.colors.secondary.lightGray};
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.secondary.white
      : props.theme.colors.primary.violet};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary.lightViolet};
  }
`;

export default Button;
