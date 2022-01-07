import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TrainingState {
  totalCards: number;
  passed: number;
}

const initialState: TrainingState = {
  totalCards: 10,
  passed: 5,
};

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    updateProgress(
      state,
      action: PayloadAction<{ total: number; passed: number }>
    ) {
      state.totalCards = action.payload.total;
      state.passed = action.payload.passed;
    },
  },
});

export const { updateProgress } = trainingSlice.actions;
export default trainingSlice.reducer;
