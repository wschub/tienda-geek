import React from 'react'
import { Link } from 'react-router-dom';

import '../Partials/MenuOpcionesIconosStyle.css'

class MenuOpcionesIconos extends React.Component{
    state={

    };
    render(){
        return(
               <div className="container indx_menuOpIconos_div"> 
               <a href=""><i className="fas fa-search indx_menuOpIconos_a"></i></a>
               <a href=""><i className="fas fa-heart indx_menuOpIconos_a"></i><span className="badge badge-warning indx_menuOpIconos_span">4</span></a>
               <a href=""><i className="fas fa-shopping-cart indx_menuOpIconos_a"><span className="badge badge-warning indx_menuOpIconos_span">4</span></i></a>
               </div>

        );
    }
}

export default MenuOpcionesIconos;