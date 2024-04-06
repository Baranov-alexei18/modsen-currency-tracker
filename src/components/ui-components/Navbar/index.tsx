import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTER_LINKS } from '@/constants/routerLinks';
import { NavbarProps } from '@/types/components/navbarType';

import classes from './styles.scss';

export const Navbar = ({ toggleCloseSidebar }: Partial<NavbarProps>) => (
  <>
    {ROUTER_LINKS.map(({ path, name, id }) => (
      <Link to={path} key={id} className={classes.route} onClick={toggleCloseSidebar}>
        {name}
      </Link>
    ))}
  </>
);
