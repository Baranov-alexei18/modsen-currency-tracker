import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import classes from '@/components/App.module.scss';

function App() {
  const [rem, setRem] = useState<number>(0);
  console.log(1);
  const inc = () => {
    setRem((item) => item + 1);
  };

  return (
    <div>
      <Link to="/timeline" style={{ marginRight: '20px' }}>
        timeline
      </Link>
      <Link to="/bank-card" style={{ marginRight: '20px' }}>
        bank-card
      </Link>
      <Link to="/contact" style={{ marginRight: '20px' }}>
        contact
      </Link>
      <Link to="/">
        Home
      </Link>
      <h1>Hello world</h1>
      <h3>Hello world!TEST MODE</h3>
      <p>{rem}</p>
      <button type="button" className={classes.button} onClick={inc}>
        <span>
          Click
        </span>
        <p className={classes.p}>
          123
        </p>
      </button>
      <Outlet />
    </div>
  );
}
export default App;
