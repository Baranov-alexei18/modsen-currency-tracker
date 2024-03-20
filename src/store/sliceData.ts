import Currencyapi from '@everapi/currencyapi-js';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyData, CurrencyLatestData, DataState } from '@/types/type';
import { isDateForUpdate } from '@/utils/isDateForUpdate';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const client = new Currencyapi('cur_live_6JnfnRktAZbSHcvEryvDwI1WbVvoOvamLgw1lWEW');
  const dataLatest = await client.latest();
  const dataCurrencies = await client.currencies({ type: 'fiat' });

  return { currencies: dataCurrencies, currencyLatest: dataLatest };
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
