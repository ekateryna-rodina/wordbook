import { useEffect, useState } from 'react';
import { Question } from '../../features/training/training-slice';
import { ChallengeType } from '../enums';

const QuestionTypeDescription = {
  [ChallengeType.Synonym]: 'What a word would you use instead of',
  [ChallengeType.Antonym]: 'What a word is an opposite of',
  [ChallengeType.Dictation]: 'What did you hear?',
  [ChallengeType.Missing]: 'Fill the gap(s)',
  [ChallengeType.Order]: 'Construct the sentence from the given words',
  [ChallengeType.Pronunciation]: 'Pronounce the word',
};
const useQuestionDetails = (
  questions: Record<number, Question>,
  currentQuestionId: number
) => {
  const [type, setType] = useState<ChallengeType | null>();
  const [questionTypeDescription, setQuestionTypeDescription] = useState<
    string | null
  >();
  const [question, setQuestion] = useState<string | null>();
  const [answer, setAnswer] = useState<string | string[]>();

  useEffect(() => {
    if (!Object.keys(questions).length || !currentQuestionId) return;
    const question = questions[currentQuestionId];
    setType(question.type);
    setQuestionTypeDescription(QuestionTypeDescription[question.type]);
    setQuestion(question.question);
    setAnswer(question.answer);
  }, [currentQuestionId, questions]);
  return [type, questionTypeDescription, question, answer];
};

export default useQuestionDetails;

// import { useEffect, useState } from 'react';
// import { Question } from '../../features/training/training-slice';
// import { ChallengeType } from '../enums';

// export default function useQuestionDetails(
//   questions: Record<number, Question>,
//   currentQuestionId: number
// ) {
//   const [type, setType] = useState<ChallengeType | null>();
//   const [questionTypeDescription, setQuestionTypeDescription] = useState<
//     string | null
//   >();
//   const [question, setQuestion] = useState<string | null>();
//   const [answer, setAnswer] = useState<string | string[]>();

//   useEffect(() => {
//     const question = questions[currentQuestionId];
//     setType(question.type);
//     setQuestionTypeDescription(QuestionTypeDescription[question.type]);
//     setQuestion(question.question);
//     setAnswer(question.answer);
//   }, [currentQuestionId, questions]);
//   return [type, questionTypeDescription, question, answer];
// }
