import React from 'react';

import logo from '@/assets/img/logo.svg';
import { LABELS } from '@/constants/index';

import classes from './styles.scss';

export const BlockDescription = () => (
  <div className={classes.wrapper}>
    <div className={classes.logo}>
      <img src={logo} alt="Company Logo" className={classes.logo} />
      <span>{LABELS.labelTitleCurrency}</span>
    </div>
    <div className={classes.description}>
      {LABELS.description}
    </div>
  </div>
);
