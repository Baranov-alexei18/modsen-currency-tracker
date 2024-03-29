import React from 'react';

import classes from './styles.scss';

export const Loader = () => (
  <div data-testid="loading" className={classes.wrapper}>
    <div className={classes.loader} />
  </div>
);
