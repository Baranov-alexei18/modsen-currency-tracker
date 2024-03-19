import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './sliceData';
import themeReducer from './sliceTheme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
