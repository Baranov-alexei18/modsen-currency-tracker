import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import themes from '@/assets/style/theme.scss';
import { Button } from '@/components/ui-components/Button';
import { Input } from '@/components/ui-components/Input';
import { Select } from '@/components/ui-components/Select';
import { Toast } from '@/components/ui-components/Toast';
import { THEME_DARK } from '@/constants';
import { CardCurrency } from '@/pages/Home/CardCurrency';
import { ChartCurrency } from '@/pages/Timeline/ChartCurrency/index';
import { observer } from '@/services/observer';
import { RootState, store } from '@/store/store';
import { CurrencyType } from '@/types/type';
import { getDataFromCoinApi } from '@/utils/dataApi';

import classes from './styles.scss';

interface TimeLinePageState {
  codeCurrency: string;
  isToast: boolean;
  cryptoCurrency: CurrencyType[] | [];
  dayAgo: number;
  errorInputDay: boolean;
}

function mapStateToProps(state: RootState) {
  return {
    theme: state.theme.theme,
  };
}

const connector = connect(mapStateToProps);
type TimeLinePageProps = ConnectedProps<typeof connector>;
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

  // eslint-disable-next-line react/no-unused-class-component-methods
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

  changeDayForChart = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      <div className={`${classes.wrapper} ${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
        <div className={classes.block_currency}>
          <Select className={`${theme === THEME_DARK ? classes.dark : ' '}`} baseValue={codeCurrency} keyValue="code" options={cryptoCurrency} onOptionChange={this.handleSelectChange} />
          <Input value={dayAgo} onChange={this.changeDayForChart} />
          <Button handleClick={this.createChart} disabled={errorInputDay}>Create chart</Button>
        </div>
        <CardCurrency symbol="$" name="Tether" value="USDT" backgroundColorIcon="#2A4628" />
        <ChartCurrency theme={theme} />
        {isToast && <Toast text={`График ${codeCurrency}/USDT построен`} color="#28a745" />}
      </div>

    );
  }
}

export const TimeLinePage = connector(TimeLineSection);
