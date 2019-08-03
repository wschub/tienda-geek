import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PartialStyle.css'

const Footer = () => {
    return (
        <React.Fragment>
            <div className="container-fluid text-center mt-5">
                <div className='row'>
                    <ul className='col-lg-3 col-sm-6 col-md-6 col-xs-12'>
                        <h6 className='mb-3'>PRODUCTS</h6>
                        <li><Link to='/'>Prices drop</Link></li>
                        <li><Link to='/'>New products</Link></li>
                        <li><Link to='/'>Best sales</Link></li>
                        <li><Link to='/'>Contact us</Link></li>
                        <li><Link to='/'>Sitemap</Link></li>
                    </ul>
                    <ul className="col-lg-3 col-sm-6 col-md-6 col-xs-12"  >
                        <h6 className='mb-3'>PRODUCTS</h6>
                        <li><Link to='/'>Prices drop</Link></li>
                        <li><Link to='/'>New products</Link></li>
                        <li><Link to='/'>Best sales</Link></li>
                        <li><Link to='/'>Contact us</Link></li>
                        <li><Link to='/'>Sitemap</Link></li>
                    </ul>
                    <ul className='col-lg-3 col-sm-6 col-md-6 col-xs-12'>
                        <h6 className='mb-3'>PRODUCTS</h6>
                        <li><Link to='/'>Prices drop</Link></li>
                        <li><Link to='/'>New products</Link></li>
                        <li><Link to='/'>Best sales</Link></li>
                        <li><Link to='/'>Contact us</Link></li>
                        <li><Link to='/'>Sitemap</Link></li>
                    </ul>
                    <ul className='col-lg-3 col-sm-6 col-md-6 col-xs-12'>
                        <h6 className='mb-3'>PRODUCTS</h6>
                        <li><Link to='/'>Prices drop</Link></li>
                        <li><Link to='/'>New products</Link></li>
                        <li><Link to='/'>Best sales</Link></li>
                        <li><Link to='/'>Contact us</Link></li>
                        <li><Link to='/'>Sitemap</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container">
            <div className='row text-center my-5'>
                <div className='col-md-6'>
                    <h5>Download Our App</h5>
                </div>                
                <div className='col-md-6'>
                    <i className="fab fa-apple fa-2x"></i>
                    <i className="fab fa-google-play ml-5 fa-2x"></i>
                    <i className="fab fa-windows ml-5 fa-2x"></i>
                </div>

            </div>
            </div>

            <div className="text-white bg-dark text-center" role="alert">
                <div className='row m-0'>
                    <div className="col-md-6"> <h6> @ Copyright 2019 Academia Geek</h6></div>
                    <div className="col-md-6">
                        <i className="fab fa-2x fa-cc-paypal ml-2 icono2"></i>
                        <i className="fab fa-2x fa-cc-mastercard ml-2 icono2"></i>
                        <i className="fab fa-2x fa-cc-mastercard ml-2 icono2"></i>
                        <i className="fab fa-2x fa-cc-visa ml-2 icono2"></i>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footer;