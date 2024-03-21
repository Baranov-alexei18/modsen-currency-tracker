import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import themes from '@/assets/style/theme.scss';
import { Banner } from '@/components/ui-components/Banner/index';
import { THEME_DARK } from '@/constants';
import { fetchData } from '@/store/sliceData';
import { RootState, store } from '@/store/store';
import { CurrencyDataState } from '@/types/type';
import { isDateForUpdate } from '@/utils/isDateForUpdate';

import { Loader } from '../ui-components/Loader';
import classes from './styles.scss';

export const Main = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const currenciesLatest = useSelector((state: CurrencyDataState) => state.data.currencyLatest);
  // const currencies = useSelector((state) => state.data.currencies);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localStoreСurrencyLatest = localStorage.getItem('currencyLatest');
    const localStoreСurrencies = localStorage.getItem('currencies');

    // if (localStoreСurrencies) {
    //   store.dispatch(setCurrencies(JSON.parse(localStoreСurrencies)));
    // }
    // if (localStoreСurrencyLatest) {
    //   store.dispatch(setCurrencyLatest(JSON.parse(localStoreСurrencyLatest)));
    // }

    if (!localStoreСurrencies && !localStoreСurrencyLatest) {
      setLoading(false);
    }

    if (!localStoreСurrencyLatest
      || (localStoreСurrencyLatest
        && !isDateForUpdate(JSON.parse(localStoreСurrencyLatest).meta.last_updated_at))) {
      store.dispatch(fetchData()).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const getTimeLastUpdate = () => {
    const data = new Date(currenciesLatest.meta.last_updated_at);
    const hours = data.getUTCHours();
    const minutes = data.getUTCMinutes();
    const timeUpdate = hours > 12 ? ` ${hours - 12}:${minutes}pm` : `${hours}:${minutes}am`;
    return timeUpdate;
  };

  return (
    <main className={`${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
      <Banner />
      {loading ? <Loader /> : (
        <>
          <div className={classes.block_update}>
            <div className={classes.circle_wrapper}>
              <div className={classes.circle} />
            </div>
            <div>
              Last updated at
              {currenciesLatest ? `${getTimeLastUpdate()}` : '00:00'}
            </div>
          </div>
          <Outlet />
        </>

      )}

    </main>
  );
};
