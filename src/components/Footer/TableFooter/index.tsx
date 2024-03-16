import React from 'react';

import { PropsMenu } from '@/types/type';

import classes from './styles.scss';

export const TableFooter:React.FC<PropsMenu> = ({ menu }) => (
  <table className={classes.table}>
    <thead>
      <tr>
        {menu.map(({ menu }) => (
          <th className={classes.table_head} key={menu}>
            <strong>{menu}</strong>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {menu.map(({ submenu }) => (
          <td className={classes.table_td}>
            {submenu.map((subitem) => (
              <div className={classes.link_wrapper} key={subitem}>
                <span className={classes.link_placeholder}>{subitem}</span>
              </div>
            ))}
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);
