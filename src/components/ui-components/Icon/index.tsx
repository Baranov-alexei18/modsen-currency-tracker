import React from 'react';

import { IconType } from './type';

import classes from './styles.scss';

export const Icon: React.FC<IconType> = ({
  src, height, width, alt, title, toggleClick,
}) => (
  <button className={classes.icon} type="button" onClick={toggleClick}>
    <img src={src} height={height} width={width} alt={alt} title={title} />
  </button>
);
