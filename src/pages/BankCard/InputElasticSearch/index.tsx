import React, { createRef, PureComponent } from 'react';

import IconSearch from '@/assets/img/svg/IconSearch.svg';
import { InputSearchProps, InputSearchState } from '@/types/components/elasticSearchType';
import { InputType } from '@/types/components/inputType';
import { getFieldsForElasticSearch } from '@/utils/elasticSearch';

import classes from './styles.scss';

export class InputElasticSearch extends PureComponent<InputSearchProps, InputSearchState> {
  searchRef: React.RefObject<HTMLDivElement>;

  constructor(props: InputSearchProps | Readonly<InputSearchProps>) {
    super(props);
    this.state = {
      filteredOptions: [],
      value: '',
      showDropdown: false,
    };

    this.searchRef = createRef<HTMLDivElement>();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event: MouseEvent) => {
    if (this.searchRef.current && !this.searchRef.current.contains(event.target as Node)) {
      this.setState({ showDropdown: false });
    }
  };

  handleChange = (e: InputType<string>) => {
    const { value } = e.target;
    const { onChange, options } = this.props;

    onChange(value);

    const resultOptions = getFieldsForElasticSearch(options, value);

    this.setState({
      value,
      filteredOptions: resultOptions,
      showDropdown: value !== '',
    });
  };

  handleSelect = (option: string) => () => {
    const { onSelect } = this.props;
    this.setState({
      value: option,
      showDropdown: false,
    });
    onSelect(option);
  };

  render() {
    const { value, filteredOptions, showDropdown } = this.state;
    const { className } = this.props;

    return (
      <div className={`${classes.wrapper} ${className}`} ref={this.searchRef}>
        <input
          type="text"
          value={value}
          className={classes.input_search}
          placeholder="Currency search..."
          onChange={this.handleChange}
        />
        <div className={classes.icon_search}>
          <img height="24px" width="24px" src={IconSearch} alt="search-icon" title="search-icon" />
        </div>

        {showDropdown && (
        <ul className={classes.dropdown}>
          {filteredOptions.map((option: string) => (
            <li key={option} onClick={this.handleSelect(option)} aria-hidden="true">
              {option}
            </li>
          ))}
        </ul>
        )}
      </div>
    );
  }
}
