import React from 'react';

import { InputProps } from '@/components/ui-components/Input/type';

import classes from './styles.scss';

export const Input: React.FC<InputProps> = ({ value, ...rest }) => (
  <input {...rest} value={value} className={classes.input} />
);
