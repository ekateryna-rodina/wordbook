import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalType } from '../../utils/enums';

interface ModalState {
  isOpened: boolean;
  type: ModalType;
}

const initialState: ModalState = {
  isOpened: false,
  type: ModalType.None,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<ModalType>) {
      state.isOpened = true;
      state.type = action.payload;
    },
    closeModal(state) {
      state.isOpened = false;
      state.type = ModalType.None;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
