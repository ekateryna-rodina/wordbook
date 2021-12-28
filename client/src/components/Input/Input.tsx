import React from 'react';
import styled from 'styled-components';
import { RecordInputTypes } from '../../utils/enums';

const Label = styled.label``;

type InputProps = {
  name: RecordInputTypes;
};
const Input = ({ name }: InputProps) => {
  return (
    <>
      <Label></Label>
    </>
  );
};

export default Input;
