import React from 'react';
import { useSelector } from 'react-redux';

import logo from '@/assets/img/logo.svg';
import { THEME_DARK } from '@/constants';
import { bannerSubtitle, bannerTitleCurrency, tracker } from '@/constants/index';
import { RootState } from '@/store/store';

import styles from './styles.scss';

export const Banner = () => {
  const theme = useSelector((state: RootState) => state.app.theme);

  return (
    <div className={`${styles.banner} ${theme === THEME_DARK ? styles.dark : styles.light}`}>
      <div className={styles.banner_info}>
        <div className={styles.banner_info_wrapper}>
          <div className={styles.title}>
            <span className={styles.title_modsen}>{bannerTitleCurrency}</span>
            <span className={styles.title_tracker}>{tracker}</span>

          </div>
          <div className={styles.subtitle}>
            <span>
              {bannerSubtitle}
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
