import React from 'react';
import '../App.css';

const Nav = ({pag, setPag}) => {
    return ( 
        <div className="container-l">
            <nav>
                <div class="topnav">
                    <a onClick={()=> setPag(1)}>{"<<"}</a>
                    <a onClick={()=> setPag(pag-1)}>Previous</a>
                    <a onClick={()=> setPag(pag+1)}>{pag+1}</a>
                    <a onClick={()=> setPag(pag+2)}>{pag+2}</a>
                    <a onClick={()=> setPag(pag+3)}>{pag+3}</a>
                    <a onClick={()=> setPag(pag+1)}>Next</a>
                    <a onClick={()=> setPag(42)}>{">>"}</a>
                </div>
            </nav>
        </div>
     );
}
export default Nav;