import { CurrencyLatestForValue } from '@/types/type';

export const getCurrencyToDollars = (
  symbol: string,
  _code: string,
  currenciesLatestAll: CurrencyLatestForValue[],
): string => {
  const currency = currenciesLatestAll.find(({ code }) => code === _code);
  const valueCurrency = `${symbol} ${currency.value.toFixed(2)}`;

  if (!currency) {
    return '';
  }

  return valueCurrency;
};
