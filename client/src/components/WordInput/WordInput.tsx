import React from 'react';
import { RecordInputTypes } from '../../utils/enums';
import { Textarea } from '../Textarea';

const WordInput = () => {
  return <Textarea type={RecordInputTypes.Word} />;
};

export default WordInput;
