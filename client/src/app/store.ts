import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import counterReducer from '../features/counter/counter-slice';
import dashboardReducer from '../features/dashboard/dashboard-slice';
import modalReducer from '../features/modal/modal-slice';
import searchReducer from '../features/search/search-slice';
import settingsReducer from '../features/settings/settings-slice';
import trainingReducer from '../features/training/training-slice';
import { wordBookApi } from '../services/api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    dashboard: dashboardReducer,
    modal: modalReducer,
    training: trainingReducer,
    settings: settingsReducer,
    [wordBookApi.reducerPath]: wordBookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wordBookApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
