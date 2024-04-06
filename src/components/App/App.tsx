import React from 'react';
import { useSelector } from 'react-redux';

import themes from '@/assets/style/theme.scss';
import { THEME } from '@/constants/theme';
import { RootState } from '@/store/store';

import { Footer } from '../Footer/index';
import { Header } from '../Header/index';
import { Main } from '../Main/index';

import '@/assets/style/index.scss';

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={`${theme === THEME.DARK ? themes.theme_dark : themes.theme_light}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
