import React from 'react';

interface Icon {
  height: string;
  width: string;
  color: string;
}
export function IconArrowUp({ height, width, color }:Icon) {
  return (
    <div className="icon_container">
      <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}>
        <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" fill={color} />
      </svg>
    </div>
  );
}
