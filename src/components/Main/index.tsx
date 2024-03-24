import React, { createContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import themes from '@/assets/style/theme.scss';
import { Banner } from '@/components/ui-components/Banner/index';
import { Loader } from '@/components/ui-components/Loader';
import { THEME_DARK } from '@/constants';
import { fetchData } from '@/store/sliceData';
import { RootState, store } from '@/store/store';
import { CurrencyDataState } from '@/types/type';
import { isDateForUpdate } from '@/utils/date';

import classes from './styles.scss';

export const ContextTheme = createContext(THEME_DARK);

export const Main = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const currenciesLatest = useSelector((state: CurrencyDataState) => state.data.currencyLatest);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localStoreСurrencyLatest = localStorage.getItem('currencyLatest');
    const localStoreСurrencies = localStorage.getItem('currencies');

    if (!localStoreСurrencies && !localStoreСurrencyLatest) {
      setLoading(false);
    }

    if (!localStoreСurrencyLatest || !localStoreСurrencies
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
          <ContextTheme.Provider value={theme}>
            <Outlet />
          </ContextTheme.Provider>
        </>

      )}

    </main>
  );
};
