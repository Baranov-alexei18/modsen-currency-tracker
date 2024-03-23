import React from 'react';
import { useSelector } from 'react-redux';

import { THEME_DARK } from '@/constants';
import { RootState } from '@/store/store';
import { CardCurrencyProp } from '@/types/type';

import classes from './styles.scss';

const generateRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    color += letters[Math.floor(Math.random() * 8)];
  }
  return color;
};

export const CardCurrency: React.FC<CardCurrencyProp> = ({
  symbol, name, value, backgroundColorIcon, onChoiceCurrency,
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const backgroundColor = generateRandomColor();

  return (
    <div
      className={`${classes.card} ${theme === THEME_DARK ? classes.dark : classes.light}`}
      onClick={onChoiceCurrency}
      aria-hidden
    >
      <div
        className={classes.symbol}
        style={{ background: backgroundColorIcon ? `${backgroundColorIcon}` : `${backgroundColor}` }}
      >
        {symbol}
      </div>
      <div className={classes.info_currency}>
        <div className={classes.name_currency}>{name}</div>
        <div className={classes.value_currency}>{value}</div>
      </div>
    </div>
  );
};
