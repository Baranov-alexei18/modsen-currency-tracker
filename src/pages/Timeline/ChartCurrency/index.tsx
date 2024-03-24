import CanvasJSReact from '@canvasjs/react-charts';
import React, { Component } from 'react';

import themes from '@/assets/style/theme.scss';
import { ContextTheme } from '@/components/Main';
import { Loader } from '@/components/ui-components/Loader';
import { ModalBase } from '@/components/ui-components/Modal/ModalBase';
import { Toast } from '@/components/ui-components/Toast';
import { THEME_DARK } from '@/constants';
import { observer } from '@/services/observer';
import { PropsNon } from '@/types/type';

import { ModalUpdateDay } from '../ModalUpdateDay';
import { getOptionsForChart } from './options';

const { CanvasJSChart } = CanvasJSReact;

export interface DataForCreateCharts {
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

type UpdateDataForChart = { data: DataForCreateCharts[] }

interface ChartCurrencyState {
  dataCharts: Array<DataForCreateCharts>,
  dataDayCharts: {
    data?: number[];
    meta?: string;
  },
  isModal: boolean,
  isToast: boolean,
  loading: boolean,
}

export class ChartCurrency extends Component<PropsNon, ChartCurrencyState> {
  constructor(props: PropsNon | Readonly<PropsNon>) {
    super(props);
    this.state = {
      dataCharts: [],
      dataDayCharts: {},
      isModal: false,
      isToast: false,
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.changeChart = this.changeChart.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    observer.subscribe(this);
  }

  componentWillUnmount() {
    observer.unsubscribe(this);
  }

  handleClick(e: { dataPoint: { y: number[]; x: string; }; }) {
    const dataAll = { data: e.dataPoint.y, meta: e.dataPoint.x };
    this.setState({ dataDayCharts: dataAll, isModal: true, isToast: false });
  }

  changeChart = (dataChange: { meta: string; data: number[]; }) => {
    const { meta, data } = dataChange;
    const [price_open, price_high, price_low, price_close] = data;

    const date = new Date(meta);

    const isoDateString = `${date.toISOString().split('T')[0]}T00:00:00.0000000Z`;

    this.setState((prevState) => {
      const newData = prevState.dataCharts.map((obj: DataForCreateCharts) => {
        if (Date.parse(obj.time_period_start) === Date.parse(isoDateString)) {
          return {
            ...obj,
            price_open,
            price_high,
            price_low,
            price_close,
          };
        }
        return obj;
      });
      return {
        dataCharts: newData,
        isModal: false,
        isToast: true,
      };
    });
  };

  update(data: UpdateDataForChart) {
    this.setState({ dataCharts: data.data, loading: false });
  }

  render() {
    const {
      isModal, isToast, loading, dataDayCharts, dataCharts,
    } = this.state;
    const theme = this.context;

    const dataPoints = dataCharts.map(({
      price_close, price_high, price_low, price_open, time_period_start,
    }) => ({
      x: new Date(time_period_start),
      y: [price_open, price_high, price_low, price_close],
    }));

    const colorChart = theme === THEME_DARK ? '#f8f9fa' : '#030304';
    const options = getOptionsForChart(dataPoints, colorChart, this.handleClick);

    return (
      <div className={`${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
        {loading
          ? <Loader />
          : <CanvasJSChart options={options} />}

        <ModalBase isOpen={isModal} onCloseModal={() => this.setState({ isModal: false })}>
          <ModalUpdateDay data={dataDayCharts} getDataForChange={this.changeChart} />
        </ModalBase>
        {isToast && <Toast text="График изменен" color="orange" />}
      </div>
    );
  }
}

ChartCurrency.contextType = ContextTheme;
