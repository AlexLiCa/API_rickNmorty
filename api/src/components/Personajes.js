import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tarjeta from './Tarjeta'

const Personajes = ({pag, psj}) => {
    const[personajes, setPersonajes] = useState([]);
    

    useEffect(() => {     
        if(psj === ""){
            const url = 'https://rickandmortyapi.com/api/character?page=' + pag.toString();
            axios.get(url).then((response) => {
                console.log(url)
                setPersonajes(response.data.results);
            })
        } 
        else {
            const url = 'https://rickandmortyapi.com/api/character?name=' + psj.toString();
            axios.get(url).then((response) => {
                console.log(url)
                setPersonajes(response.data.results);
            })
        }  
    }, [pag, psj])

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