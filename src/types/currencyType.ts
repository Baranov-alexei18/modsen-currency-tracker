type CurrencyType = {
  code?: string;
  countries: string[];
  decimal_digits: number;
  name: string;
  name_plural: string;
  rounding: number;
  symbol: string;
  symbol_native: string;
  type: string;
  value?: string;
};

type CurrencyLatestForValue = {
  code: string;
  value: number
}
type DataCurrencyCode<T> = {
  [currencyCode: string]: T;
}

type CurrencyData = {
  data: DataCurrencyCode<CurrencyType>;
}

type CurrencyLatestData = {
  meta: {
    last_updated_at: string;
  }
  data: DataCurrencyCode<CurrencyLatestForValue>;
}

type DataState = {
  currencies: CurrencyData | null;
  currencyLatest: CurrencyLatestData | null;
}

type CurrencyDataState = {
  data: DataState;
}

type PropsNon = object;

export {
  CurrencyData,
  CurrencyDataState,
  CurrencyLatestData,
  CurrencyLatestForValue,
  CurrencyType,
  DataState,
  PropsNon,
};
