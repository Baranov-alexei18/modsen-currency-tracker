import { BanksDataType } from '../currencyType';

export type InputSearchProps = {
    className: string;
    value: string;
    options: BanksDataType[];
    onChange: (value: string) => void;
    onSelect: (value: string) => void;
}
export type InputSearchState = {
    filteredOptions: unknown[] | string[] | [],
    value: string | undefined,
    showDropdown: boolean,
}
