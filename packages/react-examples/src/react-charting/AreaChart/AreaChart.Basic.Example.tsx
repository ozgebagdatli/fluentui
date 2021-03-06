import * as React from 'react';
import { AreaChart } from '@fluentui/react-charting';
import { ILineChartProps } from '@fluentui/react-charting';
import { DefaultPalette } from '@fluentui/react/lib/Styling';

interface IAreaChartBasicState {
  width: number;
  height: number;
  chartData: any;
}

const chart1Points = [
  {
    x: 20,
    y: 7000,
    xAxisCalloutData: '2018/01/01',
    yAxisCalloutData: '10%',
  },
  {
    x: 25,
    y: 9000,
    xAxisCalloutData: '2018/01/15',
    yAxisCalloutData: '18%',
  },
  {
    x: 30,
    y: 13000,
    xAxisCalloutData: '2018/01/28',
    yAxisCalloutData: '24%',
  },
  {
    x: 35,
    y: 15000,
    xAxisCalloutData: '2018/02/01',
    yAxisCalloutData: '25%',
  },
  {
    x: 40,
    y: 11000,
    xAxisCalloutData: '2018/03/01',
    yAxisCalloutData: '15%',
  },
  {
    x: 45,
    y: 8760,
    xAxisCalloutData: '2018/03/15',
    yAxisCalloutData: '30%',
  },
  {
    x: 50,
    y: 3500,
    xAxisCalloutData: '2018/03/28',
    yAxisCalloutData: '18%',
  },
  {
    x: 55,
    y: 20000,
    xAxisCalloutData: '2018/04/04',
    yAxisCalloutData: '32%',
  },
  {
    x: 60,
    y: 17000,
    xAxisCalloutData: '2018/04/15',
    yAxisCalloutData: '29%',
  },
  {
    x: 65,
    y: 1000,
    xAxisCalloutData: '2018/05/05',
    yAxisCalloutData: '43%',
  },
  {
    x: 70,
    y: 12000,
    xAxisCalloutData: '2018/06/01',
    yAxisCalloutData: '45%',
  },
  {
    x: 75,
    y: 6876,
    xAxisCalloutData: '2018/01/15',
    yAxisCalloutData: '18%',
  },
  {
    x: 80,
    y: 12000,
    xAxisCalloutData: '2018/04/30',
    yAxisCalloutData: '55%',
  },
  {
    x: 85,
    y: 7000,
    xAxisCalloutData: '2018/05/04',
    yAxisCalloutData: '12%',
  },
  {
    x: 90,
    y: 10000,
    xAxisCalloutData: '2018/06/01',
    yAxisCalloutData: '45%',
  },
];

const chart2Points = [
  {
    x: 50,
    y: 3500,
    xAxisCalloutData: '2018/03/28',
    yAxisCalloutData: '18%',
  },
  {
    x: 55,
    y: 20000,
    xAxisCalloutData: '2018/04/04',
    yAxisCalloutData: '32%',
  },
  {
    x: 60,
    y: 17000,
    xAxisCalloutData: '2018/04/15',
    yAxisCalloutData: '29%',
  },

  {
    x: 70,
    y: 12000,
    xAxisCalloutData: '2018/06/01',
    yAxisCalloutData: '45%',
  },
  {
    x: 75,
    y: 6876,
    xAxisCalloutData: '2018/01/15',
    yAxisCalloutData: '18%',
  },
  {
    x: 80,
    y: 12000,
    xAxisCalloutData: '2018/04/30',
    yAxisCalloutData: '55%',
  },
  {
    x: 85,
    y: 7000,
    xAxisCalloutData: '2018/05/04',
    yAxisCalloutData: '12%',
  },
  {
    x: 90,
    y: 10000,
    xAxisCalloutData: '2018/06/01',
    yAxisCalloutData: '45%',
  },
];

const chartPoints1 = [
  {
    legend: 'legend1',
    data: chart1Points,
    color: DefaultPalette.accent,
  },
];

const chartPoints2 = [
  {
    legend: 'legend1',
    data: chart2Points,
    color: 'red',
  },
];

export class AreaChartBasicExample extends React.Component<{}, IAreaChartBasicState> {
  constructor(props: ILineChartProps) {
    super(props);
    this.state = {
      width: 700,
      height: 300,
      chartData: chartPoints1,
    };
  }

  public render(): JSX.Element {
    return <div>{this._basicExample()}</div>;
  }

  private _onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ width: parseInt(e.target.value, 10) });
  };
  private _onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ height: parseInt(e.target.value, 10) });
  };

  private _onDataChange = () => {
    this.setState({ chartData: chartPoints2 });
  };

  private _basicExample(): JSX.Element {
    const chartData = {
      chartTitle: 'Area chart basic example',
      lineChartData: this.state.chartData,
    };

    const rootStyle = { width: `${this.state.width}px`, height: `${this.state.height}px` };

    return (
      <>
        <label>change Width:</label>
        <input type="range" value={this.state.width} min={200} max={1000} onChange={this._onWidthChange} />
        <label>change Height:</label>
        <input type="range" value={this.state.height} min={200} max={1000} onChange={this._onHeightChange} />
        <button
          onClick={() => {
            this._onDataChange();
          }}
        >
          Update data
        </button>
        <div style={rootStyle}>
          <AreaChart height={this.state.height} width={this.state.width} data={chartData} showYAxisGridLines={true} />
        </div>
      </>
    );
  }
}
