import React, {useState} from 'react';
import './App.css';
import Personajes from './components/Personajes';
import Tarjeta from './components/Tarjeta'
import Nav from './components/Nav'

function App() {
  const[pag, setPag] = useState(1);


    return (
    <div className="App">
      <div className="bg">
      <Nav pag={pag} setPag={setPag}/>
      <div className="container">
        <h1 className="card-s">Personajes de Rick y Morty</h1>
      </div>
        <Personajes pag={pag}/>
      </div>
    </div>
  );
}

export default App;
