import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '@/store/store';

import { CurrencyType } from '../../types/currencyType';

export type TimeLinePageState = {
    codeCurrency: string;
    isToast: boolean;
    cryptoCurrency: CurrencyType[] | [];
    dayAgo: number;
    errorInputDay: boolean;
  }

function mapStateToProps(state: RootState) {
  return {
    theme: state.theme.theme,
  };
}

export const connector = connect(mapStateToProps);
export type TimeLinePageProps = ConnectedProps<typeof connector>;
