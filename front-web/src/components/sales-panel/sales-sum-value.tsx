type Props = {
  valueSum: number;
};

export const SalesSumValue = ({ valueSum }: Props) => {
  return (
    <div className="sales-sum-value-container">
      <h1>{valueSum}</h1>
      <span>Total de vendas</span>
    </div>
  );
};
