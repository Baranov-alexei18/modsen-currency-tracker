import React from 'react';

interface Icon {
  height: string;
  width: string;
  color: string;
}
export const IconArrowUp = ({ height, width, color }: Icon) => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}>
      <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" fill={color} />
    </svg>
  </div>
);
