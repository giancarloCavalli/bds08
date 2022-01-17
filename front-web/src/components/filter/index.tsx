import './styles.css';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../utils/requests';
import { Store } from '../../types/types';

type Props = {
  className?: string;
};

export const Filter = ({ className }: Props) => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    let isApiSubscribed = true;

    requestBackend
      .get<Store[]>('/stores')
      .then((response) => {
        if (isApiSubscribed) {
          setStores(response.data);
        }
      })
      .catch((error) => {
        console.log('Erro GET stores', error);
      });

    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div className={`filter-container base-card ${className}`}>
      <select name="lojas">
        <option value="">Seleciona uma loja</option>
        {stores.map((store) => (
          <option key={store.id} value={store.name}>
            {store.name}
          </option>
        ))}
      </select>
    </div>
  );
};
