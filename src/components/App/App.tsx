import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header';
import { Banner } from '../ui-components/Banner';
import styles from './styles.scss';

export const App = () => (
  <>
    <Header />
    <main className={styles.main}>
      <Banner />
      <Outlet />
      <Footer />
    </main>
  </>
);
