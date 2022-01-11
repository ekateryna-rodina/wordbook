import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { AddButtonSize } from '../../utils/enums';
import AddButton from '../AddButton.style';
import Card from '../Card.style';

const Container = styled.div`
  margin: 1rem 0;
`;
const Label = styled.label`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};

  text-transform: capitalize;
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ScrollableList = styled.div``;
type ClueProps = {
  text: string;
};
const Clue = ({ text }: ClueProps) => {
  return <Card>{text}</Card>;
};
const Clues = () => {
  const { word, clues, examples, partOfSpeech, transcription } = useAppSelector(
    (state) => state.suggestions
  );
  return (
    <Container>
      <HeaderRow>
        <Label>Clues</Label>
        <AddButton size={AddButtonSize.Small} />
      </HeaderRow>
      <ScrollableList>
        {clues.map((clue) => (
          <Clue text={clue} />
        ))}
      </ScrollableList>
    </Container>
  );
};

export default Clues;
