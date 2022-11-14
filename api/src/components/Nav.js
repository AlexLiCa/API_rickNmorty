import React from 'react';
import '../App.css';

const Nav = () => {
    return ( 
        <nav>
            <div class="topnav">
                <a class="active" href="#previous">Previous</a>
                <a href="#1">1</a>
                <a href="#2">2</a>
                <a href="#3">3</a>
                <a href="#next">Next</a>
            </div>
        </nav>
     );
}
 
export default Nav;