import styled from "styled-components";
import JobPostingCard, { JobPostingCardProps } from "./JobPostingCard";

interface JobPostingListProps {
  posts: JobPostingCardProps[];
}

const StyledJobPostingList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4.8rem 0;
`;

const JobPostingList = ({ posts }: JobPostingListProps) => {
  return (
    <StyledJobPostingList>
      {posts.map(
        ({
          id,
          company,
          logo,
          logoBackground,
          position,
          postedAt,
          contract,
          location,
          website,
          apply,
          description,
          requirements,
          role,
        }) => (
          <JobPostingCard
            key={id}
            id={id}
            company={company}
            logo={logo}
            logoBackground={logoBackground}
            position={position}
            postedAt={postedAt}
            contract={contract}
            location={location}
            website={website}
            apply={apply}
            description={description}
            requirements={requirements}
            role={role}
          />
        )
      )}
    </StyledJobPostingList>
  );
};

export default JobPostingList;
