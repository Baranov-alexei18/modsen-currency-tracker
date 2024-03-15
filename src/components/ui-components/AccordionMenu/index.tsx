import React, { useState } from 'react';

import styles from './styles.scss';

interface Menu {
  menu: string;
  submenu: Array<string>
}

export function AccordionMenu({ menu }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index: number) => {
    setOpenIndex((prevIndex: number) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        {menu.map(({ menu, submenu }, index) => (
          <li
            key={index}
            className={`${styles.menuItem} ${
              openIndex === index ? styles.open : ''
            }`}
            onClick={() => toggleMenu(index)}
          >
            <span>{menu}</span>
            <span className={styles.arrow}>
              {openIndex === index ? '▲' : '▼'}
            </span>
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
}
