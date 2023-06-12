import { configureStore } from '@reduxjs/toolkit';

import languageSlice from '../slices/languagesSlice';
const store = configureStore({
  reducer: { languageSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
