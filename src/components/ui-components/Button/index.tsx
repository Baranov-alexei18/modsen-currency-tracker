import React, { ReactNode } from 'react';

import classes from './styles.scss';

type ButtonProps = {
  handleClick: () => void;
  children: ReactNode,
  disabled?: boolean
}

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
