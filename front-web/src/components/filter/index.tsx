import './styles.css';
import React, { useEffect, useState } from 'react';
import { requestBackend } from '../../utils/requests';
import { Gender, Store } from '../../types/types';

type Props = {
  className?: string;
  onFilterChange: (store: Store | undefined) => void;
};

export const Filter = ({ className, onFilterChange }: Props) => {
  const [stores, setStores] = useState<Store[]>([]);
  const [store, setStore] = useState<string>();

  const onChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStore = event.target.value as string;

    setStore(selectedStore);

    onFilterChange(stores.find((x) => x.name === selectedStore));
  };

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
      <select name="lojas" value={store} onChange={onChangeStore}>
        <option value="">Selecione uma loja</option>
        {stores.map((store) => (
          <option key={store.id} value={store.name}>
            {store.name}
          </option>
        ))}
      </select>
    </div>
  );
};
