import React from 'react';

import logo from '@/assets/img/logo.svg';
import { bannerSubtitle, bannerTitleCurrency, tracker } from '@/constants/index';

import styles from './styles.scss';

export const Banner = () => (
  <div className={styles.banner}>
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
