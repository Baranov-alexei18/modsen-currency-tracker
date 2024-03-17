import React from 'react';

import { Icon } from '@/types/type';

export const BurgerMenu: React.FC<Icon> = ({
  height, width, onOpen,
}) => (
  <div role="button" aria-hidden tabIndex={0} onClick={onOpen}>
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}>
      <path xmlns="http://www.w3.org/2000/svg" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  </div>
);
