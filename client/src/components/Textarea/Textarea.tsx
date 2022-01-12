import React from 'react';
import styled from 'styled-components';
import { RecordInputTypes } from '../../utils/enums';

const TextareaStyled = styled.textarea.attrs((props: any) => ({
  ref: props.ref,
}))`
  border: none;
  background: transparent;
  font-size: 0.8rem;
  color: ${(props) => `${props.theme.colors.primaryText}`};
  resize: none;
  width: 100%;
  line-height: 1.5rem;
  &:focus {
    outline: none;
  }
`;

type TextareaProps = {
  type: RecordInputTypes;
};

const Textarea = React.forwardRef((props: TextareaProps, ref) => {
  const { type } = props;
  return (
    <TextareaStyled
      required
      id={type}
      data-testid={`${type}-testid`}
      ref={ref}
    ></TextareaStyled>
  );
});

export default Textarea;
