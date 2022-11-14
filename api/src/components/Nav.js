import React from 'react';
import '../App.css';

const Nav = ({pag, setPag}) => {
    return ( 
        <nav>
            <div class="topnav">
                <a onClick={()=> setPag(pag-1)}>Previous</a>
                <a onClick={()=> setPag(pag+1)}>{pag+1}</a>
                <a onClick={()=> setPag(pag+2)}>{pag+2}</a>
                <a onClick={()=> setPag(pag+3)}>{pag+3}</a>
                <a onClick={()=> setPag(pag+1)}>Next</a>
            </div>
        </nav>
     );
}
 
export default Nav;