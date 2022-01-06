import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { Icons, SpeechPart } from '../../utils/enums';
import Icon from '../Icon.style';

const Container = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: ${(props) => `1px solid ${props.theme.colors.primary}24`};
  position: relative;
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Word = styled.span`
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.2rem;
  flex: 2;
`;
const PartOfSpeech = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1rem;
`;
const Description = styled.p`
  color: ${(props) => `${props.theme.colors.primary}87`};
  font-size: 1rem;
`;
const Example = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
`;
const PartOfSpeechContainer = styled.div`
  flex: 1;
  align-self: flex-start;
  display: flex;
  justify-content: flex-end;
`;
type CollectionItemProps = {
  isIdiom: boolean;
  word: string;
  description: string;
  examples: string[];
  tags: string[];
  isFavorite: boolean;
  synonyms?: string[];
  antonyms?: string[];
  partOfSpeach?: SpeechPart;
  collectionId?: number;
  transcription?: string;
};
const CollectionItem = ({
  isIdiom,
  word,
  description,
  examples,
  tags,
  isFavorite,
  synonyms = [],
  antonyms = [],
  partOfSpeach = SpeechPart.None,
  collectionId = 1,
  transcription = '',
}: CollectionItemProps) => {
  return (
    <Container>
      <HeaderRow>
        <Word>{`${word[0].toUpperCase()}${word.slice(1)}`}</Word>
        <PartOfSpeechContainer>
          {partOfSpeach !== SpeechPart.None && <PartOfSpeech></PartOfSpeech>}
          {isIdiom && (
            <Icon
              iconType={Icons.Idiom}
              size={20}
              color={theme.colors.tertiary}
            />
          )}
        </PartOfSpeechContainer>
      </HeaderRow>
      <Description>{description}</Description>
      <Example>"{examples[0]}"</Example>
    </Container>
  );
};

export default CollectionItem;
