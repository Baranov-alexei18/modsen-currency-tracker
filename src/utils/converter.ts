import { CurrencyLatestForValue } from '../types/type';

export const getResultConverter = (
  baseCurrency: string,
  convertCurrency: string,
  convertValue: string,
  currencyData: CurrencyLatestForValue[],
) => {
  if (convertCurrency === baseCurrency) {
    return convertValue.toString();
  }

  const valueFrom = currencyData.find(({ code }) => code === baseCurrency).value;
  const valueTo = currencyData.find(({ code }) => code === convertCurrency).value;

  const result = parseFloat(convertValue) * (valueTo / valueFrom);

  if (!result) return '';

  return result.toFixed(2).toString();
};
