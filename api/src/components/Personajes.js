import React, {useState, useEffect} from 'react';
import axios from 'axios';
import App from '../App.css'
import Tarjeta from './Tarjeta'

const Personajes = () => {
    const[personajes, setPersonajes] = useState([]);
    const url = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
        axios.get(url).then((response) => {
            setPersonajes(response.data.results);
        })
    }, [])

    return ( 
        <>
            <div className="container">
                {personajes.map((personaje) => 
                    <Tarjeta 
                        key={personaje.id}
                        name={personaje.name}
                        img={personaje.image} 
                        sts={personaje.status}    
                        spc={personaje.species}    
                        />
                )}

            </div>
        </>
    );
}
 
export default Personajes;