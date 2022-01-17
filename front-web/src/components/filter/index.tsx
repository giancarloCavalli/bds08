import './styles.css';

type Props = {
  className?: string;
};

export const Filter = ({ className }: Props) => {
  return (
    <div className={`filter-container base-card ${className}`}>
      <select name="lojas">
        <option value="">Seleciona uma loja</option>
        <option value="Indaial">Indaial</option>
        <option value="Timbó">Timbó</option>
        <option value="Blumenau">Blumenau</option>
        <option value="Pomerode">Pomerode</option>
      </select>
    </div>
  );
};
