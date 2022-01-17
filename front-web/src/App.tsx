import './App.css';
import { Filter } from './components/filter';
import { Navbar } from './components/navbar';
import { SalesPanel } from './components/sales-panel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main-container">
        <Filter className="App-filter-container" />
        <SalesPanel />
      </main>
    </div>
  );
}

export default App;
