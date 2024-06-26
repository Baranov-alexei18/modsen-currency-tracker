import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModalBase } from '@/components/ui-components/Modal';
import { getCurrencyToDollars } from '@/helpers/getCurrencyToDollars';
import { CardCurrency } from '@/pages/Home/CardCurrency';
import { SectionCardCurrenciesProps } from '@/pages/Home/CardCurrency/type';
import { CurrencyConverter } from '@/pages/Home/CurrencyConverter';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { RootState } from '@/store/store';
import { CurrencyDataState } from '@/types/currencyType';

import classes from './styles.scss';

export const SectionCardCurrencies = React.memo((
  { name, currencies }: SectionCardCurrenciesProps,
) => {
  const [convertValue, setConvertValue] = useState('');

  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const currenciesLatest = useSelector((state: CurrencyDataState) => state.data.currencyLatest);

  const currenciesLatestAll = useMemo(
    () => Object.values(currenciesLatest.data),
    [currenciesLatest],
  );

  const openModal = (code: string) => {
    setConvertValue(code);
    dispatch(modalOpen());
  };

  const closeModal = () => dispatch(modalClose());

  return (
    <div className={classes.section_wrapper}>
      <div className={classes.section_name}>
        <span>
          {name}
        </span>
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
});
