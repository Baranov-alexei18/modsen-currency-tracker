import React from 'react';
import { Link } from 'react-router-dom';

import logo from '@/assets/img/logo.svg';
import { routerLinks } from '@/store/router';

import { Switch } from '../ui-components/switch/Switch';
import classes from './styles.scss';

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <div className={classes.route_list}>
          {routerLinks.map(({ path, name, id }) => (
            <Link to={path} key={id} className={classes.route}>
              {name}
            </Link>
          ))}
        </div>
        <Switch />
      </div>
    </header>

  );
}
