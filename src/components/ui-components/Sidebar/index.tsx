import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import themes from '@/assets/style/theme.scss';
import { THEME_DARK } from '@/constants';
import { RootState } from '@/store/store';

import { Navbar } from '../Navbar';
import { Switch } from '../Switch';
import styles from './styles.scss';

interface SideBar {
  open: boolean;
  setCloseSideBar: () => void
}

function useOutsideClick(elementRef, handler, attached = true) {
  useEffect(() => {
    if (!attached) return;

    const handleCloseSidebar = (event) => {
      if (!elementRef.current) return;

      if (!elementRef.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('click', handleCloseSidebar, true);

    return () => {
      document.removeEventListener('click', handleCloseSidebar, true);
    };
  }, [elementRef, handler, attached]);
}

export const SideBar: React.FC<SideBar> = ({ open, setCloseSideBar }) => {
  const theme = useSelector((state: RootState) => state.app.theme);

  const sidebarRef = useRef();

  useOutsideClick(sidebarRef, setCloseSideBar, open);

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${open ? styles.open : ''} ${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}
      aria-hidden
    >

      <div className={styles.header_sidebar} aria-hidden onClick={(event) => event.stopPropagation()}>
        <Switch theme={theme} />
      </div>
      <Navbar />
    </div>
  );
};
