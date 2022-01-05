import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: 2rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const ValueContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 0.3rem;
  color: transparent;
`;
const Box = styled.input`
  position: absolute;
  inset: 0;
  max-width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.primary}24`};
  padding: 0.3rem;

  &:focus {
    outline-color: ${(props) => props.theme.colors.primary};
  }
`;
type ChallengeMissingProps = {
  sentence: string;
  missing: string[];
};

const Missing: React.FC<any> = ({ value }: { value: string }) => {
  const [answer, setAnswer] = useState<string>('');
  return (
    <>
      <ValueContainer>
        {value}
        <Box
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </ValueContainer>
      <span>&nbsp;</span>
    </>
  );
};
const Word = ({ word }: { word: string }) => {
  return (
    <>
      <span>{word}&nbsp;</span>
    </>
  );
};

const ChallengeMissing = ({ sentence, missing }: ChallengeMissingProps) => {
  return (
    <Container>
      {sentence
        .split(' ')
        .map((w) =>
          missing.includes(w) ? (
            <Missing value={w + Math.random().toString()} key={w} />
          ) : (
            <Word word={w} key={w + Math.random().toString()} />
          )
        )}
    </Container>
  );
};

export default ChallengeMissing;
