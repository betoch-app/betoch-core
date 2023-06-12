import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAllLanguages, ILanguage } from './models/ILanguage.model';

const initialState: IAllLanguages = {
  supportedLanguages: [
    {
      name: 'English',
      languageCode: 'EN',
      countryCode: 'en-US',
      code: 'en',
    },
    {
      name: 'አማርኛ',
      languageCode: 'አማ',
      countryCode: 'am-ET',
      code: 'am',
    },
  ],
  currentSelectedLanguage: {
    name: 'English',
    languageCode: 'EN',
    code: 'en',
    countryCode: 'en-US',
  },
};

const languageSlice = createSlice({
  name: 'language',
  initialState: initialState,
  reducers: {
    addLanguage(state, action: PayloadAction<ILanguage>) {
      state.supportedLanguages.push(action.payload);
    },
    changeLanguage(state, action: PayloadAction<ILanguage>) {
      state.currentSelectedLanguage = action.payload;
    },
  },
});

export const { addLanguage, changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
