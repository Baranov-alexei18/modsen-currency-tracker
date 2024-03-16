import React from 'react';

interface Icon {
  height: string;
  width: string;
  color: string;
  onOpen: () => void
}
export const BurgerMenu = ({
  height, width, color, onOpen,
}: Icon) => (
  <div aria-hidden onClick={onOpen}>
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 -960 960 960" width={width}>
      <path xmlns="http://www.w3.org/2000/svg" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill={color} />
    </svg>
  </div>
);
