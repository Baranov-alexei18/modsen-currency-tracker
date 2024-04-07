import React from 'react';

import IconArrowDown from '@/assets/img/svg/IconArrowDown.svg';
import IconArrowUp from '@/assets/img/svg/IconArrowUp.svg';
import { DropDownType } from '@/types/components/iconType';

export const DropDownIcons: React.FC<DropDownType> = ({
  menu, openIndex, id, className,
}) => (
  <div>
    <span>{menu}</span>
    <span className={className}>
      {openIndex === id
        ? <img width="24px" src={IconArrowUp} alt="arrow-up" title="icon-up" />
        : <img width="24px" src={IconArrowDown} alt="arrow-down" title="icon-down" />}
    </span>
  </div>
);
