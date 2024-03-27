import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '@/components/ui-components/Navbar';
import { Switch } from '@/components/ui-components/switch';
import { THEME_DARK } from '@/constants';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { RootState } from '@/store/store';
import { SideBarType } from '@/types/type';

import { IconSidebarClose } from '../ui-components/Icons/IconSidebarClose';
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
        <IconSidebarClose height="34px" width="34px" handleClick={setCloseSideBar} />
        <Switch theme={theme} />
      </div>
      <Navbar toggleCloseSidebar={setCloseSideBar} />
    </div>
  );
};
