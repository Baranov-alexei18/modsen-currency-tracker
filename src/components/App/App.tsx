import React from 'react';
import { Provider } from 'react-redux';

import { Footer } from '@/components/Footer/index';
import { Header } from '@/components/Header/index';
import { Main } from '@/components/Main/index';
import { store } from '@/store/store';

export const App = () => (
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />
  </Provider>
);
