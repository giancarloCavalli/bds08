import { formatPrice } from '../../utils/formatters';

type Props = {
  valueSum: number;
};

export const SalesSumValue = ({ valueSum }: Props) => {
  return (
    <div className="sales-sum-value-container">
      <h1>{formatPrice(valueSum)}</h1>
      <span>Total de vendas</span>
    </div>
  );
};
