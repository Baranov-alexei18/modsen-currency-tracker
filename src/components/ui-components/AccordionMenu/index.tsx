import React, { useState } from 'react';

import { IconArrowDown } from '@/components/ui-components/Icons/IconArrowDown';
import { IconArrowUp } from '@/components/ui-components/Icons/IconArrowUp';
import { PropsMenu } from '@/types/components/footerType';

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
            <div>
              <span>{menu}</span>
              <span className={styles.arrow}>
                {openIndex === id
                  ? <IconArrowUp color="white" width="24px" height="24px" />
                  : <IconArrowDown color="white" width="24px" height="24px" />}
              </span>
            </div>

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
