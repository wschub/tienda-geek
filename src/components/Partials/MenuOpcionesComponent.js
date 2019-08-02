import React from 'react'

const MenuOpciones = () => {
    return (
        <div className='container row d-flex justify-content-center'>        
        <button type="button" className="btn">Home</button>
        <div className='/'>
            <div className="dropdown">
                <a className="btn dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Productos
        </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/">Formal</a>
                    <a className="dropdown-item" href="/">Casual</a>
                    <a className="dropdown-item" href="/">Deportivos</a>
                </div>
            </div>            
        </div>
        <button type="button" className="btn">Contacto</button>
        </div>
    )
}
export default MenuOpciones;
