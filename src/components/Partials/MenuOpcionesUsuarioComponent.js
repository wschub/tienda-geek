
import React from 'react'
import { Link } from 'react-router-dom';
import './styles/PartialStyle.css'


class MenuUsuario extends React.Component{
    render(){
        return(
            <nav className="container-fluid fixed-top navbar-light bg-light indx_menuUsuario_nav d-flex justyfi-content-end">
                <Link className="text-decoration-none indx_menuUsuario_a" to={`/login`}><i className="fas fa-user-circle"></i> Inicio sesión / Registro</Link>
            </nav>
        );
    }
}

export default MenuUsuario;