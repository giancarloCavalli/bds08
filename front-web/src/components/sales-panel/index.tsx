import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import { SalesSumValue } from './sales-sum-value';
import './styles.css';

type Props = {
  valueSum: number;
  labels: string[];
  name: string;
  series: number[];
};

export const SalesPanel = ({ valueSum, labels, name, series }: Props) => {
  return (
    <div className="sales-panel-container base-card">
      <SalesSumValue valueSum={valueSum} />
      <div className="sales-panel-donut-container">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width={270}
          height={420}
          series={series}
        />
      </div>
    </div>
  );
};
