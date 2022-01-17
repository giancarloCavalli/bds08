import { SalesSumValue } from './sales-sum-value';
import './styles.css';

export const SalesPanel = () => {
  return (
    <div className="sales-panel-container base-card">
      <SalesSumValue />
      <div></div>
    </div>
  );
};
