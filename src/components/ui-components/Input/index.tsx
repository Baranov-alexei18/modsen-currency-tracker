/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import classes from './styles.scss';

export const Input: React.FC<any> = ({
  className, value, onChange,
}) => (
  <input className={`${classes.input} ${className}`} value={value} onChange={(e) => onChange(e)} />
);
