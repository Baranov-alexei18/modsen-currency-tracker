import React from 'react';

import styles from './styles.scss';

export function TableFooter({ menu }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {menu.map(({ menu }) => (
            <th className={styles.table_head} key={menu}>
              <strong>{menu}</strong>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {menu.map((item, index) => (
            <td className={styles.table_td} key={index}>
              {item.submenu.map((subitem, subindex) => (
                <div className={styles.link_wrapper} key={subindex}>
                  <a href="#" className={styles.link_placeholder}>{subitem}</a>
                </div>
              ))}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
