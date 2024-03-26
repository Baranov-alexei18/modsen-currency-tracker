import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyData, CurrencyLatestData, DataState } from '@/types/type';
import { getDataFromCurrencyApi } from '@/utils/dataApi';
import { isDateForUpdate } from '@/utils/date';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const apikey = process.env.REACT_APP_API_KEY_CURRENCIES;
  const urlLatest = `https://api.currencyapi.com/v3/latest?apikey=${apikey}`;
  const urlCurrencies = `https://api.currencyapi.com/v3/currencies?apikey=${apikey}`;

  try {
    const dataCurrencies = await getDataFromCurrencyApi(urlCurrencies);
    const dataLatest = await getDataFromCurrencyApi(urlLatest);

    return { currencies: dataCurrencies, currencyLatest: dataLatest };
  } catch (error) {
    throw new Error('Ошибка при получении данных:', error);
  }
});

const currencies = localStorage.getItem('currencies');
const currencyLatest = localStorage.getItem('currencyLatest');

const initialState:DataState = {
  currencies: currencies ? JSON.parse(currencies) : null,
  currencyLatest: currencyLatest
    && isDateForUpdate(JSON.parse(currencyLatest).meta.last_updated_at)
    ? JSON.parse(currencyLatest) : null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setCurrencies(state, action: PayloadAction<CurrencyData>) {
      state.currencies = action.payload;
    },
    setCurrencyLatest(state, action: PayloadAction<CurrencyLatestData>) {
      state.currencyLatest = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.currencies = action.payload.currencies;
        state.currencyLatest = action.payload.currencyLatest;
        localStorage.setItem('currencies', JSON.stringify(action.payload.currencies));
        localStorage.setItem('currencyLatest', JSON.stringify(action.payload.currencyLatest));
      });
  },
});
export const { setCurrencies, setCurrencyLatest } = dataSlice.actions;
export default dataSlice.reducer;
