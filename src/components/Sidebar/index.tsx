import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import { IconSidebarClose } from '@/components/ui-components/Icons/IconSidebarClose';
import { Navbar } from '@/components/ui-components/Navbar';
import { SwitchApp } from '@/components/ui-components/SwitchApp';
import { THEME } from '@/constants/theme';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { RootState } from '@/store/store';

import styles from './styles.scss';

type SideBarType = {
  open: boolean;
  setCloseSideBar: () => void
}

export const SideBar: React.FC<SideBarType> = ({ open, setCloseSideBar }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const sidebarRef = useRef();

  useOutsideClick(sidebarRef, setCloseSideBar, open);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${open ? styles.open : ''} ${theme === THEME.DARK ? styles.dark : styles.light}`}
    >
      <div className={styles.header_sidebar}>
        <IconSidebarClose height="34px" width="34px" handleClick={setCloseSideBar} />
        <SwitchApp dataTestId="switch-theme-mobile" theme={theme} />
      </div>
      <Navbar toggleCloseSidebar={setCloseSideBar} />
    </div>
  );
};
