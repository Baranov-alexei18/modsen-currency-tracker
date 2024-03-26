import React, { ReactNode } from 'react';

import classes from './styles.scss';

interface ButtonProps{
  handleClick: () => void;
  children: ReactNode,
  disabled?: boolean
}

export const Button:React.FC<ButtonProps> = ({ handleClick, children, disabled }) => (
  <button type="button" className={classes.button} onClick={handleClick} disabled={disabled}>
    {children}
  </button>
);

Button.defaultProps = {
  disabled: false,
};
