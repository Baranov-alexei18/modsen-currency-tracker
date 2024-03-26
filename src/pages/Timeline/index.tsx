import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import themes from '@/assets/style/theme.scss';
import { Button } from '@/components/ui-components/Button';
import { Toast } from '@/components/ui-components/Toast';
import { THEME_DARK } from '@/constants';
import { CardCurrency } from '@/pages/Home/CardCurrency';
import { ChartCurrency } from '@/pages/Timeline/ChartCurrency/index';
import { getDataFromCoinApi } from '@/pages/Timeline/utils';
import { observer } from '@/services/observer';
import { RootState, store } from '@/store/store';
import { CurrencyType } from '@/types/type';

import classes from './styles.scss';

interface TimeLinePageState {
  codeCurrency: string;
  isToast: boolean;
  cryptoCurrency: CurrencyType[] | []
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
      isToast: false,
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
    getDataFromCoinApi(cryptoCurrency).then((data) => {
      observer.setData(data);
    }).catch((error) => {
      throw new Error('Error fetching data:', error);
    });
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  update = () => { };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    this.setState({ codeCurrency: selectedValue, isToast: false });
  };

  createChart = () => {
    const { codeCurrency } = this.state;

    this.getDataForCharts(codeCurrency);
    this.setState({ isToast: true });
  };

  render() {
    const { codeCurrency, cryptoCurrency, isToast } = this.state;
    const { theme } = this.props;

    return (
      <div className={`${classes.wrapper} ${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}>
        <div className={classes.block_currency}>
          <select className={`${theme === THEME_DARK ? classes.dark : ' '}`} value={codeCurrency} onChange={this.handleSelectChange}>
            {cryptoCurrency.map(({ code }) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <Button handleClick={this.createChart}>Create chart</Button>
        </div>
        <CardCurrency symbol="$" name="Tether" value="USDT" backgroundColorIcon="#2A4628" />
        <ChartCurrency theme={theme} />
        {isToast && <Toast text={`График ${codeCurrency}/USDT построен`} color="#28a745" />}
      </div>

    );
  }
}

export const TimeLinePage = connector(TimeLineSection);
