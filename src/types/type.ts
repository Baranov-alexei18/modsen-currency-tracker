type Menu = {
    id: number;
    menu: string;
    submenu: Array<string>;
};

type PropsMenu = {
  menu: Menu[];
}

type ThemesType = 'dark' | 'light';

type ThemeState = {
  theme: ThemesType;
}

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

type CurrencyData = {
  data: {
    [currencyCode: string]: CurrencyType;
  }
}
type CurrencyLatestData = {
  meta: {
    last_updated_at: string;
  }
  data: {
    [currencyCode: string]: {
      code: string;
      value: number
    }
  }
}
type DataState = {
  currencies: CurrencyData | null;
  currencyLatest: CurrencyLatestData | null;
}

type BanksDataType = {
  name: string;
  coordinates: number[];
  currencies: string[];
}

type InputType<T> = {
  target: {
    value: T;
  };
}

type Icon = {
    height: string;
    width: string;
    color?: string;
    handleClick?: () => void
}

interface CurrencyDataState {
  data: DataState;
}
interface SectionCardCurrenciesProps {
  name: string,
  currencies: Array<CurrencyType>
}

interface PropsNon{ }

export {
  BanksDataType,
  CurrencyData,
  CurrencyDataState,
  CurrencyLatestData,
  CurrencyType,
  DataState,
  Icon,
  InputType,
  PropsMenu,
  PropsNon,
  SectionCardCurrenciesProps,
  ThemeState,
  ThemesType,
};
