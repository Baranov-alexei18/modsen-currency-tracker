import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTER_LINKS } from '@/constants/routerLinks';

import classes from './styles.scss';

type toggleCloseSidebar = {
  toggleCloseSidebar: () => void;
}
type ClodeSidebar = Partial<toggleCloseSidebar>

export const Navbar = ({ toggleCloseSidebar }: ClodeSidebar) => (
  <>
    {ROUTER_LINKS.map(({ path, name, id }) => (
      <Link to={path} key={id} className={classes.route} onClick={toggleCloseSidebar}>
        {name}
      </Link>
    ))}
  </>
);
