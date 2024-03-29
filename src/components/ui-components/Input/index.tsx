/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import classes from './styles.scss';

export const Input: React.FC<any> = (props) => {
  const { value } = props;
  return (
    <input {...props} value={value} className={classes.input} />
  );
};
