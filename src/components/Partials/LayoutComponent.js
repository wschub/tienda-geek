import React from 'react';

import NavBar from './HeaderComponent';
import Product from '../ProductsComponent/ProductsFeatured';
import RelatePosts from '../ProductsDetailsComponent/RelatePosts';
import FiltrarProductos from '../ProductsComponent/FiltrarProductosComponent';
import Footer from './FooterComponent'



const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             
             {props.children}
             
             <Product/>
             
 
             
             <RelatePosts/>

             <Footer/>
        </div>
        
    )
    
}
export default Layout;