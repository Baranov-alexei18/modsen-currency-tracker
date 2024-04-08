import React, { useCallback, useState } from 'react';

import logo from '@/assets/img/logo.svg';
import BurgerMenu from '@/assets/img/svg/BurgerMenu.svg';
import { SideBar } from '@/components/Sidebar';
import { Icon } from '@/components/ui-components/Icon';
import { Navbar } from '@/components/ui-components/Navbar';
import { SwitchApp } from '@/components/ui-components/Switcher';

import classes from './styles.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <header className={`${classes.header}`}>
      <div className={classes.container}>
        <img width="40px" src={logo} alt="Logo" className={classes.logo} />
        <div className={classes.route_list}>
          <Navbar />
        </div>
        <div className={classes.switch_theme}>
          <SwitchApp dataTestId="switch-theme" />
        </div>
        <div className={classes.sidebar}>
          <Icon
            src={BurgerMenu}
            height="30px"
            width="30px"
            alt="burger-menu"
            title="open-sidebar"
            toggleClick={toggleSidebar}
          />
          <SideBar open={isOpen} setCloseSideBar={closeSidebar} />
        </div>
      </div>
    </header>
  );
};
