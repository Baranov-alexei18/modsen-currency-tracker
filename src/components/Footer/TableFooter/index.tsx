import React from 'react';

import { PropsMenu } from '@/types/type';

import classes from './styles.scss';

export const TableFooter:React.FC<PropsMenu> = ({ menu }) => (
  <table className={classes.table}>
    <thead>
      <tr>
        {menu.map(({ menu, id }) => (
          <th className={classes.table_head} key={id}>
            <strong>{menu}</strong>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {menu.map(({ submenu, id }) => (
          <td className={classes.table_td} key={id}>
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
