import React from 'react';
import { ChallengeType } from '../../utils/enums';
import { ChallengeMissing } from '../ChallengeMissing';

type ChallengeProps = {
  type: ChallengeType;
  sentence?: string;
  missing?: string[];
};
const Challenge = ({ type, sentence = '', missing = [] }: ChallengeProps) => {
  const renderChallenge = () => {
    if (type === ChallengeType.Missing)
      return <ChallengeMissing sentence={sentence} missing={missing} />;
  };
  return <>{renderChallenge()}</>;
};

export default Challenge;
