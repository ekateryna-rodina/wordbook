import React from 'react';
import styled from 'styled-components';
import { theme } from '../globalStyles';
import { Icons } from '../utils/enums';
import Icon from './Icon.style';

const AddContainerStyled = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.3rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.highlight};
  display: flex;
  justify-content: center;
  align-items: center;
  outline-offset: 0.2rem;
  outline: ${(props) => `1px dashed ${props.theme.colors.highlight}`};
`;

const AddButton = () => {
  return (
    <AddContainerStyled>
      <Icon iconType={Icons.New} color={theme.colors.primary} />
    </AddContainerStyled>
  );
};

export default AddButton;
