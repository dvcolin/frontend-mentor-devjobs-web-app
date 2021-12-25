import styled from "styled-components";
import { Link } from "react-router-dom";
import Text from "./Text";
import { H3, H4 } from "./Heading";
import { JobPosting } from "../types";

const StyledJobPostingCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.secondary.white};
  border-radius: 0.6rem;
  padding-top: 4.8rem;
  padding-bottom: 3.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`;

interface LogoBoxProps {
  bgColor: string;
}

const LogoBox = styled.div<LogoBoxProps>`
  position: absolute;
  top: -2.4rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;
  background-color: ${(props) => props.bgColor};
`;

const PostedAtAndContract = styled(Text)`
  span:not(:last-child) {
    margin-right: 0.8rem;
  }

  span:nth-child(2) {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

const Position = styled(H3)`
  margin-top: 1.2rem;
  text-decoration: none;
`;

const Company = styled(Text)`
  margin-top: 0.4rem;
`;

const Location = styled(H4)`
  margin-top: 3.2rem;
`;

const JobPostingCard = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}: JobPosting) => {
  return (
    <StyledJobPostingCard>
      <LogoBox bgColor={logoBackground}>
        <img src={`${process.env.PUBLIC_URL}/${logo}`} alt={`${company} logo`} />
      </LogoBox>
      <PostedAtAndContract>
        <span>{postedAt}</span>
        <span>&middot;</span>
        <span>{contract}</span>
      </PostedAtAndContract>
      <Position as={Link} to={`/${id}`}>
        {position}
      </Position>
      <Company>{company}</Company>
      <Location>{location}</Location>
    </StyledJobPostingCard>
  );
};

export default JobPostingCard;
