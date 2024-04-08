import { connect, ConnectedProps } from 'react-redux';

import { modalClose, modalOpen } from '@/store/sliceModal';
import { RootState } from '@/store/store';

export type DayCharts = {
    x: Date;
    y: number[];
  }

export type AllDaysCharts = DayCharts[];

export type DataUpdateDate = {
    meta?: string;
    data?: number[];
  }

export type ModalUpdateDayProps = {
    data: DataUpdateDate,
    getDataForChange: (data: DataUpdateDate) => void,
  }

export type UpdateDayProps = Readonly<ModalUpdateDayProps>;

export type ModalUpdateDayState = {
    price_open: number,
    price_high: number,
    price_low: number,
    price_close: number,
    errorOpen: string,
    errorHigh: string,
    errorLow: string,
    errorClose: string,
  }

export type DataForCreateCharts ={
    price_close: number,
    price_high: number,
    price_low: number,
    price_open: number,
    time_close: string,
    time_open: string,
    time_period_end: string,
    time_period_start: string,
    trades_count: number,
    volume_traded: number,
  }

export type UpdateDataForChart = { data: DataForCreateCharts[] }

export type ChartCurrencyState = {
    dataCharts: Array<DataForCreateCharts>,
    dataDayCharts: {
      data?: number[];
      meta?: string;
    },
    loading: boolean,
  }

const mapStateToProps = (state: RootState) => ({
  isModalOpen: state.modal.isOpen,
});

const mapDispatchToProps = {
  modalOpen,
  modalClose,
};
export const connector = connect(mapStateToProps, mapDispatchToProps);

export type ChartCurrencyProps = ConnectedProps<typeof connector>;
