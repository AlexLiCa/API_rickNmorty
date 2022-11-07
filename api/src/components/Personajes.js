import React, {useState} from 'react';
import axios from 'axios';
import App from '../App.css'

const Personajes = () => {
    const[personajes, setPersonajes] = useState([]);

    const get_personajes = async () => {
        const peticion = await axios.get('https://rickandmortyapi.com/api/character');
        setPersonajes(...personajes,peticion.data.results);
        console.log(personajes.data.results);
        return 0;
    }
    get_personajes();


    return ( 
        <p className="card">hola</p>
    );
}
 
export default Personajes;