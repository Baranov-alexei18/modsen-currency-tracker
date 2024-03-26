import React, { PureComponent } from 'react';

import { SearchIcon } from '@/components/ui-components/Icons/SearchIcon';
import { BanksDataType, InputType } from '@/types/type';

import classes from './styles.scss';

interface InputSearchProps {
    className: string;
    value: string;
    options: BanksDataType[];
    onChange: (value: string) => void;
    onSelect: (value: string) => void;
}
interface InputSearchState {
    filteredOptions: unknown[] | string[] | [],
    value: string | undefined,
    showDropdown: boolean,
}
export class InputElasticSearch extends PureComponent<InputSearchProps, InputSearchState> {
  constructor(props: InputSearchProps | Readonly<InputSearchProps>) {
    super(props);
    this.state = {
      filteredOptions: [],
      value: '',
      showDropdown: false,
    };
  }

  handleChange = (e: InputType<string>) => {
    const { value } = e.target;
    const { onChange } = this.props;

    onChange(value);

    const resultOptions = this.getDataOptions(value);

    this.setState({
      value,
      filteredOptions: resultOptions,
      showDropdown: value !== '',
    });
  };

  handleSelect = (option: string) => {
    const { onSelect } = this.props;
    this.setState({
      value: option,
      showDropdown: false,
    });
    onSelect(option);
  };

  getDataOptions = (value: string) => {
    const setOptions = new Set();
    const { options } = this.props;

    const filteredOptions = options.reduce((acc, option) => {
      const matches = [
        option.name.toLowerCase(),
        ...option.currencies.map((currency) => currency.toLowerCase()),
      ].filter((term) => term.includes(value.toLowerCase()));
      return [...acc, ...matches];
    }, []);

    filteredOptions.forEach((item: string) => setOptions.add(item));
    const resultOptions = Array.from(setOptions);

    return resultOptions;
  };

  render() {
    const { value, filteredOptions, showDropdown } = this.state;
    const { className } = this.props;

    return (
      <div className={`${classes.wrapper} ${className}`}>
        <input
          type="text"
          value={value}
          className={classes.input_search}
          placeholder="Currency search..."
          onChange={this.handleChange}
        />
        <div className={classes.icon_search}>
          <SearchIcon height="24px" width="24px" />
        </div>

        {showDropdown && (
        <ul className={classes.dropdown}>
          {filteredOptions.map((option: string) => (
            <li key={option} onClick={() => this.handleSelect(option)} aria-hidden="true">
              {option}
            </li>
          ))}
        </ul>
        )}
      </div>
    );
  }
}
