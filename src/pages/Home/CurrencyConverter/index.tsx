import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Select } from '@/components/ui-components/Select';
import { CurrencyDataState, CurrencyType } from '@/types/type';

import classes from './styles.scss';

export const CurrencyConverter: React.FC<{ baseCurrency: string }> = ({ baseCurrency }) => {
  const [convertCurrency, setConvertCurrency] = useState('USD');
  const [convertValue, setConvertValue] = useState('');
  const [result, setResult] = useState('');
  // const [valueTo, setValueTo] = useState('');
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
      const valueTo = currenciesLatestAll.find(({ code }) => code === convertCurrency).value;

      const result = parseFloat(convertValue) * (valueTo / valueFrom);

      isNaN(result) ? setResult('') : setResult(result.toString());
    }
  };

  useEffect(() => {
    setResultConverter();
  }, [convertCurrency, convertValue]);

  const handleAmountChange = (e) => {
    const { value } = e.target;

    if (!value.length) {
      setError(false);
      setConvertValue('');
      setResult('');
    }

    if (parseFloat(value) >= 0) {
      setError(false);
      setConvertValue(value);
      setResultConverter();
    } else {
      setError(true);
    }
  };

  const handleCurrencyChange = (currencyToConvert: CurrencyType) => {
    setConvertCurrency(currencyToConvert.code);
  };

  return (
    <div className={classes.converter_wrapper}>
      <input type="text" className={classes.input} value={baseCurrency} disabled />
      <Select baseValue={convertCurrency} keyValue="code" options={currenciesAll} onOptionChange={handleCurrencyChange} />
      <input
        type="text"
        className={`${classes.input} ${error ? classes.error_input : ''}`}
        value={convertValue}
        onChange={handleAmountChange}
        placeholder="0"
      />
      <input type="text" className={classes.result} value={result} placeholder="0" disabled />
    </div>
  );
};
