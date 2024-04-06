import React from 'react';
import { useSelector } from 'react-redux';

import logo from '@/assets/img/logo.svg';
import { LABELS } from '@/constants/index';
import { THEME } from '@/constants/theme';
import { RootState } from '@/store/store';

import styles from './styles.scss';

export const Banner = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`${styles.banner} ${theme === THEME.DARK ? styles.dark : styles.light}`}>
      <div className={styles.banner_info}>
        <div className={styles.banner_info_wrapper}>
          <div className={styles.title}>
            <span className={styles.title_modsen}>{LABELS.bannerTitleCurrency}</span>
            <span className={styles.title_tracker}>{LABELS.tracker}</span>

          </div>
          <div className={styles.subtitle}>
            <span>
              {LABELS.bannerSubtitle}
            </span>
          </div>
        </div>
        <div>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};
