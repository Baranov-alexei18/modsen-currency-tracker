import React from 'react';

import { Icon } from '@/types/components/iconType';

export const IconArrowDown: React.FC<Icon> = ({ height, width }) => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}>
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  </div>
);
