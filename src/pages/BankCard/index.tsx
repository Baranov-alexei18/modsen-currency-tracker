import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import themes from '@/assets/style/theme.scss';
import { bankCardSearchSection, THEME_DARK } from '@/constants';
import { BANKS_DATA } from '@/constants/mokData';
import { RootState } from '@/store/store';
import { BanksDataType } from '@/types/type';

import { InputElasticSearch } from './InputElasticSearch';
import { Map } from './Map';

import classes from './styles.scss';

type BankCardPageState = {
  searchValue: string;
  searchData: BanksDataType[];
}

function mapStateToProps(state: RootState) {
  return {
    theme: state.theme.theme,
  };
}

const connector = connect(mapStateToProps);
type BankCardPageProps = ConnectedProps<typeof connector>;

class BankCardSection extends React.Component<BankCardPageProps, BankCardPageState> {
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
          <p className={classes.section_info}>{bankCardSearchSection}</p>
          <InputElasticSearch
            className={`${theme === THEME_DARK ? themes.theme_dark : themes.theme_light}`}
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
