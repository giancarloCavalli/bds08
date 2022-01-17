import { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Filter } from './components/filter';
import { Navbar } from './components/navbar';
import { SalesPanel } from './components/sales-panel';
import { buildParams } from './helpers';
import { SaleByGender, SalesSummary, Store } from './types/types';
import { requestBackend } from './utils/requests';

function App() {
  const [salesByGender, setSalesByGender] = useState<SaleByGender[]>([]);
  const [filterData, setFilterData] = useState<Store>();
  const [salesSummary, setSalesSummary] = useState<SalesSummary>({ sum: 0 });

  const params = useMemo(() => buildParams(filterData), [filterData]);

  useEffect(() => {
    let isApiSubscribed = true;

    requestBackend
      .get<SaleByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        if (isApiSubscribed) {
          setSalesByGender(response.data);
        }
      })
      .catch((error) => {
        console.log('Erro sales by gender', error);
      });

    return () => {
      isApiSubscribed = false;
    };
  }, [params]);

  useEffect(() => {
    let isApiSubscribed = true;

    requestBackend
      .get<SalesSummary>('/sales/summary', { params })
      .then((response) => {
        if (isApiSubscribed) {
          setSalesSummary(response.data);
        }
      })
      .catch((error) => {
        console.log('Erro sales summary', error);
      });

    return () => {
      isApiSubscribed = false;
    };
  }, [params]);

  const handleFilterChange = (store: Store | undefined) => {
    setFilterData(store);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main-container">
        <Filter className="App-filter-container" onFilterChange={handleFilterChange} />
        <SalesPanel
          valueSum={salesSummary.sum}
          labels={salesByGender.map(({ gender }) => {
            return gender;
          })}
          name="Gêneros"
          series={salesByGender.map(({ sum }) => {
            return sum;
          })}
        />
      </main>
    </div>
  );
}

export default App;
