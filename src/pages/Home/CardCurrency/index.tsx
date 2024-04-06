import React from 'react';
import { useSelector } from 'react-redux';

import { THEME } from '@/constants/theme';
import { generateRandomColor } from '@/helpers/generateRandomColor';
import { RootState } from '@/store/store';
import { CardCurrencyProp } from '@/types/components/cardCurrency';

import classes from './styles.scss';

export const CardCurrency: React.FC<Partial<CardCurrencyProp>> = ({
  symbol, name, value, backgroundColorIcon, onChoiceCurrency,
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const backgroundColor = generateRandomColor();

  return (
    <div
      className={`${classes.card} ${theme === THEME.DARK ? classes.dark : classes.light}`}
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
