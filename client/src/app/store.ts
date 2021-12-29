import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import counterReducer from '../features/counter/counter-slice';
import searchReducer from '../features/search/search-slice';
import { wordBookApi } from '../services/api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    [wordBookApi.reducerPath]: wordBookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wordBookApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
