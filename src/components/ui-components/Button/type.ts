import { ReactNode } from 'react';

export type ButtonProps = {
    handleClick: () => void;
    children: ReactNode,
    disabled?: boolean
  }
