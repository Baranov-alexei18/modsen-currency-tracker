import React from 'react';

import { Icon } from '@/types/components/iconType';

export const IconSidebarClose: React.FC<Icon> = ({ height, width, handleClick }) => (
  <div title="close sidebar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      height={height}
      width={width}
      onClick={handleClick}
      aria-label="sidebar-close"
    >
      <path xmlns="http://www.w3.org/2000/svg" d="m280-240-56-56 184-184-184-184 56-56 240 240-240 240Zm360 0v-480h80v480h-80Z" />
    </svg>
  </div>
);
