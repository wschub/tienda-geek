import React, { Component } from 'react';
import logo from '../../images/logo-ag.png';
class NavBar extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="Navbar__brand" href="/">
                        <img className='iconLogo' src={logo} width='120' alt='Images logo' />
                    </a>



                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    </div>
                </nav>
            </header>
        );
    }
}

export default NavBar;