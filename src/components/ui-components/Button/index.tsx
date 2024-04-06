import React from 'react';

import { ButtonProps } from '@/types/components/buttonType';

import classes from './styles.scss';

export const Button: React.FC<Partial<ButtonProps>> = (
  { handleClick, children, disabled = false },
) => (
  <button
    type="button"
    className={classes.button}
    onClick={handleClick}
    disabled={disabled}
  >
    {children}
  </button>
);
