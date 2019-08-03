import React from 'react';

import NavBar from './HeaderComponent';
import Product from '../ProductsComponent/ProductsFeatured';
import RelatePosts from '../ProductsDetailsComponent/RelatePosts';
import FiltrarProductos from '../ProductsComponent/FiltrarProductosComponent'



const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             
             {props.children}
             <FiltrarProductos/>
             <Product/>
             
             
             <RelatePosts/>
             
             
        </div>
        
    )
    
}
export default Layout;