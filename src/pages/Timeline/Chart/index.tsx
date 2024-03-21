import CanvasJSReact from '@canvasjs/react-charts';
import React, { Component } from 'react';

import { arrayCurrencyHistory } from '../constants';

const { CanvasJSChart } = CanvasJSReact;

export class ChartCurrency extends Component {
  render() {
    const dataPoints = arrayCurrencyHistory.map(({
      price_close, price_high, price_low, price_open, time_period_end,
    }) => ({
      x: new Date(time_period_end),
      y: [price_open, price_high, price_low, price_close],
    }));

    const options = {
      backgroundColor: 'inherit',
      color: 'inherit',
      axisX: {
        title: 'Time',
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
        },
      },
      axisY: {
        title: 'Price',
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
        },
      },
      data: [{
        type: 'candlestick',
        risingColor: 'green',
        color: 'red',
        dataPoints: dataPoints.map((dataPoint) => ({
          x: dataPoint.x,
          y: dataPoint.y,
          color: dataPoint.y[0] < dataPoint.y[3] ? 'green' : 'red',
        })),
      }],
    };

    return (
      <div>
        <h1>Candlestick Chart</h1>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}
