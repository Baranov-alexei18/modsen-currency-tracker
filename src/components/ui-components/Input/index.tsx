import React, { InputHTMLAttributes } from 'react';

import classes from './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
}

export const Input: React.FC<InputProps> = ({ value, ...rest }) => (
  <input {...rest} value={value} className={classes.input} />
);
