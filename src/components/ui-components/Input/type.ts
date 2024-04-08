import { InputHTMLAttributes } from 'react';

export type InputProps = {
    value: string | number;
} & InputHTMLAttributes<HTMLInputElement>;

export type InputType<T> = {
    target: {
      value: T;
    };
  }
