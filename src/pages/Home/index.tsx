import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '@/components/ui-components/Loader';
import { STOCKS } from '@/constants/mokData';
import { SectionCardCurrencies } from '@/pages/Home/SectionCardCurrencies';
import { CurrencyTypeMapping } from '@/pages/Home/CardCurrency/type';
import { CurrencyDataState } from '@/types/currencyType';

import classes from './styles.scss';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const currencies = useSelector((state: CurrencyDataState) => state.data.currencies);

  const [currenciesAll, setCurrenciesAll] = useState<Partial<CurrencyTypeMapping[]>>();

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
            <SectionCardCurrencies name="Stocks" currencies={STOCKS} />
            <SectionCardCurrencies name="Quotes" currencies={currenciesAll} />
          </>
        )}

    </div>
  );
};

export default HomePage;
