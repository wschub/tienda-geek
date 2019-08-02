import React from 'react';

import MenuOpciones from '../Partials/MenuOpcionesIconosComponent';


const Layout = (props) => {
    return(

    <div>      
             <MenuOpciones/>
             {props.children}
        </div>
    )
    
}
export default Layout;