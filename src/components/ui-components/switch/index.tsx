import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { THEME_DARK, THEME_LIGHT } from '@/constants';
import { setTheme } from '@/store/sliceTheme';
import { AppDispatch, RootState } from '@/store/store';
import { ThemeState } from '@/types/type';

import styles from './styles.scss';

export const Switch: React.FC<ThemeState> = ({ theme }) => {
  const themeStore = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const changeTheme = () => {
    dispatch(setTheme(themeStore === THEME_LIGHT ? THEME_DARK : THEME_LIGHT));
  };

  return (
    <div className={styles.switch}>
      <button
        type="button"
        className={`${styles.toogle_button} ${theme === THEME_DARK ? styles.dark : styles.toogled}`}
        onClick={changeTheme}
        aria-hidden
      >
        <div className={styles.thumb} />
      </button>
    </div>
  );
};
