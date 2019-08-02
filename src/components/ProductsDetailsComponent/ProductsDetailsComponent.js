import React from 'react'
import './ProductDetailsComponent.css'
import Sofa from './sofa.png'
const Product_Details = () =>{

<div class="contianer">
        <div class="container">
            <h6>Home/Furniture/Sofas/Huch/Pandora Sofa</h6>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <br/>
                    <p class="prod_det_p">New</p>
                    <div class="container prod_det_img">
                    <img class="prod_det_img" src={Sofa} alt="Sofá"/>
                    </div>
                </div>
                <div class="col-6">
                    <b>Pandora Sofa</b>
                    <p style="margin-top: 15px;">180.000</p>
                    <p>Printed evening dress width straights sleeves with black than 
                        waist bel and ruffed things.</p>
                        <div class="row">
                            <div class="col-3">
                                 <b>Size</b>
                            </div>
                            <div class="col-4">
                                <select class="prod_det_size" name="transporte">
                                    <option value="1">S</option>
                                    <option value="2">M</option>
                                    <option value="3">L</option>
                                    <option value="4">Xl</option>
                                </select>
                            </div>
                            </div>
                            
                        <div class="row prod_det_mt" >
                                <div class="col-3">
                                    <b>Color</b>
                                </div>
                                
                                <div class="col-2">
                                    <table class="prod_det_box_1"> 
                                     <th  scope="col"></th>
                                    </table>
                                </div>

                                <div class="col-2">
                                    
                                <table class="prod_det_box_2 ml-60"> 
                                        <th scope="col"></th>
                                </table>

                                </div>
                                </div>

                        <div class="row prod_det_mt">
                            <div class="col-3">
                                <b>Quantify</b>
                            </div>
                            <div class="col-4">
                                <select class="prod_det_size" name="transporte">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        </div>
                    
                </div>
            </div>
        </div>

}

export default Product_Details;