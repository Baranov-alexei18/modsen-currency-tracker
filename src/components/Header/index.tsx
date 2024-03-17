import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import logo from '@/assets/img/logo.svg';
import themes from '@/assets/style/theme.scss';
import { THEME_DARK } from '@/constants';
import { RootState } from '@/store/store';

import { BurgerMenu } from '../ui-components/Icons/BurgerMenu';
import { Navbar } from '../ui-components/Navbar';
import { SideBar } from '../ui-components/Sidebar';
import { Switch } from '../ui-components/Switch';
import classes from './styles.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useSelector((state: RootState) => state.app.theme);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <header className={`${classes.header} ${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
      <div className={classes.container}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <div className={classes.route_list}>
          <Navbar />
        </div>
        <div className={classes.switch_theme}>
          <Switch theme={theme} />
        </div>
        <div className={classes.sidebar}>
          <BurgerMenu height="30px" width="30px" color="white" onOpen={toggleSidebar} />
          <SideBar open={isOpen} setCloseSideBar={() => closeSidebar()} />
        </div>
      </div>
    </header>
  );
};
