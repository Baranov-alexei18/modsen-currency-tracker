import React, { useState } from 'react';

import { PropsMenu } from '../../Footer/type';
import { DropDownMenu } from '../DropDownMenu';

import classes from './styles.scss';

export const AccordionMenu: React.FC<PropsMenu> = ({ menu }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleMenu = (index: number) => () => {
    setOpenIndex((prevIndex: number) => (prevIndex === index ? null : index));
  };

  return (
    <div className={classes.accordion_wrapper}>
      <ul className={classes.menu}>
        {menu.map(({ menu, submenu, id }) => (
          <DropDownMenu
            className={`${openIndex === id ? classes.open : ''}`}
            id={id}
            menu={menu}
            submenu={submenu}
            isEqualIndex={openIndex === id}
            toggleMenu={toggleMenu}
          />
        ))}
      </ul>
    </div>
  );
};
