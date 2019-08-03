import React, { Component } from 'react';
import logo from '../../images/logo-ag.png';
import MenuOption from './MenuOptionsComponent';
import MenuUsuario from './MenuOpcionesUsuarioComponent';
import 'font-awesome/css/font-awesome.min.css';

class NavBar extends Component {

    render() {
        return (
            <React.Fragment>            
            <MenuUsuario/>
            <header>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="Navbar__brand" href="/">
                        <img className='iconLogo' src={logo} width='120' alt='Images logo' />
                    </a>
                    


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <MenuOption/>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                       
                    
                    </div>
                </nav>
            </header>
            </React.Fragment>
        );
    }
}

export default NavBar;