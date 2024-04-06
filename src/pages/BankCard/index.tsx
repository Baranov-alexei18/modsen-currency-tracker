import React from 'react';

import themes from '@/assets/style/theme.scss';
import { LABELS } from '@/constants';
import { BANKS_DATA } from '@/constants/mokData';
import { THEME } from '@/constants/theme';
import { BankCardPageProps, BankCardPageState, connector } from '@/types/pages/bankCardType';

import { InputElasticSearch } from './InputElasticSearch';
import { Map } from './Map';

import classes from './styles.scss';

class BankCardSection extends React.PureComponent<BankCardPageProps, BankCardPageState> {
  constructor(props: BankCardPageProps | Readonly<BankCardPageProps>) {
    super(props);
    this.state = {
      searchValue: '',
      searchData: BANKS_DATA,
    };
  }

  handleInputChange = (value: string) => {
    const filteredResults = this.getFilterResultData(value);
    this.setState({ searchValue: value, searchData: filteredResults });
  };

  handleSelect = (option: string) => {
    const filteredResults = this.getFilterResultData(option);
    this.setState({ searchValue: option, searchData: filteredResults });
  };

  getFilterResultData = (value: string) => {
    const filteredResults = BANKS_DATA.filter((bank) => bank.currencies.some(
      (currency) => currency.toLowerCase().includes(value.toLowerCase()),
    )
      || bank.name.toLowerCase().includes(value.toLowerCase()));
    return filteredResults;
  };

  render() {
    const { searchValue, searchData } = this.state;
    const { theme } = this.props;

    return (
      <>
        <div className={classes.wrapper}>
          <p className={classes.section_info}>{LABELS.bankCardSearchSection}</p>
          <InputElasticSearch
            className={`${theme === THEME.DARK ? themes.theme_dark : themes.theme_light}`}
            options={BANKS_DATA}
            value={searchValue}
            onChange={this.handleInputChange}
            onSelect={this.handleSelect}
          />
        </div>
        <Map data={searchData} />
      </>
    );
  }
}

export default connector(BankCardSection);
