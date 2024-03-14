import React from 'react';

import logo from '@/assets/img/logo.svg';

import styles from './styles.scss';

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_info}>
        <div>
          <div className={styles.title}>
            <span className={styles.title_modsen}>Modsen Currency</span>
            <p className={styles.title_tracker}>Tracker</p>

          </div>
          <div className={styles.subtitle}>
            <span>
              Quotes for the dollar and other
              international currencies.
            </span>
          </div>
        </div>
        <div>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}
