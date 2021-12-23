import styled from "styled-components";
import { IconButton } from "./Button";

const StyledFilterGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary.white};
  transform: translateY(-50%);
  padding: 1.6rem;
`;

const FilterGroup = () => {
  return (
    <StyledFilterGroup>
      <IconButton>
        <img src={`${process.env.PUBLIC_URL}/assets/mobile/icon-filter.svg`} alt="Filter" />
      </IconButton>
      <IconButton variant="primary">
        <img src={`${process.env.PUBLIC_URL}/assets/mobile/icon-search.svg`} alt="Search" />
      </IconButton>
    </StyledFilterGroup>
  );
};

export default FilterGroup;
