import React from 'react';
import styled from 'styled-components';
import { theme } from '../globalStyles';
import { AddButtonSize, Icons } from '../utils/enums';
import Icon from './Icon.style';

const ButtonSize = {
  [AddButtonSize.Small]: '1.5rem',
  [AddButtonSize.Large]: '2rem',
};
const IconSize = {
  [AddButtonSize.Small]: 10,
  [AddButtonSize.Large]: 15,
};
const AddContainerStyled = styled.div<AddButtonProps>`
  --size: ${({ size }) => ButtonSize[size ?? AddButtonSize.Large]};
  width: var(--size);
  height: var(--size);
  margin-right: 0.3rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.highlight};
  display: flex;
  justify-content: center;
  align-items: center;
  outline-offset: 0.2rem;
  outline: ${(props) => `1px dashed ${props.theme.colors.highlight}`};
`;

type AddButtonProps = {
  size?: AddButtonSize;
};
const AddButton = ({ size = AddButtonSize.Large }: AddButtonProps) => {
  return (
    <AddContainerStyled size={size}>
      <Icon
        iconType={Icons.New}
        color={theme.colors.primary}
        size={IconSize[size]}
      />
    </AddContainerStyled>
  );
};

export default AddButton;
