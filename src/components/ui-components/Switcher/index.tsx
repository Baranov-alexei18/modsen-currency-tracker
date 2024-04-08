import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { THEME } from '@/constants/theme';
import { setTheme } from '@/store/sliceTheme';
import { AppDispatch, RootState } from '@/store/store';

import styles from './styles.scss';

export const SwitchApp: React.FC<{dataTestId: string;}> = ({ dataTestId }) => {
  const themes = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  const changeTheme = () => {
    dispatch(setTheme(themes === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  };

  return (
    <div className={styles.switch}>
      <button
        data-testid={dataTestId}
        type="button"
        aria-label="Switch-theme"
        className={`${styles.toogle_button} ${themes === THEME.DARK ? styles.dark : styles.toogled}`}
        onClick={changeTheme}
      >
        <div className={styles.thumb} />
      </button>
    </div>
  );
};
