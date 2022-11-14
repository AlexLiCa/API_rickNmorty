import React from 'react';
import '../App.css';

const Nav = () => {
    return ( 
        <nav>
            <div class="topnav">
                <a class="active" href="#home">Previous</a>
                <a href="#news">1</a>
                <a href="#contact">2</a>
                <a href="#about">3</a>
                <a href="#about">Next</a>
            </div>
        </nav>
     );
}
 
export default Nav;