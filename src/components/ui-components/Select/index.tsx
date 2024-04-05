import React, { ChangeEvent, useState } from 'react';

import { CurrencyType } from '@/types/type';

import classes from './styles.scss';

type Option = {
  [key: string]: string;
}

type SelectProps = {
  className?: string;
  baseValue: string;
  keyValue: keyof CurrencyType;
  options: CurrencyType[];
  onOptionChange: (selectedOption: CurrencyType | Option | null) => void;
}

export const Select: React.FC<Partial<SelectProps>> = ({
  className = '',
  baseValue,
  keyValue,
  options,
  onOptionChange,
}) => {
  const [currency, setCurrency] = useState<string>(baseValue);

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find((option) => option[keyValue] === selectedValue) || null;
    setCurrency(selectedValue);
    onOptionChange(selectedOption);
  };

  return (
    <select className={`${classes.select} ${className}`} value={currency} onChange={handleOptionChange}>
      {options.map((option) => (
        <option key={option.code} value={option[keyValue]}>
          {option[keyValue]}
        </option>
      ))}
    </select>
  );
};
