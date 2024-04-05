import { Provider } from 'react-redux';

import { store } from '@/store/store';

import { Footer } from '../Footer/index';
import { Header } from '../Header/index';
import { Main } from '../Main/index';

import '@/assets/style/index.scss';

export const App = () => (
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />
  </Provider>
);
