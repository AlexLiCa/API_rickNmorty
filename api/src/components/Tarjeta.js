import React from 'react';
import '../App.css';

const Tarjeta = ({img, name, sts, spc}) => {
    return ( 
      <div className="row">
        <div className="card">
            <img src={img} width="300px" height="250px" className="img"/>
            <h2>{name}</h2>
            <h3>Status: {sts}</h3>
            <h3>Species: {spc}</h3>
          </div>
      </div>
     );
}
 
export default Tarjeta;