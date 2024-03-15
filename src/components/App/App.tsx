import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Banner } from '../ui-components/Banner/Banner';
import styles from './styles.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
export default App;
