import React from 'react';

import { Icon } from '@/types/components/iconType';

export const IconArrowUp: React.FC<Icon> = ({ height, width }) => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}>
      <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
    </svg>
  </div>
);
