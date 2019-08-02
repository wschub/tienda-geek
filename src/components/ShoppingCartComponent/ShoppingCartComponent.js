import React, { Component } from 'react';
import logo from '../../images/logo-ag.png';
import './styles/ShoppingCartStyle.css';

class ShoppingCart extends Component {

    render() {
        return (
           <React.Fragment>

               <div className='container' >  
                <div className='row contShopping'> 
              
                    <div className='col-sm-12 col-md-6'> 
                    <h1 className='TitleShoppingCart'> ShoppingCart </h1>
                    <di className='itemShoppingCart'>
                      <img src='https://www.menzzo.es/19541-thickbox_default/sillon-vidal-1-plaza-terciopelo-verde.jpg' width='120' alt='Images ' />
                     
                    </di>
                    </div>
                    <div className='col-sm-12 col-md-6'> 
                    
              
               
               
                  
              
               
               
                 </div>
                 </div>
               </div>


           </React.Fragment>
            
        );
    }
}

export default ShoppingCart;