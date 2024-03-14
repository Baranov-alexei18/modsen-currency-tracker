import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Banner } from '../ui-components/Banner/Banner';
import styles from './style.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner />
        <Outlet />
      </main>
    </>
  );
}
export default App;
