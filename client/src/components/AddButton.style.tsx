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
const AddContainerStyled = styled.button.attrs((props: AddButtonProps) => ({
  onClick: props.onClickHandler,
}))<AddButtonProps>`
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
  border: 0;
`;

type AddButtonProps = {
  size?: AddButtonSize;
  onClickHandler: () => void;
};
const AddButton = ({
  size = AddButtonSize.Large,
  onClickHandler,
}: AddButtonProps) => {
  return (
    <AddContainerStyled size={size} onClickHandler={onClickHandler}>
      <Icon
        iconType={Icons.New}
        color={theme.colors.primary}
        size={IconSize[size]}
      />
    </AddContainerStyled>
  );
};

export default AddButton;
