import React from 'react';
import { useSelector } from 'react-redux';

import { SectionCardCurrencies } from '@/components/ui-components/Section/SectionCardCurrencies';
import { stocks } from '@/constants';
import { CurrencyDataState } from '@/types/type';

import classes from './styles.scss';

export const HomePage = () => {
  // const theme = useSelector((state: RootState) => state.app.theme);

  const currencies = useSelector((state: CurrencyDataState) => state.data.currencies);

  const currenciesAll = Object.values(currencies.data);

  return (
    <div className={classes.wrapper}>
      <SectionCardCurrencies name="Stocks" currencies={stocks} />
      <SectionCardCurrencies name="Quotes" currencies={currenciesAll} />
    </div>
  );
};
