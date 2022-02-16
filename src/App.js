import logo from './logo.svg';
import './App.css';
import History from './components/History'
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Search />
      <History />
    </div>
  );
}

export default App;
