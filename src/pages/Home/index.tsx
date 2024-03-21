import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '@/components/ui-components/Loader';
import { stocks } from '@/constants';
import { SectionCardCurrencies } from '@/pages/Home/SectionCardCurrencies';
import { CurrencyDataState } from '@/types/type';

import classes from './styles.scss';

export const HomePage = () => {
  // const theme = useSelector((state: RootState) => state.app.theme);
  const [loading, setLoading] = useState(true);
  const currencies = useSelector((state: CurrencyDataState) => state.data.currencies);

  const [currenciesAll, setCurrenciesAll] = useState<any>(currencies);

  useEffect(() => {
    if (currencies) {
      setCurrenciesAll(Object.values(currencies.data));
      setLoading(false);
    }
  }, [currencies]);

  return (
    <div className={classes.wrapper}>
      {loading ? <Loader />
        : (
          <>
            <SectionCardCurrencies name="Stocks" currencies={stocks} />
            <SectionCardCurrencies name="Quotes" currencies={currenciesAll} />
          </>
        )}

    </div>
  );
};
