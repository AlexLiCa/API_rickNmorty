import './App.css';
import Personajes from './components/Personajes';
import Tarjeta from './components/Tarjeta'
import Nav from './components/Nav'

function App() {
  let rickImg = "https://www.looper.com/img/gallery/the-other-back-to-the-future-reference-you-missed-in-rick-and-morty/l-intro-1618319353.jpg"
  return (
    <div className="App">
      <div className="bg">
      <Nav/>
      <div className="container">
        <h1 className="card-s">Personajes de Rick y Morty</h1>
      </div>
        {/* <div className="container">
            <Tarjeta img={rickImg} name="Rick Sanchez"/>
            <Tarjeta img={rickImg} name="Rick Sanchez"/>
            <Tarjeta img={rickImg} name="Rick Sanchez"/>
            <Tarjeta img={rickImg} name="Rick Sanchez"/>
            <Tarjeta img={rickImg} name="Rick Sanchez"/>
            <Tarjeta img={rickImg} name="Rick Sanchez"/>
        </div> */}
        <Personajes/>
      </div>
    </div>
  );
}

export default App;
