import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { Icons } from '../../utils/enums';
import Icon from '../Icon.style';
import { SearchBarButton } from '../SearchBarButton';
import { SearchInput } from '../SearchInput';

const Container = styled.div`
  margin: 0;
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const FilterModal = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;
const SearchBar = () => {
  return (
    <>
      <Container>
        <SearchBarButton>
          <Icon
            iconType={Icons.Settings}
            size={30}
            color={theme.colors.primary}
            data-testid="filter-button-testid"
          />
        </SearchBarButton>
        <SearchInput />
      </Container>
      <FilterModal show={false} data-testid="filter-modal-testid" />
    </>
  );
};

export default SearchBar;
