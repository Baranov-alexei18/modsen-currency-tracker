/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { THEME_DARK, THEME_LIGHT } from '@/constants';
import { setTheme } from '@/store/sliceTheme';
import { AppDispatch, RootState } from '@/store/store';

import styles from './styles.scss';

type SwitchProps = {
  theme: string;
  dataTestId: string;
}

export const Switch: React.FC<SwitchProps> = ({ theme, dataTestId }) => {
  const themeStore = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const changeTheme = () => {
    dispatch(setTheme(themeStore === THEME_LIGHT ? THEME_DARK : THEME_LIGHT));
  };

  return (
    <div
      className={styles.switch}
    >
      <button
        data-testid={dataTestId}
        type="button"
        className={`${styles.toogle_button} ${theme === THEME_DARK ? styles.dark : styles.toogled}`}
        onClick={changeTheme}
      >
        <div className={styles.thumb} />
      </button>
    </div>
  );
};
