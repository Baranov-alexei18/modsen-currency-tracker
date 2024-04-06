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
