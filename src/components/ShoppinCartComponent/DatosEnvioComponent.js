import React from 'react'

const DatosEnvio = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h2 className='container my-4'>Parchita</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Carrito</a></li>
                            <li className="breadcrumb-item"><a href="/">información</a></li>
                            <li className="breadcrumb-item "><a href="/">Envío</a></li>
                            <li className="breadcrumb-item "><a href="/">Pago</a></li>
                        </ol>
                    </nav>
                    <form>
                        <div className='row my-4 container'>
                            <h5 className='col-6'>Informacion de contacto</h5>
                            <div className='row col-6'>
                                <h6 className='col-6'>¿Ya tienes una cuenta?</h6>
                                <div className='col-6 text-left'>
                                    <button type="button" className="btn text-warning">Inicio sesión</button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="container ml-3">
                                <input type="text" className="form-control mb-3" placeholder="Email o número de teléfono móvil" />
                            </div>
                        </div>
                        <div className="form-group form-check container ml-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label mb-3" for="exampleCheck1">Quiero recibir noticias y ofertas exclusivas</label>
                        </div>
                        <div className='container mb-3'>
                            <h4> Dirección de envío</h4>
                        </div>
                        <div className="row container">
                            <div className="col-6">
                                <input type="text" className="form-control mb-3" placeholder="Nombres" />
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Apellidos" />
                            </div>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control mb-3" placeholder="Cédula" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control mb-3" placeholder="Dirección" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control mb-3" placeholder="Casa, apartamento, etc. (Opcional)" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control mb-3" placeholder="Ciudad" />
                        </div>
                        <div className="align-items-center container ml-3">
                            <div className="row">
                                <select className="custom-select col-4 container mb-3" id="inlineFormCustomSelect">
                                    <option selected>Pais/Región</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>

                                </select>
                                <select className="custom-select col-4 container" id="inlineFormCustomSelect">
                                    <option selected>Provincia/Estado</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="col-4 container">
                                    <input type="text" className="form-control" placeholder="Código Postal" />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <input type="text" className="form-control mb-3" placeholder="Teléfono" />
                        </div>
                        <div className="form-group form-check container ml-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label mb-3" for="exampleCheck1">Guardar mi información y consultar más rapidamente la próxima vez</label>
                        </div>
                        <div className="container row">
                            <div className='col-6 text-left'>
                                <button type="button" className="btn text-warning">Volver al carrito</button>
                            </div>
                            <div className='col-6 text-right'>
                                <button type="button" className="btn btn-warning">Continuar con envíos</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default DatosEnvio;