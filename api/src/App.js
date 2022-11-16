import React, {useState} from 'react';
import './App.css';
import Personajes from './components/Personajes';
import Nav from './components/Nav'

function App() {
  const[pag, setPag] = useState(1);
  const[psj, setPsj] = useState("");

    return (
    <div className="App">
      <div className="bg">
        <Nav pag={pag} setPag={setPag} psj={psj} setPsj={setPsj}/>
        <div className="container">
          <h1 className="card-s">Personajes de Rick y Morty</h1>
        </div>
        <div>
        </div>
        <Personajes pag={pag} psj={psj}/>
        </div>
    </div>
  );
}

export default App;
