import React from 'react';
import styled, { css } from 'styled-components';
import { RecordInputTypes } from '../../utils/enums';

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0.5rem 0 1rem 0;
  padding: 0;
`;
const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: -0.5rem;
  background: ${(props) => props.theme.colors.white};
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
`;
const TextAreaStyle = css`
  resize: none;
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  line-height: 1.5rem;
  &:focus {
    outline-color: ${(props) => props.theme.colors.primary};
  }
`;
const TextareaStyled = styled.textarea`
  ${TextAreaStyle};
  border: ${(props) => `1px solid ${props.theme.colors.primary}21`};
  font-size: 1rem;
  color: ${(props) => `${props.theme.colors.primaryText}`};
`;

type TextareaProps = {
  type: RecordInputTypes;
};

const Textarea = ({ type }: TextareaProps) => {
  return (
    <Container>
      <Label htmlFor={type}>{type.toString()}</Label>
      <TextareaStyled
        required
        id={type}
        data-testid={`${type}-testid`}
      ></TextareaStyled>
    </Container>
  );
};

export default Textarea;
