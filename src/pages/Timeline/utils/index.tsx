export function getDateMonthAgo() {
  const currentDate = new Date();
  const pastDate = new Date(currentDate.setDate(currentDate.getDate() - 30));
  return pastDate.toISOString().slice(0, 19);
}

export const getDataFromCoinApi = async (currencyRanges:string, currencybase:string = 'USDT') => {
  try {
    const dataFromCoinApi = await fetch(`https://rest.coinapi.io/v1/ohlcv/BINANCE_SPOT_${currencyRanges}_${currencybase}/history?period_id=1DAY&time_start=${getDateMonthAgo()}`, {
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
