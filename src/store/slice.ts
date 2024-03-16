import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  theme: 'dark' | 'light';
}

const initialState: AppState = {
  theme: 'dark',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<'dark' | 'light'>) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
