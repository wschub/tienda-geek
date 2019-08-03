import React from 'react';

const FiltrarProductos = () => {
    return (
        <div className='col-2'>
        <div className='container d-flex-column my-5'>
            <div className="form-group form-check">
                <h4 className='mt-5'> Talla </h4>
                <input type="checkbox" className="form-check-input ml-1 my-3" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1"></label>                
            </div>
            <div className="form-group form-check">
                <h4 className='mt-5'> Color </h4>
                <input type="checkbox" className="form-check-input ml-1 my-3" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1"></label>
            </div>
            <div className="form-group form-check">
                <h4 className='mt-5'> Tipo </h4>
                <input type="checkbox" className="form-check-input ml-1 my-3" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1"></label>                
            </div>
        </div>
        </div>
    )
}
export default FiltrarProductos;