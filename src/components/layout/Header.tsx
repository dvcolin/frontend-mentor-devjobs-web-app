import styled from "styled-components";
import Button from "../Button";

const StyledHeader = styled.header`
  height: 13.6rem;
  background-color: ${(props) => props.theme.colors.primary.violet};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Button>Button 2</Button>
    </StyledHeader>
  );
};

export default Header;
