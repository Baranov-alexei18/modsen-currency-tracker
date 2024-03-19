import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Select } from '@/components/ui-components/Select';
import { CurrencyDataState } from '@/types/type';

import classes from './styles.scss';

export const CurrencyConverter: React.FC<{ baseCurrency: string }> = ({ baseCurrency }) => {
  const [convertCurrency, setConvertCurrency] = useState(baseCurrency);
  const [convertValue, setConvertValue] = useState(null);
  const [result, setResult] = useState(null);
  const [valueTo, setValueTo] = useState(0);
  const [error, setError] = useState(false);

  const currencies = useSelector((state: CurrencyDataState) => state.data.currencies);
  const currenciesLatest = useSelector((state: CurrencyDataState) => state.data.currencyLatest);
  const currenciesAll = Object.values(currencies.data);
  const currenciesLatestAll = Object.values(currenciesLatest.data);

  const setResultConverter = () => {
    if (convertCurrency === baseCurrency) {
      setResult(convertValue);
    } else {
      const valueFrom = currenciesLatestAll.find(({ code }) => code === baseCurrency).value;
      const result = convertValue * (valueTo / valueFrom);
      setResult(result);
    }
  };

  const handleAmountChange = (e) => {
    const { value } = e.target;
    if (value.length === 0) {
      setError(false);
      setConvertValue(null);
      setResult(0);
    }
    if (parseFloat(value) >= 0) {
      setError(false);
      setConvertValue(value);
      setResultConverter();
    } else {
      setError(true);
    }
  };

  const handleCurrencyChange = (currencyToConvert: string) => {
    setConvertCurrency(currencyToConvert);
    setValueTo(currenciesLatestAll.find((item) => item.code === currencyToConvert.code)?.value);
  };

  useEffect(() => {
    setResultConverter();
  }, [convertCurrency, convertValue]);

  return (
    <div className={classes.converter_wrapper}>
      <input type="text" className={classes.input} value={baseCurrency} disabled />
      <Select baseValue={convertCurrency} keyValue="code" options={currenciesAll} onOptionChange={handleCurrencyChange} />
      <input
        type="number"
        className={`${classes.input} ${error ? classes.error_input : ''}`}
        value={convertValue}
        onChange={handleAmountChange}
        placeholder="0"
      />
      <input type="number" className={classes.result} value={result} placeholder="0" disabled />
    </div>
  );
};
