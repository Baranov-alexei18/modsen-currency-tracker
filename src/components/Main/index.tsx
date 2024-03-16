import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import themes from '@/assets/style/theme.scss';
import { Banner } from '@/components/ui-components/Banner/index';
import { THEME_DARK } from '@/constants';
import { RootState } from '@/store/store';

export const Main = () => {
  const theme = useSelector((state: RootState) => state.app.theme);

  return (
    <main className={`${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
      <Banner />
      <Outlet />
    </main>
  );
};
