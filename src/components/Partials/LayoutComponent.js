import React from 'react';
import ShoppingCart from '../ShoppingCartComponent/ShoppingCartComponent'
import NavBar from '../Partials/NavBarComponent';

const Layout = (props) => {
    return(

    <div> 
             <NavBar/>
         
             <ShoppingCart/>
             
        </div>
    )
    
}
export default Layout;