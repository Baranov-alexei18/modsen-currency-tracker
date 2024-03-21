import { ReactNode } from 'react';

type Menu = {
    id: number;
    menu: string;
    submenu: Array<string>;
};
type ThemesType = 'dark' | 'light';

interface PropsMenu {
    menu: Menu[];
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
interface ThemeState {
    theme: ThemesType;
}
interface Icon {
    height: string;
    width: string;
    color: string;
    onOpen: () => void
}
interface SideBarType {
  open: boolean;
  setCloseSideBar: () => void
}

interface CardCurrencyProp{
  code?: string;
  symbol: string;
  name: string;
  value?: string;
  onChoiceCurrency?: () => void
}

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}
interface SelectProps<T extends CurrencyData> {
  baseValue: string;
  keyValue: string;
  options: T[];
  onOptionChange: (data: T|null) => void;
}

interface CurrencyDataState {
  data: DataState;
}
interface SectionCardCurrenciesProps {
  name: string,
  currencies: Array<CurrencyType>
}
export {
  CardCurrencyProp,
  CurrencyData,
  CurrencyDataState,
  CurrencyLatestData,
  CurrencyType,
  DataState,
  Icon, ModalProps,
  PropsMenu, SectionCardCurrenciesProps,
  SelectProps,
  SideBarType,
  ThemeState, ThemesType,
};
