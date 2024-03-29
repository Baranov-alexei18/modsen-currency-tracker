import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import themes from '@/assets/style/theme.scss';
import { Banner } from '@/components/ui-components/Banner/index';
import { Loader } from '@/components/ui-components/Loader';
import { THEME_DARK } from '@/constants';
import { fetchData } from '@/store/sliceData';
import { RootState, store } from '@/store/store';
import { CurrencyDataState } from '@/types/type';
import { getTimeLastUpdate, isYestardayDay } from '@/utils/date';

import { ErrorBoundary } from '../ErrorBoundary';
import classes from './styles.scss';

export const Main = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const currenciesLatest = useSelector((state: CurrencyDataState) => state.data.currencyLatest);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localStoreСurrencyLatest = localStorage.getItem('currencyLatest');
    const localStoreСurrencies = localStorage.getItem('currencies');

    if (!localStoreСurrencyLatest || !localStoreСurrencies
      || (localStoreСurrencyLatest
        && !isYestardayDay(JSON.parse(localStoreСurrencyLatest).meta.last_updated_at))) {
      store.dispatch(fetchData()).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <main
      data-testid="main-layout"
      className={`${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}
    >
      <ErrorBoundary>
        <Banner />
        {loading ? <Loader /> : (
          <>
            <div className={classes.block_update}>
              <div className={classes.circle_wrapper}>
                <div className={classes.circle} />
              </div>
              <div>
                Last updated at
                {currenciesLatest ? ` ${getTimeLastUpdate(currenciesLatest.meta.last_updated_at)}` : '00:00'}
              </div>
            </div>
            <Outlet />
          </>
        )}
      </ErrorBoundary>
    </main>
  );
};
