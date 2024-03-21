import Chart from 'chart.js/auto';
import React from 'react';
import { connect, useSelector } from 'react-redux';

import { Select } from '@/components/ui-components/Select';
import { ChartCurrency } from '@/pages/Timeline/Chart/index';
import { fetchData, setCurrencies } from '@/store/sliceData';
import { CurrencyDataState, CurrencyType } from '@/types/type';

import { arrayCurrencyHistory } from './constants';
import classes from './styles.scss';

export class TimeLinePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeCurrency: 'USD',
      currenciesAll: [],
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    setCurrencies();
  }

  handleSelectChange(event) {
    const selectedValue = event.target.value;
    this.setState({ codeCurrency: selectedValue });
  }

  render() {
    const { codeCurrency, currenciesAll } = this.state;

    return (
      <div className={classes.wrapper}>
        <div>
          <select value={codeCurrency} onChange={this.handleSelectChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <p>
            Выбранная валюта:
            {codeCurrency}
          </p>
          <ChartCurrency dataForChart={arrayCurrencyHistory} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.data.currencies,
  currencyLatest: state.data.currencyLatest,
});

export default connect(mapStateToProps, {})(TimeLinePage);
