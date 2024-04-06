import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeState, ThemesType } from '@/types/themeType';

const initialState: ThemeState = {
  theme: 'dark',
};

const setThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemesType>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = setThemeSlice.actions;

export default setThemeSlice.reducer;
