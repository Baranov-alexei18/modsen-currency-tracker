import React from 'react';

import { Icon } from '@/types/components/iconType';

export const BurgerMenu: React.FC<Icon> = ({
  height, width, handleClick,
}) => (
  <div role="button" tabIndex={0} onClick={handleClick} title="open sidebar" aria-hidden>
    <svg xmlns="http://www.w3.org/2000/svg" aria-label="sidebar-open" height={height} viewBox="0 -960 960 960" width={width}>
      <path xmlns="http://www.w3.org/2000/svg" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  </div>
);
