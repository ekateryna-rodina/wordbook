import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isOpened: boolean;
  title: string;
}

const initialState: ModalState = {
  isOpened: false,
  title: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.isOpened = true;
      state.title = action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
