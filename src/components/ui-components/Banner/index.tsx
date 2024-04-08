import React from 'react';
import { useSelector } from 'react-redux';

import logo from '@/assets/img/logo.svg';
import { LABELS } from '@/constants/index';
import { THEME } from '@/constants/theme';
import { RootState } from '@/store/store';

import classes from './styles.scss';

export const Banner = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`${classes.banner} ${theme === THEME.DARK ? classes.dark : classes.light}`}>
      <div className={classes.banner_info}>
        <div className={classes.banner_info_wrapper}>
          <div className={classes.title}>
            <span className={classes.title_modsen}>{LABELS.bannerTitleCurrency}</span>
            <span className={classes.title_tracker}>{LABELS.tracker}</span>

          </div>
          <div className={classes.subtitle}>
            <span>
              {LABELS.bannerSubtitle}
            </span>
          </div>
        </div>
        <div>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
      </div>
    </div>
  );
};
