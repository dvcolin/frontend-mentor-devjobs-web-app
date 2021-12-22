import styled from "styled-components";
import Container from "../Container";

const StyledHeader = styled.header`
  height: 13.6rem;
  background-image: url(${process.env.PUBLIC_URL}/assets/mobile/bg-pattern-header.svg);
  background-size: cover;
  background-position: center;
`;

const StyledContainer = styled(Container)`
  padding-top: 3.2rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <img src={`${process.env.PUBLIC_URL}/assets/desktop/logo.svg`} alt="Logo" />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
