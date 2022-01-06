import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { Icons, SpeechPart } from '../../utils/enums';
import Icon from '../Icon.style';

const Container = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: ${(props) => `1px solid ${props.theme.colors.primary}24`};
  display: flex;
  flex-direction: column;
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Word = styled.span`
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.1rem;
  flex: 3;
`;
const PartOfSpeech = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 0.8rem;
  margin-top: 2px;
`;
const Description = styled.p`
  color: ${(props) => `${props.theme.colors.primary}87`};
  font-size: 0.8rem;
`;
const Example = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
  font-size: 0.8rem;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
`;
const DetailsIconContainer = styled.div`
  margin-left: auto;
`;
const MicrophoneIconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.highlight};
  display: flex;
  justify-content: center;
  align-items: center;
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

        {partOfSpeach !== SpeechPart.None && (
          <PartOfSpeech>{SpeechPart[partOfSpeach]}</PartOfSpeech>
        )}
        {isIdiom && (
          <Icon
            iconType={Icons.Idiom}
            size={20}
            color={theme.colors.tertiary}
          />
        )}
      </HeaderRow>
      <Description>{description}</Description>
      <Example>"{examples[0]}"</Example>
      <IconsContainer>
        <Icon iconType={Icons.Listen} color={theme.colors.gray} />
        <MicrophoneIconContainer>
          <Icon iconType={Icons.Microphone} color={theme.colors.gray} />
        </MicrophoneIconContainer>
        <Icon
          iconType={isFavorite ? Icons.HeartFull : Icons.HeartEmpty}
          color={theme.colors.red}
        />
        <DetailsIconContainer>
          <Icon iconType={Icons.Enter} color={theme.colors.gray} />
        </DetailsIconContainer>
      </IconsContainer>
    </Container>
  );
};

export default CollectionItem;
