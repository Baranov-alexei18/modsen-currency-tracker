import React from 'react';

import { Button } from '@/components/ui-components/Button';
import { Input } from '@/components/ui-components/Input';
import { Select } from '@/components/ui-components/Select';
import { Toast } from '@/components/ui-components/Toast';
import { COLOR_CHART, THEME } from '@/constants/theme';
import { CardCurrency } from '@/pages/Home/CardCurrency';
import ChartCurrency from '@/pages/Timeline/ChartCurrency/index';
import { observer } from '@/services/observer';
import { store } from '@/store/store';
import { CurrencyType } from '@/types/currencyType';
import { connector, TimeLinePageProps, TimeLinePageState } from '@/types/pages/timelineType';
import { getDataFromCoinApi } from '@/utils/dataApi';

import classes from './styles.scss';

class TimeLineSection extends React.Component<TimeLinePageProps, TimeLinePageState> {
  constructor(props: TimeLinePageProps | Readonly<TimeLinePageProps>) {
    super(props);
    this.state = {
      codeCurrency: 'BTC',
      cryptoCurrency: [],
      dayAgo: 15,
      isToast: false,
      errorInputDay: false,
    };
  }

  componentDidMount() {
    this.getDataForCharts();
    observer.subscribe(this);
    const currencyAll = store.getState().data.currencies.data;
    const cryptoCurrency = Object.values(currencyAll).filter((item) => item.type === 'crypto');
    this.setState({ cryptoCurrency });
  }

  componentWillUnmount() {
    observer.unsubscribe(this);
  }

  getDataForCharts(cryptoCurrency = 'BTC') {
    const { dayAgo } = this.state;
    getDataFromCoinApi(dayAgo, cryptoCurrency).then((data) => {
      observer.setData(data);
    }).catch((error) => {
      throw new Error(error);
    });
  }

  update = () => { };

  handleSelectChange = (option: CurrencyType) => {
    const selectedValue = option.code;
    this.setState({ codeCurrency: selectedValue, isToast: false });
  };

  createChart = () => {
    const { codeCurrency, dayAgo } = this.state;

    this.getDataForCharts(codeCurrency);
    this.setState({ isToast: (dayAgo === 30) });
  };

  changeDayForChart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState((prev) => ({
      ...prev,
      dayAgo: parseFloat(value) || 0,
      errorInputDay: !(parseFloat(value) <= 90),
    }));
  };

  render() {
    const {
      codeCurrency, cryptoCurrency, dayAgo, isToast, errorInputDay,
    } = this.state;
    const { theme } = this.props;

    return (
      <div className={`${classes.wrapper}`}>
        <div data-testid="block-info-chart" className={classes.block_currency}>
          <Select className={`${theme === THEME.DARK ? classes.dark : ' '}`} baseValue={codeCurrency} keyValue="code" options={cryptoCurrency} onOptionChange={this.handleSelectChange} />
          <Input data-testid="input-days" value={dayAgo} onChange={(e) => this.changeDayForChart(e)} />
          <Button handleClick={this.createChart} disabled={errorInputDay}>Create chart</Button>
        </div>
        <CardCurrency symbol="$" name="Tether" value="USDT" />
        <ChartCurrency theme={theme} />
        {isToast && <Toast dataTestId="toast" text={`График ${codeCurrency}/USDT построен`} color={COLOR_CHART.GREEN} />}
      </div>

    );
  }
}

export default connector(TimeLineSection);
