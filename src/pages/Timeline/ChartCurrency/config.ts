import { COLOR_CHART } from '@/constants/theme';
import { AllDaysCharts, DayCharts } from '@/pages/Timeline/ChartCurrency/type';

export const getOptionsForChart = (
  dataPoints: AllDaysCharts,
  colorChart: string,
  handleClick: (e: { dataPoint: { y: number[]; x: string } }) => void,
) => ({
  backgroundColor: colorChart,
  axisX: {
    tickThickness: 0,
    gridThickness: 0,
    labelFormatter() {
      return '';
    },
    crosshair: {
      enabled: false,
    },
  },
  axisY2: {
    tickThickness: 0,
    gridThickness: 0,
    labelFontColor: colorChart === COLOR_CHART.DARK ? COLOR_CHART.LIGHT : COLOR_CHART.DARK,
    labelFormatter(e: { value: unknown; }) {
      return e.value;
    },
    labelTextAlign: 'left',
    crosshair: {
      enabled: true,
      labelAlign: 'right',
      color: 'orange',
      labelColor: 'orange',
      labelBackgroundColor: 'orange',
      labelFontColor: 'black',
    },
  },
  data: [{
    type: 'candlestick',
    cursor: 'pointer',
    risingColor: 'green',
    color: 'red',
    indexLabelTextAlign: 'right',
    dataPoints: dataPoints.map((dataPoint: DayCharts) => ({
      x: dataPoint.x,
      y: dataPoint.y,
      color: dataPoint.y[0] < dataPoint.y[3] ? 'green' : 'red',
    })),
    click: handleClick,
    axisYType: 'secondary',
  }],
});
