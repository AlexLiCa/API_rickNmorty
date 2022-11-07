import './App.css';
import Personajes from './components/Personajes';


function App() {
  return (
    <div className="App">
      <header className="bg">
        <h1 className="card">Rick and Morty</h1>
        <Personajes/>
      </header>
    </div>
  );
}

export default App;
