import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import IconSidebarClose from '@/assets/img/svg/IconSidebarClose.svg';
import { SideBarType } from '@/components/Sidebar/type';
import { Navbar } from '@/components/ui-components/Navbar';
import { SwitchApp } from '@/components/ui-components/Switcher';
import { THEME } from '@/constants/theme';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { RootState } from '@/store/store';

import { Icon } from '../ui-components/Icon';

import styles from './styles.scss';

export const SideBar = React.memo(({ open, setCloseSideBar }: SideBarType) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const sidebarRef = useRef();

  useOutsideClick(sidebarRef, setCloseSideBar, open);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${open ? styles.open : ''} ${theme === THEME.DARK ? styles.dark : styles.light}`}
    >
      <div className={styles.header_sidebar}>
        <Icon
          src={IconSidebarClose}
          height="32px"
          width="32px"
          alt="icon-close"
          title="close sidebar"
          toggleClick={setCloseSideBar}
        />
        <SwitchApp dataTestId="switch-theme-mobile" />
      </div>
      <Navbar toggleCloseSidebar={setCloseSideBar} />
    </div>
  );
});
