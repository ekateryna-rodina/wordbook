import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChallengeType } from '../../utils/enums';

export interface Question {
  type: ChallengeType;
  question: string;
  answer: string | string[];
  isPassed: boolean;
  isTried: boolean;
  isSkipped: boolean;
  lastUpdate: Date | null;
}

interface TrainingState {
  progress: {
    totalCards: number;
    passed: number;
  };
  questions?: Record<number, Question>;
  currentQuestionId?: number;
}

const initialState: TrainingState = {
  progress: {
    totalCards: 10,
    passed: 5,
  },
  questions: {
    1: {
      type: ChallengeType.Synonym,
      question: 'very strong',
      answer: ['forceful', 'extreme', 'potent'],
      isPassed: false,
      isTried: false,
      isSkipped: false,
      lastUpdate: null,
    },
  },
  currentQuestionId: 1,
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    updateProgress(
      state,
      action: PayloadAction<{ total: number; passed: number }>
    ) {
      state.progress.totalCards = action.payload.total;
      state.progress.passed = action.payload.passed;
    },
  },
});

export const { updateProgress } = trainingSlice.actions;
export default trainingSlice.reducer;
