import React from 'react';
import { connect } from 'react-redux';

import { Button } from '@/components/ui-components/Button';
import { Toast } from '@/components/ui-components/Toast';
import { CardCurrency } from '@/pages/Home/CardCurrency';
import { ChartCurrency } from '@/pages/Timeline/ChartCurrency/index';
import { getDataFromCoinApi } from '@/pages/Timeline/utils';
import { observer } from '@/services/observer';
import { RootState } from '@/store/store';
import { PropsNon } from '@/types/type';

import classes from './styles.scss';

interface TimeLinePageState {
  codeCurrency: string;
  isToast: boolean;
}

export class TimeLinePage extends React.Component<PropsNon, TimeLinePageState> {
  constructor(props: PropsNon | Readonly<PropsNon>) {
    super(props);
    this.state = {
      codeCurrency: 'BTC',
      isToast: false,
    };
  }

  componentDidMount() {
    this.getDataForCharts();
    observer.subscribe(this);
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
    const {
      codeCurrency, isToast,
    } = this.state;

    return (
      <div className={classes.wrapper}>
        <div className={classes.block_currency}>
          <select value={codeCurrency} onChange={this.handleSelectChange}>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="BNB">BNB</option>
            <option value="XRP">XRP</option>
            <option value="SOL">SOL</option>
          </select>

          <Button handleClick={this.createChart}>Create chart</Button>
        </div>
        <CardCurrency symbol="$" name="Tether" value="USDT" backgroundColorIcon="#2A4628" />
        <ChartCurrency />
        {isToast && <Toast text="Новый график построен" color="#28a745" />}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  theme: state.theme,
});

export default connect(mapStateToProps, {})(TimeLinePage);
