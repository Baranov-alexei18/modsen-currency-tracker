import { ThemeState } from '@/types/themeType';

import themeReducer, { setTheme } from './sliceTheme';

describe('Slice theme', () => {
  test('should set the theme the light', () => {
    const initialState:ThemeState = { theme: 'dark' };
    const newState = themeReducer(initialState, setTheme('light'));

    expect(newState.theme).toEqual('light');
  });
  test('should set the theme the dark', () => {
    const initialState:ThemeState = { theme: 'light' };
    const newState = themeReducer(initialState, setTheme('dark'));

    expect(newState.theme).toEqual('dark');
  });
});
