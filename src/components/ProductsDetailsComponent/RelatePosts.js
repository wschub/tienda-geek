import React from 'react'
import Lampara from './lamparita.png';



class RelatePosts extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="container">
                    <div>
                        OTHER PRODUCTS IN THE SAME CATEGORY:
                    </div>
                </div>
                <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <div class="card prod_det_art_relacionados">
                                <p>New</p>
                                <div class="container prod_det_img">
                                <img src={Lampara} class="card-img-top" alt="..."/>
                                </div>
                                <div class="container card-body prod_det_card_body">
                                <div class="ec-stars-wrapper">
                                <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                                <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                                <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                                <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                                <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                                </div>
                                <p class="card-text">
                                    Night Lamp
                                </p>
                                <b>
                                    80.000
                                </b>
                                </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="card prod_det_art_relacionados">
                                    <p>New</p>
                                    <div class="container prod_det_img">
                                    <img src={Lampara} class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="container card-body prod_det_card_body">
                                    <div class="ec-stars-wrapper">
                                    <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                                    <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                                    <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                                    <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                                    <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                                    </div>
                                    <p class="card-text">
                                    Night Lamp
                                    </p>
                                                    
                                    <b>
                                    80.000
                                    </b>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="card prod_det_art_relacionados">
                                    <p>New</p>
                                    <div class="container prod_det_img">
                                    <img src={Lampara}   class="card-img-top" alt="..."/>
                                    </div>
                                    <div class="container card-body prod_det_card_body">
                                    <div class="ec-stars-wrapper">
                                    <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                                    <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                                    <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                                    <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                                    <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                                    </div>
                                    <p class="card-text">
                                        Night Lamp
                                    </p>
                                                    
                                    <b>
                                        80.000
                                    </b>
                                    </div>
                                 </div>
                                </div>
                </div>
            </div>
        </div>
        
        );
    }
}

export default RelatePosts;
