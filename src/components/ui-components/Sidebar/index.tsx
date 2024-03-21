import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { useOutsideClick } from '@/components/hooks/useOutsideClick';
import { THEME_DARK } from '@/constants';
import { RootState } from '@/store/store';
import { SideBarType } from '@/types/type';

import { Navbar } from '../Navbar';
import { Switch } from '../Switch';
import styles from './styles.scss';

export const SideBar: React.FC<SideBarType> = ({ open, setCloseSideBar }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const sidebarRef = useRef();

  useOutsideClick(sidebarRef, setCloseSideBar, open);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${open ? styles.open : ''} ${theme === THEME_DARK ? styles.dark : styles.light}`}
    >

      <div className={styles.header_sidebar}>
        <Switch theme={theme} />
      </div>
      <Navbar toggleCloseSidebar={setCloseSideBar} />
    </div>
  );
};
