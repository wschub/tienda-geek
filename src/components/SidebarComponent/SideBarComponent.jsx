import React, { Component } from "react";
import Deals from "./images/promocionzapatos.jpg";
import Testimonial from "./images/icontestomonial.png";
import Product from '../ProductsComponent/ProductsFeatured';
import data from '../../data';
import $ from 'jquery'; 

const datos = {
    todos: data,
    formal: data.filter((entry) => entry.tipo === "formal"),
    casual: data.filter((entry) => entry.tipo === "casual"),
    deportivo: data.filter((entry) => entry.tipo === "deportivo")
}

setTimeout(function () {
    $('.results > li').hide();
}, 1);

$("input").on("click", function () {
    if ($(this).attr("id") === "todos") {
        $("#formal, #deportivos, #casual").prop('checked', false);
        filtrar(true);
    } else {
        $("#todos").prop('checked', false);
        filtrar(false);
    }
});

function filtrar(e) {
    if (e) {
        $(".results li").each(function () {
            $(this).show();
        });
    } else {
        $('.results li').hide();
        $('.tags').find('input:checked').each(function () {
            $('.results li.' + $(this).attr('id')).show();
        });
    }
}

class SideBar extends Component {
    state = {
        data: datos["todos"]
    }

    handleClic = (e) => {
        e.preventDefault();

        this.setState({
            data: datos[e.target.value]
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3">
                        <div className="mb-4">
                            <h2>Filtros</h2>
                            <button value='todos' id='todos' className="btn btn-dark mb-4" onClick={this.handleClic}>(Reset)</button>
                            <h5>Categoría</h5>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="hombre"
                                />
                                <label className="custom-control-label" htmlFor="hombre">
                                    Hombre
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="mujer"
                                />
                                <label className="custom-control-label" htmlFor="mujer">
                                    Mujer
                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5>Estilo</h5>
                            <div className="custom-control custom-checkbox">
                                <input
                                    
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="formal"
                                />
                                <label className="custom-control-label" htmlFor="formal">
                                    Formal
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="deportivos"
                                />
                                <label className="custom-control-label" htmlFor="deportivos">
                                    Deportivos
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="casual"
                                />
                                <label className="custom-control-label" htmlFor="casual">
                                    Casual
                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5>Tamaño</h5>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="32"
                                />
                                <label className="custom-control-label" htmlFor="32">
                                    32
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="34"
                                />
                                <label className="custom-control-label" htmlFor="34">
                                    34
                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5>Color</h5>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="blanco"
                                />
                                <label className="custom-control-label" htmlFor="blanco">
                                    Blanco
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="negro" />
                                <label className="custom-control-label" htmlFor="negro">
                                    Negro
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="naranja" />
                                <label className="custom-control-label" htmlFor="naranja">
                                    Naranjado
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="azul" />
                                <label className="custom-control-label" htmlFor="azul">
                                    Azul
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="verde" />
                                <label className="custom-control-label" htmlFor="verde">
                                    Verde
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="amarillo" />
                                <label className="custom-control-label" htmlFor="amarillo">
                                    Amarillo
                </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="rosado" />
                                <label className="custom-control-label" htmlFor="rosado">
                                    Rosa
                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5>Precio</h5>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="50"
                                />
                                <label className="custom-control-label" htmlFor="50">
                                    Menos de 50
              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="50-100"
                                />
                                <label className="custom-control-label" htmlFor="50-100">
                                    Entre 50 - 100
              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="100-150"
                                />
                                <label className="custom-control-label" htmlFor="100-150">
                                    Entre 100 - 150
              </label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="150"
                                />
                                <label className="custom-control-label" htmlFor="150">
                                    Más de 150
              </label>
                            </div>

                        </div>
                        <ul className="results">
                            <li className="formal">formal</li>
                            <li className="deportivos">deportivos</li>
                            <li className="casual">casual</li>                            
                        </ul>
                        <div className="mb-4">
                            <h5>Promoción</h5>
                            <img src={Deals} alt="" className="img-fluid shadow border" />
                        </div>
                        <div>
                            <h5>Testimonial</h5>
                            <div
                                id="carouselExampleControls"
                                className="carousel slide mb-4 py-4 text-center shadow rounded"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={Testimonial}
                                            className="mx-auto d-block w-50 rounded-circle"
                                            alt="..."
                                        />
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Nulla ad harum voluptate praesentium asperiores libero ab
                                            sed?
                    </p>
                                        <h5>Daniela Zapata</h5>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Testimonial}
                                            className="mx-auto d-block w-50 rounded-circle"
                                            alt="..."
                                        />
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Nulla ad harum voluptate praesentium asperiores libero ab
                                            sed?
                    </p>
                                        <h5>Daniel isaza</h5>
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={Testimonial}
                                            className="mx-auto d-block w-50 rounded-circle"
                                            alt="..."
                                        />
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Nulla ad harum voluptate praesentium asperiores libero ab
                                            sed?
                    </p>
                                        <h5>Juan Alvarez</h5>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleControls"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleControls"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 col-lg-9 bg-info">
                        {
                            this.state.data.map(producto =>

                                <Product
                                    foto={producto.foto}
                                    title={producto.title}
                                    price={producto.precio}
                                />
                            )
                        }
                    </div>
                </div>


            </div>
        );
    }
}

export default SideBar;