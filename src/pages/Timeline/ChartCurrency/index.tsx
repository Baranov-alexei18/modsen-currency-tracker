import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import CanvasJSReact from '@canvasjs/react-charts';

import themes from '@/assets/style/theme.scss';
import { Loader } from '@/components/ui-components/Loader';
import { ModalBase } from '@/components/ui-components/Modal';
import { THEME_DARK } from '@/constants';
import { observer } from '@/services/observer';
import { modalClose, modalOpen } from '@/store/sliceModal';
import { RootState } from '@/store/store';
import { ThemeState } from '@/types/type';

import { ModalUpdateDay } from '../ModalUpdateDay';

import { getOptionsForChart } from './config';

const { CanvasJSChart } = CanvasJSReact;

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

type UpdateDataForChart = { data: DataForCreateCharts[] }

type ChartCurrencyState = {
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
const connector = connect(mapStateToProps, mapDispatchToProps);
type ChartCurrencyProps = ConnectedProps<typeof connector>;

class ChartCurrency extends Component<ThemeState & ChartCurrencyProps, ChartCurrencyState> {
  constructor(props: ThemeState & ChartCurrencyProps| Readonly<ThemeState& ChartCurrencyProps>) {
    super(props);
    this.state = {
      dataCharts: [],
      dataDayCharts: {},
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    observer.subscribe(this);
  }

  componentWillUnmount() {
    observer.unsubscribe(this);
  }

  handleClick(e: { dataPoint: { y: number[]; x: string; }; }) {
    const { modalOpen } = this.props;
    const dataAll = { data: e.dataPoint.y, meta: e.dataPoint.x };
    this.setState({ dataDayCharts: dataAll });
    modalOpen();
  }

  changeChart = (dataChange: { meta: string; data: number[]; }) => {
    const { modalClose } = this.props;
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
      };
    });
    modalClose();
  };

  closeModal = () => {
    const { modalClose } = this.props;
    modalClose();
  };

  update(data: UpdateDataForChart) {
    this.setState({ dataCharts: data.data, loading: false });
  }

  render() {
    const {
      loading, dataDayCharts, dataCharts,
    } = this.state;
    const { theme, isModalOpen } = this.props;

    const dataPoints = dataCharts.map(({
      price_close, price_high, price_low, price_open, time_period_start,
    }) => ({
      x: new Date(time_period_start),
      y: [price_open, price_high, price_low, price_close],
    }));

    const colorChart = theme === THEME_DARK ? '#030304' : '#f8f9fa';

    const options = getOptionsForChart(dataPoints, colorChart, this.handleClick);

    return (
      <div className={`${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
        {loading
          ? <Loader />
          : <CanvasJSChart data-testid="chart" options={options} />}

        <ModalBase isOpen={isModalOpen} onCloseModal={this.closeModal}>
          <ModalUpdateDay data={dataDayCharts} getDataForChange={this.changeChart} />
        </ModalBase>
      </div>
    );
  }
}

export default connector(ChartCurrency);
