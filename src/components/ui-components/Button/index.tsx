import React from 'react';

import { ButtonProps } from '@/types/components/buttonType';

import classes from './styles.scss';

export const Button = React.memo((
  { handleClick, children, disabled = false }: ButtonProps,
) => (
  <button
    type="button"
    className={classes.button}
    onClick={handleClick}
    disabled={disabled}
  >
    {children}
  </button>
));
