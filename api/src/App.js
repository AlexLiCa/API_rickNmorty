import './App.css';
import Personajes from './components/Personajes';
import Tarjeta from './components/Tarjeta'


function App() {
  let rickImg = "https://www.looper.com/img/gallery/the-other-back-to-the-future-reference-you-missed-in-rick-and-morty/l-intro-1618319353.jpg"
  return (
    <div className="App">
      <div className="bg">
      <div className="container">
        <h1 className="card-s">Personajes Rick y Morty</h1>
      </div>
        <div className="container">
          <div className="row">
            <Tarjeta img={rickImg} txt="Rick"/>
          </div>
          <div className="row">
            <Tarjeta img={rickImg} txt="Rick"/>
          </div>
          <div className="row">
            <Tarjeta img={rickImg} txt="Rick"/>
          </div>
          <div className="row">
            <Tarjeta img={rickImg} txt="Rick"/>
          </div>
          <div className="row">
            <Tarjeta img={rickImg} txt="Rick"/>
          </div>
          <div className="row">
            <Tarjeta img={rickImg} txt="Rick"/>
          </div>
        </div>
        {/* <Personajes/> */}
      </div>
    </div>
  );
}

export default App;
