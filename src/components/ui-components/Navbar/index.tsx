import React from 'react';
import { Link } from 'react-router-dom';

import { routerLinks } from '@/store/router';

import classes from './styles.scss';

export const Navbar = () => (
  <>
    {routerLinks.map(({ path, name, id }) => (
      <Link to={path} key={id} className={classes.route}>
        {name}
      </Link>
    ))}
  </>
);
