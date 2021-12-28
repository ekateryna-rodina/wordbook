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
  background: ${(props) => props.theme.white};
  margin-top: 0.5rem;
`;
const TextAreaStyle = css`
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.8rem;
  box-sizing: border-box;
`;
const TextareaStyled = styled.textarea`
  ${TextAreaStyle};
  border: ${(props) => `1px solid ${props.theme.primary}`};
`;

type TextareaProps = {
  name: RecordInputTypes;
};

const Textarea = ({ name }: TextareaProps) => {
  return (
    <Container>
      <Label htmlFor={name}>{name.toString()}</Label>
      <TextareaStyled
        required
        id={name}
        data-testid={`${name}-testid`}
      ></TextareaStyled>
    </Container>
  );
};

export default Textarea;
