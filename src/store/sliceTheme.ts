import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeState, ThemesType } from '@/types/type';

const initialState: ThemeState = {
  theme: 'dark',
};

const appSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemesType>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
