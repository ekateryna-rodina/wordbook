import { createSlice } from '@reduxjs/toolkit';

interface SuggestionsState {
  word: string | null;
  clues: string[];
  examples: string[];
  partOfSpeech: string | null;
  transcription: string | null;
}

const initialState: SuggestionsState = {
  word: 'dexterity',
  clues: [
    'skill in performing tasks, expecially with hands',
    'skill in performing tasks, expecially with hands',
    'skill in performing tasks, expecially with hands',
  ],
  examples: [
    'His dexterity was amazing',
    'In his operations he was remarkable for his skill and dexterity, and for his great readiness of resource.',
    'He showed, however, considerable dexterity in playing off the emperor against Alexander III.',
  ],
  partOfSpeech: 'noun',
  transcription: `dekˈster.ə.ti`,
};

const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState,
  reducers: {},
});

export const {} = suggestionsSlice.actions;
export default suggestionsSlice.reducer;
