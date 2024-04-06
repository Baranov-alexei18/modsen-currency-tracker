import { CurrencyLatestForValue } from '../types/type';

const getCurrencyValue = (currencyData: CurrencyLatestForValue[], currency: string) => {
  const value = currencyData.find(({ code }) => code === currency)?.value;
  return value || 0;
};

export const getResultConverter = (
  baseCurrency: string,
  convertCurrency: string,
  convertValue: string,
  currencyData: CurrencyLatestForValue[],
) => {
  if (convertCurrency === baseCurrency) {
    return convertValue.toString();
  }

  const valueFrom = getCurrencyValue(currencyData, baseCurrency);
  const valueTo = getCurrencyValue(currencyData, convertCurrency);

  const result = parseFloat(convertValue) * (valueTo / valueFrom);

  if (!result) return '';

  return result.toFixed(2).toString();
};
