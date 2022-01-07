import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../components/Icon.style';
import { ProgressBar } from '../components/ProgressBar';
import { Question } from '../components/Question';
import { theme } from '../globalStyles';
import { Icons } from '../utils/enums';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 4.1rem);
  padding: 1.5rem 1rem 1rem 1rem;
  background: white;
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
const BackButton = styled.div``;
const Header = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
`;
const QuestionContainer = styled.div`
  width: 100%;
  height: calc(100% - 5.7rem * 2);
  background: ${(props) => `${props.theme.colors.highlight}55`};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 1rem auto;
  gap: 1rem;
`;
const buttonStyle = css`
  border: none;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Sos = styled.button`
  ${buttonStyle};
  width: 2.1rem;
  height: 2.1rem;
  background: ${(props) => props.theme.colors.white};
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  border-radius: 0.5rem;
`;
const Check = styled.button`
  ${buttonStyle};
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.secondary};
`;
const Next = styled.button`
  ${buttonStyle};
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
`;
const Training = () => {
  return (
    <Container>
      <HeaderRow>
        <BackButton>
          <Icon iconType={Icons.Back} color={theme.colors.primary} />
        </BackButton>
        <Header>Training</Header>
      </HeaderRow>
      <ProgressBar />
      <QuestionContainer>
        <Question />
      </QuestionContainer>
      <ControlsContainer>
        <Sos>
          <Icon iconType={Icons.Sos} size={25} color={theme.colors.primary} />
        </Sos>
        <Check>
          <Icon iconType={Icons.Play} color={'white'} size={35} />
        </Check>
        <Next>
          <Icon iconType={Icons.Next} color={'white'} size={25} fill={false} />
        </Next>
      </ControlsContainer>
    </Container>
  );
};

export default Training;
