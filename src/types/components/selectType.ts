import { CurrencyType } from '../currencyType';

type Option = {
    [key: string]: string;
  }

export type SelectProps = {
    className?: string;
    baseValue: string;
    keyValue: keyof CurrencyType;
    options: CurrencyType[];
    onOptionChange: (selectedOption: CurrencyType | Option | null) => void;
  }
