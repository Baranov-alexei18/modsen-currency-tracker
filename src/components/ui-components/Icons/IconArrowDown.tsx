import React from 'react';

interface Icon {
  height: string;
  width: string;
  color: string;
}
export function IconArrowDown({ height, width, color }:Icon) {
  return (
    <div className="icon_container">
      <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}>
        <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" fill={color} />
      </svg>
    </div>
  );
}
