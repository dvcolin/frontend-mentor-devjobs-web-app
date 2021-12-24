import styled from "styled-components";
import { IconButton } from "./Button";
import Input from "./Input";

const StyledFilterGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary.white};
  transform: translateY(-50%);
  padding: 1.6rem;
  border-radius: 0.5rem;
`;

const SearchInput = styled(Input)`
  width: 60%;
`;

const IconButtons = styled.div`
  display: flex;
  margin-left: auto;

  & > button:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

const FilterGroup = () => {
  return (
    <StyledFilterGroup>
      <SearchInput type="text" placeholder="Filter by title..." />
      <IconButtons>
        <IconButton>
          <img src={`${process.env.PUBLIC_URL}/assets/mobile/icon-filter.svg`} alt="Filter" />
        </IconButton>
        <IconButton variant="primary">
          <img src={`${process.env.PUBLIC_URL}/assets/mobile/icon-search.svg`} alt="Search" />
        </IconButton>
      </IconButtons>
    </StyledFilterGroup>
  );
};

export default FilterGroup;
