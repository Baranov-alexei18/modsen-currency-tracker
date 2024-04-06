import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModalBase } from '@/components/ui-components/Modal';
import { getCurrencyToDollars } from '@/helpers/getCurrencyToDollars';
import { CardCurrency } from '@/pages/Home/CardCurrency';
import { CurrencyConverter } from '@/pages/Home/CurrencyConverter';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { RootState } from '@/store/store';
import { SectionCardCurrenciesProps } from '@/types/components/cardCurrency';
import { CurrencyDataState } from '@/types/currencyType';

import classes from './styles.scss';

export const SectionCardCurrencies: React.FC<SectionCardCurrenciesProps> = (
  { name, currencies },
) => {
  const [convertValue, setConvertValue] = useState('');

  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const currenciesLatest = useSelector((state: CurrencyDataState) => state.data.currencyLatest);
  const currenciesLatestAll = Object.values(currenciesLatest.data);

  const openModal = (code: string) => {
    setConvertValue(code);
    dispatch(modalOpen());
  };
  const closeModal = () => dispatch(modalClose());

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
      <ModalBase isOpen={isModalOpen} onCloseModal={closeModal}>
        {convertValue.length ? <CurrencyConverter baseCurrency={convertValue} /> : null}
      </ModalBase>
    </div>

  );
};
