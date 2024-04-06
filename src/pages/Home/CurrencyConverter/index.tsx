import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Input } from '@/components/ui-components/Input';
import { Select } from '@/components/ui-components/Select';
import { CurrencyDataState, CurrencyType } from '@/types/type';
import { getResultConverter } from '@/utils/converter';

import classes from './styles.scss';

export const CurrencyConverter: React.FC<{baseCurrency: string}> = ({ baseCurrency }) => {
  const [convertCurrency, setConvertCurrency] = useState('USD');
  const [convertValue, setConvertValue] = useState('');
  const [error, setError] = useState(false);

  const currencyData = useSelector((state: CurrencyDataState) => state.data);

  const currenciesAll = useMemo(
    () => Object.values(currencyData.currencies.data),
    [currencyData.currencies.data],
  );

  const currenciesLatestAll = useMemo(
    () => Object.values(currencyData.currencyLatest.data),
    [currencyData.currencyLatest.data],
  );

  const resultConverter = useMemo(
    () => getResultConverter(baseCurrency, convertCurrency, convertValue, currenciesLatestAll),
    [baseCurrency, convertCurrency, convertValue, currenciesLatestAll],
  );

  const handleAmountChange = (e: { target: { value: string; }; }) => {
    const { value } = e.target;

    const isValid = /^\d*\.?\d*$/.test(value);
    setError(!isValid);
    if (isValid) {
      setConvertValue(value.toString());
    }
  };

  const handleCurrencyChange = (currencyToConvert: CurrencyType) => {
    setConvertCurrency(currencyToConvert.code);
  };

  return (
    <div className={classes.converter_wrapper}>
      <Input type="text" className={classes.input} value={baseCurrency} disabled />
      <Select baseValue={convertCurrency} keyValue="code" options={currenciesAll} onOptionChange={handleCurrencyChange} />
      <Input
        type="text"
        className={`${classes.input} ${error ? classes.error_input : ''}`}
        value={convertValue}
        onChange={handleAmountChange}
        placeholder="0"
      />
      <Input type="text" className={classes.result} value={resultConverter} placeholder="0" disabled />
    </div>
  );
};
