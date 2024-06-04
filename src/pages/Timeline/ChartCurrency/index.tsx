import React, { PureComponent } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

import themes from '@/assets/style/theme.scss';
import { Loader } from '@/components/ui-components/Loader';
import { ModalBase } from '@/components/ui-components/Modal';
import { COLOR_CHART, THEME } from '@/constants/theme';
import {
  ChartCurrencyProps, ChartCurrencyState, connector, DataForCreateCharts, UpdateDataForChart,
} from '@/pages/Timeline/ChartCurrency/type';
import { observer } from '@/services/observer';
import { ThemeState } from '@/types/themeType';

import { ModalUpdateDay } from '../ModalUpdateDay';

import { getOptionsForChart } from './config';

const { CanvasJSChart } = CanvasJSReact;

class ChartCurrency extends PureComponent<ThemeState & ChartCurrencyProps, ChartCurrencyState> {
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

    const dataPoints = dataCharts.length && dataCharts.map(({
      price_close, price_high, price_low, price_open, time_period_start,
    }) => ({
      x: new Date(time_period_start),
      y: [price_open, price_high, price_low, price_close],
    }));

    const colorChart = theme === THEME.DARK ? COLOR_CHART.DARK : COLOR_CHART.LIGHT;

    const options = getOptionsForChart(dataPoints, colorChart, this.handleClick);

    return (
      <div className={`${theme === THEME.DARK ? themes.theme_dark : themes.theme_light}`}>
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
