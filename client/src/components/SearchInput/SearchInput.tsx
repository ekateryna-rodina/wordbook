import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { input } from '../../features/search/search-slice';
import { theme } from '../../globalStyles';
import { Icons } from '../../utils/enums';
import Icon from '../Icon.style';
import { SearchBarButton } from '../SearchBarButton';

const Input = styled.input`
  width: calc(100% - 6rem);
  border-radius: 1rem;
  outline: 0;
  border: ${(props) => `1px solid ${props.theme.colors.primary}21`};
  font-size: 1rem;
  color: ${(props) => `${props.theme.colors.primaryText}`};
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-family: Lato, sans-serif;
  }
`;

const SearchInput = () => {
  const value = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();
  const inputSearchHandler = (value: string) => {
    dispatch(input(value));
  };
  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={(e) => inputSearchHandler(e.target.value)}
        data-testid="search-input-testid"
        placeholder="Search..."
      />
      <SearchBarButton>
        <Icon iconType={Icons.Search} size={30} color={theme.colors.primary} />
      </SearchBarButton>
    </>
  );
};

export default SearchInput;
