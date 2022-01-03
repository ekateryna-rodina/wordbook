import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardTabs } from '../../utils/enums';

interface DashboardState {
  tabSelected: DashboardTabs;
}

const initialState: DashboardState = {
  tabSelected: DashboardTabs.Challenge,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    tabSelectedChanged(state, action: PayloadAction<DashboardTabs>) {
      state.tabSelected = action.payload;
    },
  },
});

export const { tabSelectedChanged } = dashboardSlice.actions;
export default dashboardSlice.reducer;
