import React from 'react';
import styled from 'styled-components';

const SearchBarButtonStyled = styled.button`
  background: white;
  border: none;
  padding: 0.2rem;
  border-radius: 10px;
  box-shadow: ${(props) => `0 3px 7px ${props.theme.colors.primary}21`};
  margin: 0.5rem;
  &:focus {
    outline: 0;
    box-shadow: ${(props) => `0 3px 7px ${props.theme.colors.primary}87`};
  }
`;
const SearchBarButton: React.FC<any> = ({ children }) => {
  return <SearchBarButtonStyled>{children}</SearchBarButtonStyled>;
};

export default SearchBarButton;
