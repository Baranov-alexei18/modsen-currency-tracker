/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CardCurrency } from '@/components/ui-components/Card/CardCurrency';
import { CurrencyDataState, SectionCardCurrenciesProps } from '@/types/type';

import { CurrencyConverter } from '../../CurrencyConverter';
import { ModalBase } from '../../Modal/ModalBase';
import classes from './styles.scss';

export const SectionCardCurrencies: React.FC<SectionCardCurrenciesProps> = (
  { name, currencies },
) => {
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [convertValue, setConvertValue] = useState('');
  
  const currenciesLatest = useSelector((state: CurrencyDataState) => state.data.currencyLatest);
  const currenciesLatestAll = Object.values(currenciesLatest.data);

  const getValueToDollars = (symbol: string, _code: string): string => {
    const currency = currenciesLatestAll.find(({ code }) => code === _code);
    const valueCurrency = `${symbol} ${currency.value.toFixed(2)}`;

    const res = loading ? '' : valueCurrency;
    return res;
  };

  const openModal = (code: string) => {
    setIsModal(true);
    setConvertValue(code);
  };

  useEffect(() => {
    currenciesLatest ? setLoading(false) : setLoading(true);
  }, [currenciesLatest]);

  return (
    <div className={classes.section_wrapper}>
      <div className={classes.section_name}>
        {name}
      </div>
      <div className={classes.cards}>
        {currencies.map(({
          code, symbol_native, name, symbol, value,
        }) => (
          code
            ? (
              <CardCurrency
                key={code}
                symbol={symbol_native}
                name={name}
                value={getValueToDollars(symbol, code)}
                onChoiceCurrency={() => openModal(code)}
              />
            )
            : <CardCurrency key={name} symbol={symbol} name={name} value={value} />
        ))}
      </div>
      <ModalBase isOpen={isModal} onCloseModal={() => setIsModal(false)}>
        <CurrencyConverter baseCurrency={convertValue} />
      </ModalBase>
    </div>

  );
};
