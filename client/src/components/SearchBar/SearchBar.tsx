import React from 'react';
import styled from 'styled-components';
import { SearchInput } from '../SearchInput';

const Container = styled.div`
  margin: 0;
  width: 100%;
`;

const FilterButton = styled.button``;
const FilterModal = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;
const SearchBar = () => {
  return (
    <Container>
      <SearchInput />
      <FilterButton data-testid="filter-button-testid" />
      <FilterModal show={false} data-testid="filter-modal-testid" />
    </Container>
  );
};

export default SearchBar;
