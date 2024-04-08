import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '@/store/store';

export type BanksDataType = {
  name: string;
  coordinates: number[];
  currencies: string[];
}

export type MapState = {
    markers: unknown[];
}

export type MapProps = {
    data: BanksDataType[];
}

export type BankCardPageState = {
    searchValue: string;
    searchData: BanksDataType[];
}

function mapStateToProps(state: RootState) {
  return {
    theme: state.theme.theme,
  };
}

export const connector = connect(mapStateToProps);
export type BankCardPageProps = ConnectedProps<typeof connector>;
