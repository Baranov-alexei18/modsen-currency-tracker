interface DayCharts{
  x: Date;
  y: number[];
}

type AllDaysCharts = DayCharts[];

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
    labelFontColor: colorChart === '#030304' ? '#f8f9fa' : '#030304',
    labelFormatter(e: { value: unknown; }) {
      if (window.innerWidth < 768) {
        return '';
      }
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
