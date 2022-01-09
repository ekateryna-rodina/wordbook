import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScreenMode } from '../../utils/enums';

interface SettingsState {
  mode: ScreenMode;
  notificationsInterval: number;
}

const initialState: SettingsState = {
  mode: ScreenMode.Light,
  notificationsInterval: 30,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setScreenMode(state, action: PayloadAction<ScreenMode>) {
      state.mode = action.payload;
    },
    setNotificationsInterval(state, action: PayloadAction<number>) {
      state.notificationsInterval = action.payload;
    },
  },
});

export const { setScreenMode, setNotificationsInterval } =
  settingsSlice.actions;
export default settingsSlice.reducer;
