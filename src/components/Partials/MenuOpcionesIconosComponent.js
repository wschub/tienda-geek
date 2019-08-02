import React from 'react'
import { Link } from 'react-router-dom';

import '../Partials/MenuOpcionesIconosStyle.css'

class MenuOpcionesIconos extends React.Component{
    state={

    };
    render(){
        return(
        <div>
            <div className="container indx_menuOpIconos_div"> 
                <a href=""><i className="fas fa-search indx_menuOpIconos_a"></i></a>
                <a href=""><i className="fas fa-heart indx_menuOpIconos_a"></i><span className="badge badge-warning indx_menuOpIconos_span">4</span></a>
                <a href="" className="dropdown-toggle" data-toggle="dropdown">
                <i class="fas fa-shopping-cart indx_menuOpIconos_a"></i><span className="badge badge-warning indx_menuOpIconos_span">2</span>
                </a>

                <div class="dropdown-menu">
                    
                    <div className="row container">
                        <div className="col-xs-12" >
                            <div className="panel panel-info">
                                
                            <div className="row">
                                    <div className="ml-3 panel-title">
                                          
                                        <div className="row">
                                            <div className="col-6 container">
                                                <img className="indx_menuOpIconos_img" src="data:image/jpeg;base64,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"/>
                                           </div>

                                           <div className="col-6 container">
                                                <h5>1 x Lenovo Yoga</h5>
                                                <h6><b>$</b>1.000.00</h6>
                                                <h6><b>Size:</b> S</h6>
                                                <h6><b>Color:</b> Marron</h6>
                                           </div>
                                        </div>

                                
                                <div className="ml-3 panel-body">
                                <h6><b>Subtotal:</b> $1.79000</h6>
                                <h6><b>Snniping:</b> Free</h6>
​                                <h6><b>Tax:</b> $000</h6>
                                <h6><b>Total:</b> $1.59500</h6>
                                </div>

                            </div>
                            </div>

                            <div className="row">
                                    <div className="ml-3 panel-title">
                                          
                                        <div className="row">
                                            <div className="col-6 container">
                                                <img className="indx_menuOpIconos_img" src="data:image/jpeg;base64,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"/>
                                           </div>

                                           <div className="col-6 container">
                                                <h5>1 x Lenovo Yoga</h5>
                                                <h6><b>$</b>1.000.00</h6>
                                                <h6><b>Size:</b> S</h6>
                                                <h6><b>Color:</b> Marron</h6>
                                           </div>
                                        </div>

                                
                                <div className="ml-3 panel-body">
                                <h6><b>Subtotal:</b> $1.79000</h6>
                                <h6><b>Snniping:</b> Free</h6>
​                                <h6><b>Tax:</b> $000</h6>
                                <h6><b>Total:</b> $1.59500</h6>
                                </div>
                            </div>
                            
                            </div>


                            <div className="ml-3 panel-footer">
                                <button type="button" class="btn btn-success">Progress to check out</button>

                                </div>
                        </div>
                    </div>
                
              
                </div>
            </div>

        </div>
        </div>


                
    
	


              
             
           

           

        );
    }
}

export default MenuOpcionesIconos;