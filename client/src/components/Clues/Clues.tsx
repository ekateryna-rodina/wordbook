import React, { useEffect, useState } from 'react';
import { useInView } from 'react-hook-inview';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { AddButtonSize, Icons, RecordInputTypes } from '../../utils/enums';
import AddButton from '../AddButton.style';
import Card from '../Card.style';
import Icon from '../Icon.style';
import ScrollableHorizontalList from '../ScrollableHorizontalList.style';
import { Textarea } from '../Textarea';

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
  margin-bottom: 0.5rem;
`;
const NumberOfClues = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.primary};
  border: ${(props) => `1px solid ${props.theme.colors.highlight}`};
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 0.5rem;
`;

const ClueContainer = styled.div`
  height: 100%;
`;
const Text = styled.p`
  margin: 0.5em 0 0.5em 0;
`;
const TextareaContainer = styled.div`
  max-height: 100%;
  margin: 0.1rem;
`;
const RemoveButton = styled.button`
  background: transparent;
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-top: auto;
`;
type ClueProps = {
  text?: string;
  isInput: boolean;
};

const renderCardContent = (isInput: boolean, text?: string) => {
  return isInput ? (
    <TextareaContainer>
      <Textarea type={RecordInputTypes.Clue} />
    </TextareaContainer>
  ) : (
    <Text>{text}</Text>
  );
};
const Clue = ({ text, isInput }: ClueProps) => {
  // card: isWide,
  // user adds a card - new  card with area appears
  // applies just to clue component
  //  iswide applies to a card
  const [ref, inView] = useInView({
    rootMargin: '0% -50% 0% -50%',
    threshold: 0,
  });
  return (
    <Card isWide={true} background={'transparent'}>
      {renderCardContent(isInput, text)}
      <RemoveButton>
        <Icon iconType={Icons.Minus} />
      </RemoveButton>
    </Card>
  );
};
const Clues = () => {
  const { word, clues, examples, partOfSpeech, transcription } = useAppSelector(
    (state) => state.suggestions
  );
  const [addClue, setAddClue] = useState(false);
  useEffect(() => {}, [addClue]);
  return (
    <Container>
      <HeaderRow>
        <Label>Clues</Label>
        <NumberOfClues>3</NumberOfClues>
        <AddButton size={AddButtonSize.Small} />
      </HeaderRow>
      <ScrollableHorizontalList height="6.5rem">
        <Clue isInput={true} />
        {clues.map((clue) => (
          <Clue text={clue} isInput={false} />
        ))}
      </ScrollableHorizontalList>
    </Container>
  );
};

export default Clues;
