import React from 'react';

import { ButtonProps } from '@/components/ui-components/Button/type';

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
