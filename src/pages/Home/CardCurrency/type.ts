import { CurrencyType } from '../../../types/currencyType';

export type SectionCardCurrenciesProps = {
    name: string,
    currencies: CurrencyType[]
  }

export type CardCurrencyProp = {
    code?: string;
    symbol: string;
    name: string;
    value?: string;
    backgroundColorIcon?: string;
    onChoiceCurrency?: () => void
  }

export type CurrencyTypeMapping = {
    name: string;
    symbol: string;
    value?: string;
  } & CurrencyType;
