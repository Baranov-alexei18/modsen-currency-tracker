import { useEffect, useState } from 'react';

import logo from '@/assets/img/logo.svg';

import { AccordionMenu } from '../ui-components/AccordionMenu';
import classes from './styles.scss';
import { TableFooter } from './TableFooter';

const menu = [
  {
    menu: 'General',
    submenu: ['Market', 'Service'],
  },
  {
    menu: 'Product',
    submenu: ['Sparks', 'Snaps'],
  },
  {
    menu: 'Community',
    submenu: ['Ideas', 'Streams'],
  },
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.footer_left}>
          <div className={classes.logo}>
            <img src={logo} alt="Company Logo" className={classes.logo} />
            <label>Modsen Currency Tracker</label>
          </div>
          <div className={classes.description}>
            Since then, the company has grown organically to.
            Starsup is the world's largest trading platform, with $12 billion
            worth of currency trading and 500,000 tickets sold daily to tens of
            thousands of traders worldwide.
          </div>

        </div>
        <div className={classes.footer_right}>
          <AccordionMenu menu={menu} />
          <TableFooter menu={menu} />
        </div>
      </div>
      <div className={classes.copyright}>
        <p>Startsup © 2023-2024, All Rights Reserved</p>
      </div>
    </footer>
  );
}
