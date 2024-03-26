import React from 'react';

import { Button } from '@/components/ui-components/Button';
import { formatDate } from '@/utils/date';

import classes from './styles.scss';

interface DataUpdateDate {
  meta?: string;
  data?: number[];
}

interface ModalUpdateDayProps {
  data: DataUpdateDate,
  getDataForChange: (data: DataUpdateDate) => void,
}

type UpdateDayProps = Readonly<ModalUpdateDayProps>;
interface ModalUpdateDayState {
  price_open: number,
  price_high: number,
  price_low: number,
  price_close: number,
  error1: string,
  error2: string,
  error3: string,
  error4: string,
}

export class ModalUpdateDay extends React.Component<UpdateDayProps, ModalUpdateDayState> {
  constructor(props: ModalUpdateDayProps) {
    super(props);
    const { data } = this.props;
    const [price_open, price_high, price_low, price_close] = data.data;

    this.state = {
      price_open,
      price_high,
      price_low,
      price_close,
      error1: '',
      error2: '',
      error3: '',
      error4: '',
    };
  }

  changeCandleOfCharts = () => {
    const {
      price_open, price_high, price_low, price_close,
    } = this.state;
    const { data, getDataForChange } = this.props;

    const newData = [
      parseFloat(price_open.toString()),
      parseFloat(price_high.toString()),
      parseFloat(price_low.toString()),
      parseFloat(price_close.toString())];

    const changeData = {
      meta: data.meta,
      data: newData,
    };

    getDataForChange(changeData);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    this.setState(
      (prevState) => ({
        ...prevState,
        [id]: value,
      }),
      () => {
        this.validateInput(id);
      },
    );
  };

  validateInput = (name: string) => {
    const {
      price_open, price_high, price_low, price_close,
    } = this.state;

    const priceOpen = parseFloat(price_open.toString());
    const priceLow = parseFloat(price_low.toString());
    const priceHigh = parseFloat(price_high.toString());
    const priceClose = parseFloat(price_close.toString());

    switch (name) {
      case 'price_open':
        if ((priceOpen < priceLow && priceOpen < priceClose) || !priceOpen) {
          this.setState({ error1: 'Цена открытия не может быть меньше цены закрытия' });
        } else {
          this.setState({ error1: '' });
        }
        break;
      case 'price_high':
        if ((priceHigh < priceLow && priceHigh < priceClose) || !priceHigh) {
          this.setState({ error2: 'Максимальная цена не может быть меньше цены закрытия' });
        } else {
          this.setState({ error2: '' });
        }
        break;
      case 'price_low':
        if ((priceLow > priceOpen && priceLow > priceHigh) || !priceLow) {
          this.setState({ error3: 'Цена закрытия не может быть больше цены открытия' });
        } else {
          this.setState({ error3: '' });
        }
        break;
      case 'price_close':
        if ((priceClose > priceOpen && priceClose > priceHigh) || !priceClose) {
          this.setState({ error4: 'Минимальная цена не может быть больше цены открытия' });
        } else {
          this.setState({ error4: '' });
        }
        break;
      default:
        break;
    }
  };

  render() {
    const {
      price_open, price_high, price_low, price_close, error1, error2, error3, error4,
    } = this.state;
    const { data } = this.props;

    const arrayInput = [
      {
        id: 'price_open', label: 'Цена открытия', value: price_open, error: error1,
      },
      {
        id: 'price_high', label: 'Максимальная цена', value: price_high, error: error2,
      },
      {
        id: 'price_low', label: 'Минимальная цена', value: price_low, error: error3,
      },
      {
        id: 'price_close', label: 'Цена закрытия', value: price_close, error: error4,
      },
    ];

    return (
      <div className={classes.wrapper}>
        <div className={classes.change_day}>
          {formatDate(data.meta)}
        </div>
        {arrayInput.map(({
          id, label, value, error,
        }) => (
          <label key={id} htmlFor={id} className={classes.label_input}>
            {label}
            :
            <input
              type="text"
              id={id}
              className={`${classes.input} ${error && classes.error_input}`}
              value={value}
              onChange={this.handleChange}
            />
            <span className={classes.span_error}>{error}</span>
          </label>
        ))}
        <Button
          handleClick={this.changeCandleOfCharts}
          disabled={!!error1 || !!error2 || !!error3 || !!error4}
        >
          Изменить данные
        </Button>
      </div>
    );
  }
}
