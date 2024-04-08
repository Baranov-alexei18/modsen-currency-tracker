import React from 'react';

import IconArrowDown from '@/assets/img/svg/IconArrowDown.svg';
import IconArrowUp from '@/assets/img/svg/IconArrowUp.svg';

import { DropDownType } from './type';

import classes from './styles.scss';

export const DropDownMenu: React.FC<DropDownType> = ({
  menu, isEqualIndex, id, className, submenu, toggleMenu,
}) => (
  <li
    role="menuitem"
    key={id}
    className={`${classes.menuItem} ${isEqualIndex ? classes.open : ''}`}
    onClick={toggleMenu(id)}
    aria-hidden
  >
    <div className={className}>
      <span>{menu}</span>
      <span className={classes.arrow}>
        <img
          width="24px"
          src={isEqualIndex ? IconArrowUp : IconArrowDown}
          alt={isEqualIndex ? 'arrow-up' : 'arrow-down'}
          title={isEqualIndex ? 'icon-up' : 'icon-down'}
        />
      </span>
      <ul className={classes.submenu}>
        {submenu.map((subitem: string) => (
          <li key={subitem}>{subitem}</li>
        ))}
      </ul>
    </div>
  </li>

);
