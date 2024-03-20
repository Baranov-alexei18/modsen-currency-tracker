import React, { useState } from 'react';

import { CurrencyData, SelectProps } from '@/types/type';

import classes from './styles.scss';

export const Select: React.FC<SelectProps<CurrencyData>> = ({
  baseValue, keyValue, options, onOptionChange,
}) => {
  const [currency, setCurrency] = useState<string>(baseValue);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find((option) => option[keyValue] === selectedValue) || null;
    setCurrency(selectedValue);
    onOptionChange(selectedOption);
  };
  return (

    <select className={classes.select} value={currency} onChange={handleOptionChange}>
      {options.map((option) => (
        <option key={option[keyValue]} value={option[keyValue]}>
          {option[keyValue]}
        </option>
      ))}
    </select>

  );
};
