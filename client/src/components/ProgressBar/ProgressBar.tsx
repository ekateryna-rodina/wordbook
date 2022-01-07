import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem 0 0 0;
  text-align: end;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.primary};
  & > progress {
    margin: 0.5rem auto 1rem auto;
    width: 100%;
    max-width: 30rem;
    appearance: 0;
    -webkit-appearance: none;
  }
  & > progress::-webkit-progress-bar {
    background-color: ${(props) => props.theme.colors.highlight};
    height: 0.5rem;
    border-radius: 0.2rem;
    border: 0;
  }
  & > progress::-webkit-progress-value {
    background-color: ${(props) => props.theme.colors.primary};
    height: 0.5rem;
    border-radius: 0.2rem;
    border: 0;
  }
`;

const Label = styled.span`
  margin-right: auto;
`;
type ProgressBarProps = {
  total: number;
  passed: number;
};
const ProgressBar = ({ total, passed }: ProgressBarProps) => {
  return (
    <Container>
      <Label>{`${passed} of ${total}`}</Label>
      <progress max={total} value={passed}></progress>
    </Container>
  );
};

export default ProgressBar;
