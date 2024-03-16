/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { THEME_DARK } from '@/constants';
import { setTheme } from '@/store/slice';
import { AppDispatch, RootState } from '@/store/store';

import styles from './styles.scss';

export const Switch = ({ theme }) => {
  const themeStore = useSelector((state: RootState) => state.app.theme);
  const dispatch = useDispatch<AppDispatch>();

  const changeTheme = () => {
    dispatch(setTheme(themeStore === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles.switch}>
      <button
        type="button"
        className={`${styles.toogle_button} ${theme === THEME_DARK ? '' : styles.toogled}`}
        onClick={changeTheme}
        aria-hidden
      >
        <div className={styles.thumb} />
      </button>
    </div>
  );
};
