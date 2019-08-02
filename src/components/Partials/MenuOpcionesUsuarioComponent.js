import React from 'react'
import '../Partials/MenuOpcionesUsuarioStyle.css'
import { Link } from 'react-router-dom';


class MenuUsuario extends React.Component{
    render(){
        return(
            <nav className="container-fluid navbar fixed-top navbar-light bg-light indx_menuUsuario_nav">
                <Link className="text-decoration-none indx_menuUsuario_a" to={`/login`}><i className="fas fa-user-circle"></i> Inicio sesión / Registro</Link>
            </nav>
        );
    }
}

export default MenuUsuario;

