import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import { SalesSumValue } from './sales-sum-value';
import './styles.css';

const labels = ['Feminino', 'Masculino', 'Outro'];
const series = [44, 55, 13];

export const SalesPanel = () => {
  return (
    <div className="sales-panel-container base-card">
      <SalesSumValue />
      <div className="sales-panel-donut-container">
        <ReactApexChart
          options={buildPieChartConfig(labels, 'Lojas')}
          type="donut"
          width={270}
          height={420}
          series={series}
        />
      </div>
    </div>
  );
};
