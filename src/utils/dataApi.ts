import { getDateDayAgo } from './date';

export const getDataFromCoinApi = async (day: number, currencyRanges: string, currencybase: string = 'USDT') => {
  try {
    const dataFromCoinApi = await fetch(`https://rest.coinapi.io/v1/ohlcv/BINANCE_SPOT_${currencyRanges}_${currencybase}/history?period_id=1DAY&time_start=${getDateDayAgo(day)}`, {
      headers: {
        'X-CoinAPI-Key': `${process.env.REACT_APP_COIN_API}`,
      },
    });
    const data = await dataFromCoinApi.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDataFromCurrencyApi = async (url: string) => {
  const dataApi = await fetch(url);
  if (!dataApi.ok) {
    throw new Error(`Ошибка HTTP: ${dataApi.status}`);
  }
  const data = await dataApi.json();
  return data;
};
