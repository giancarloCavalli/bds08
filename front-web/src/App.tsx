import './App.css';
import { Filter } from './components/filter';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main-container">
        <Filter className="App-filter-container" />
      </main>
    </div>
  );
}

export default App;
