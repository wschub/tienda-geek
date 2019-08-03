import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className='row container text-center m-0'>
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
            <div className='row container text-center my-5 '>
                <div className='mx-5 col-6 '>
                    <h5>Download Our App</h5>
                </div>                
                <div className='mx-5 col-6'>
                    <i className="fab fa-apple ml-5 fa-2x"></i>
                    <i className="fab fa-google-play ml-5 fa-2x"></i>
                    <i className="fab fa-windows ml-5 fa-2x"></i>
                </div>

            </div>

            <div className="text-white bg-dark w-100 m-0" role="alert">
                <div className='container row'>
                    <div className="col-6 text-center"> <h6> @ Copyright 2019 Academia Geek</h6></div>
                    <div className="d-flex col-6 justify-content-end">
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