import styled from "styled-components";

const StyledHeader = styled.header`
  height: 13.6rem;
  background-color: ${(props) => props.theme.colors.primary.violet};
`;

const Header = () => {
  return <StyledHeader></StyledHeader>;
};

export default Header;
