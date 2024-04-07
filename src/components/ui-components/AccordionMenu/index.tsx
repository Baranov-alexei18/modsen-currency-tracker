import React, { useState } from 'react';

import { PropsMenu } from '@/types/components/footerType';

import { DropDownIcons } from '../Icons/DropDownIcons';

import styles from './styles.scss';

export const AccordionMenu: React.FC<PropsMenu> = ({ menu }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleMenu = (index: number) => () => {
    setOpenIndex((prevIndex: number) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordion_wrapper}>
      <ul className={styles.menu}>
        {menu.map(({ menu, submenu, id }) => (
          <li
            role="menuitem"
            key={id}
            className={`${styles.menuItem} ${openIndex === id ? styles.open : ''}`}
            onClick={toggleMenu(id)}
            aria-hidden="true"
          >
            <DropDownIcons className={styles.arrow} menu={menu} openIndex={openIndex} id={id} />
            <ul className={styles.submenu}>
              {submenu.map((subitem: string) => (
                <li key={subitem}>{subitem}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
