import React from 'react'
import Lampara from '../../images/lamparita.png';
import './styles/ProductsDetailsComponent.css'



class RelatePosts extends React.Component{
    render(){
        return( 

        
        <div className="container">
                <h4>
                    <b>REVIEWS</b>
                </h4>

                
                <button type="button" className="btn btn-warning mb-3 mt-2">WIRTE YOUR REVIEW</button>

                <p>No customize reviews for the moment</p>
        
                <div className="prod_det_alert">
                    OTHER PRODUCTS IN THE SAME CATEGORY:
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="card prod_det_art_relacionados">
                            <p>New</p>
                            <div className="container prod_det_img">
                            <img src={Lampara} className="card-img-top" alt="..."/>
                            </div>
                            <div className="container card-body prod_det_card_body">
                            <div className="ec-stars-wrapper">
                            <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                            <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                            <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                            <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                            <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                            </div>
                            <p className="card-text">
                                Night Lamp
                            </p>
                            <b>
                                80.000
                            </b>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card prod_det_art_relacionados">
                                <p>New</p>
                                <div className="container prod_det_img">
                                <img src={Lampara} className="card-img-top" alt="..."/>
                                </div>
                                <div className="container card-body prod_det_card_body">
                                <div className="ec-stars-wrapper">
                                <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                                <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                                <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                                <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                                <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                                </div>
                                <p className="card-text">
                                Night Lamp
                                </p>
                                                
                                <b>
                                80.000
                                </b>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card prod_det_art_relacionados">
                                <p>New</p>
                                <div className="container prod_det_img">
                                <img src={Lampara} className="card-img-top" alt="..."/>
                                </div>
                                <div className="container card-body prod_det_card_body">
                                <div className="ec-stars-wrapper">
                                <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                                <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                                <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                                <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                                <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                                </div>
                                <p className="card-text">
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