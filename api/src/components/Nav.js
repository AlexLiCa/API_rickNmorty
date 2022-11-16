import React from 'react';
import '../App.css';

const Nav = ({pag, setPag, psj, setPsj}) => {
    
    const onChange = (e) => {
        if (e.target.name === "psj") {
            //console.log(e.target.value);
            setPsj(e.target.value);
        }
    }

    return ( 
        
        <div className="container-l">
            <nav>
                <div className="topnav">
                    <a className="active">{pag}</a>
                    <a onClick={()=> setPag(1)}>{"<<"}</a>
                    <a onClick={()=> {pag === 1 ? (setPag(1)) : setPag(pag - 1)}}>
                        {"<"}
                    </a>
                    <a onClick={()=> {pag >= 42 ? (setPag(42)) : setPag(pag + 1)}}>
                        {pag >= 42 ? ("-") : (pag+1)}
                    </a>
                    <a onClick={()=> {pag >= 41 ? (setPag(42)) : setPag(pag + 2)}}>
                        {pag >= 41 ? ("-") : (pag+2)}
                    </a>
                    <a onClick={()=> {pag >= 40 ? (setPag(42)) : setPag(pag + 3)}}>
                        {pag >= 40 ? ("-") : (pag+3)}
                    </a>
                    <a onClick={()=> {pag === 42 ? (setPag(42)) : setPag(pag + 1)}}>
                        {pag === 42 ? ("-") : (">")}
                    </a>
                    <a onClick={()=> setPag(42)}>
                        {pag === 42 ? ("-") : (">>")}
                    </a>
                    <input type="text" id="psj" name="psj" value={psj} onChange={onChange}/>
                </div>
            </nav>
        </div>
     );
}
export default Nav;