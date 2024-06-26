import { CurrencyLatestForValue } from '@/types/currencyType';

export const getCurrencyToDollars = (
  symbol: string,
  _code: string,
  data: CurrencyLatestForValue[],
): string => {
  const currency = data.find(({ code }) => code === _code);
  const valueCurrency = `${symbol} ${currency.value.toFixed(2)}`;

  if (!currency) {
    return '';
  }

  return valueCurrency;
};
