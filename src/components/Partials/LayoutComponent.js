import React from 'react';

import NavBar from './HeaderComponent';
import Product from '../ProductsComponent/ProductsFeatured';



const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             {props.children}
             <Product/>
             
        </div>
        
    )
    
}
export default Layout;