import React from 'react';
import '../App.css';

const Tarjeta = ({img, txt}) => {
    return ( 
      <div className="row">
        <div className="card">
            <img src={img} width="250px" height="150px"/>
            <h1>{txt}</h1>
          </div>
      </div>
     );
}
 
export default Tarjeta;