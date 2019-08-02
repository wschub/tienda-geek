import React from 'react';

const MenuOpciones = () => {
    return(
        <div className='container row d-flex justify-content-center my-5'>            
        <button type="button" className="btn bg-menu">Home</button>
        <div className="dropdown">
        <button className="btn dropdown-toggle bg-menu" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Productos
        </button>       
      </div>     
      <button type="button" className="btn bg-menu">Contacto</button>
    </div>
    )
} 
export default MenuOpciones;