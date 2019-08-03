import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PartialStyle.css'

const Footer = () => {
    return (

        <div className=" ml-5 row my-5 container">
            <ul className='col-3 '>
                <h6 className='mb-3'>PRODUCTS</h6>
                <li><Link to='/'>Prices drop</Link></li>
                <li><Link to='/'>New products</Link></li>
                <li><Link to='/'>Best sales</Link></li>
                <li><Link to='/'>Contact us</Link></li>
                <li><Link to='/'>Sitemap</Link></li>
            </ul>
            <ul className="col-3 color"  >
                <h6 className='mb-3'>PRODUCTS</h6>
                <li><Link to='/'>Prices drop</Link></li>
                <li><Link to='/'>New products</Link></li>
                <li><Link to='/'>Best sales</Link></li>
                <li><Link to='/'>Contact us</Link></li>
                <li><Link to='/'>Sitemap</Link></li>
            </ul>
            <ul className='col-3'>
                <h6 className='mb-3'>PRODUCTS</h6>
                <li><Link to='/'>Prices drop</Link></li>
                <li><Link to='/'>New products</Link></li>
                <li><Link to='/'>Best sales</Link></li>
                <li><Link to='/'>Contact us</Link></li>
                <li><Link to='/'>Sitemap</Link></li>
            </ul>
            <ul className='col-3'>
                <h6 className='mb-3'>PRODUCTS</h6>
                <li><Link to='/'>Prices drop</Link></li>
                <li><Link to='/'>New products</Link></li>
                <li><Link to='/'>Best sales</Link></li>
                <li><Link to='/'>Contact us</Link></li>
                <li><Link to='/'>Sitemap</Link></li>
            </ul>

            <div className='container'>            
            </div>

            <div className="text-white bg-dark w-100 row " role="alert">
                <h6 className="center col-6 ">@ 2019 ecommerce software by Prestashop</h6>
                <div className="d-flex col-6 justify-content-end">
                    <i className="fab fa-2x fa-cc-paypal ml-2"></i>
                    <i className="fab fa-2x fa-cc-mastercard ml-2"></i>
                    <i className="fab fa-2x fa-cc-mastercard ml-2"></i>
                    <i className="fab fa-2x fa-cc-visa ml-2"></i>
                </div>
            </div>

        </div>
    )
}
export default Footer;