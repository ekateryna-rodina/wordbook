import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { Icons } from '../../utils/enums';
import Icon from '../Icon.style';

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
`;
const Title = styled.span`
  text-transform: capitalize;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 0.3rem;
  font-family: Quicksand, sans-serif;
`;
const Box = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: ${(props) => `1px solid ${props.theme.colors.primary}24`};
`;
const Word = styled.div`
  padding: 0.5rem 0;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  width: max-content;
  border-radius: 0.5rem;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Transcription = styled.span`
  color: rgba(0, 0, 0, 0.3);
  padding: 0.1rem;
`;
const SpeechPart = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
`;

const Description = styled.p`
  line-height: 1.5rem;
`;

const Example = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
`;
const IconsContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const NewWord = () => {
  return (
    <>
      <TitleRow>
        <Icon
          iconType={Icons.Academic}
          size={25}
          color={theme.colors.secondary}
        />
        <Title>new word</Title>
      </TitleRow>
      <Box>
        <Word>Unbiased</Word>
        <Info>
          <Transcription>ənˈbīəst</Transcription>
          <SpeechPart>adjective</SpeechPart>
        </Info>

        <Description>
          Showing no prejudice for or against something; impartial.
        </Description>
        <Example>
          To be unbiased, you have to be 100% fair — you can't have a favorite,
          or opinions that would color your judgment.
        </Example>
        <IconsContainer>
          <Icon
            iconType={Icons.AddToCollection}
            color={theme.colors.secondary}
            size={25}
          />
          <Icon
            iconType={Icons.Listen}
            color={theme.colors.primary}
            size={25}
          />
        </IconsContainer>
      </Box>
    </>
  );
};

export default NewWord;
