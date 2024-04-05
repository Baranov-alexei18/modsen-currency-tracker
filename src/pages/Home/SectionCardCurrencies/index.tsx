import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ModalBase } from '@/components/ui-components/Modal';
import { CardCurrency } from '@/pages/Home/CardCurrency';
import { CurrencyConverter } from '@/pages/Home/CurrencyConverter';
import { CurrencyDataState, SectionCardCurrenciesProps } from '@/types/type';

import classes from './styles.scss';
import { getCurrencyToDollars } from '@/helpers/getCurrencyToDollars';

export const SectionCardCurrencies: React.FC<SectionCardCurrenciesProps> = (
  { name, currencies },
) => {
  const [isModal, setIsModal] = useState(false);
  const [convertValue, setConvertValue] = useState('');

  const currenciesLatest = useSelector((state: CurrencyDataState) => state.data.currencyLatest);
  const currenciesLatestAll = Object.values(currenciesLatest.data);

  const openModal = (code: string) => {
    setIsModal(true);
    setConvertValue(code);
  };

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
                value={getCurrencyToDollars(symbol, code, currenciesLatestAll)}
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
