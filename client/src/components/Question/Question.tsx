import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import useQuestionDetails from '../../utils/hooks/useQuestionDetails';

const QuestionDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const QuestionDescription = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.dark};
`;
const AnswerInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.primary}`};
  width: calc(100% - 4rem);
  margin: 2rem;

  &:focus {
    outline: none;
  }
`;
const QuestionDetails = styled.div`
  margin-top: 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
  font-weight: 600;
`;
const Question = () => {
  const { questions = {}, currentQuestionId = 0 } = useAppSelector(
    (state) => state.training
  );
  const [type, questionTypeDescription, question, answer] = useQuestionDetails(
    questions,
    currentQuestionId
  );

  return (
    <>
      <QuestionDescriptionContainer>
        <QuestionDescription>{questionTypeDescription}</QuestionDescription>
      </QuestionDescriptionContainer>
      <QuestionDetails>{question}?</QuestionDetails>
      <AnswerInput type="text"></AnswerInput>
    </>
  );
};

export default Question;
