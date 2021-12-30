import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../utils/enums';
import Icon from '../Icon.style';

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.span`
  text-transform: capitalize;
`;
const Box = styled.div``;
const Word = styled.div``;
const Info = styled.div``;
const Transcription = styled.span``;
const SpeechPart = styled.span``;
const Subtitle = styled.h4``;
const Description = styled.p``;
const IconsContainer = styled.div``;
const NewWord = () => {
  return (
    <>
      <TitleRow>
        <Icon iconType={Icons.Academic} />
        <Title>new word</Title>
      </TitleRow>
      <Box>
        <Word>Unbiased</Word>
        <Info>
          <Transcription>ənˈbīəst</Transcription>
          <SpeechPart>adjective</SpeechPart>
        </Info>
        <Subtitle>definition</Subtitle>
        <Description>
          Showing no prejudice for or against something; impartial.
        </Description>
        <Subtitle>example</Subtitle>
        <Description>
          Showing no prejudice for or against something; impartial.
        </Description>
        <IconsContainer>
          <Icon iconType={Icons.AddToCollection} />
          <Icon iconType={Icons.Listen} />
        </IconsContainer>
      </Box>
    </>
  );
};

export default NewWord;
