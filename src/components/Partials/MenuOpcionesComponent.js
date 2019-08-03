import React from 'react';
import data from '../../data';
import Product from '../ProductsComponent/ProductsFeatured';

const datos = {
    todos: data,
    formal: data.filter((entry) => entry.tipo == "formal"),
    casual: data.filter((entry) => entry.tipo == "casual"),
    deportivo: data.filter((entry) => entry.tipo == "deportivo")
}


class MenuOpciones extends React.Component {
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
            <div className='container row d-flex justify-content-center'>
                <button type="button" value='todos' className="btn" onClick={this.handleClic}>Home</button>
                <div className='/'>
                    <div className="dropdown">
                        <a className="btn dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Productos
        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <button type="button" value="formal" onClick={this.handleClic}>
                                Formal </button>
                            <button type="button" value="casual" onClick={this.handleClic}>
                                Casual </button>
                            <button type="button" value="deportivo" onClick={this.handleClic}>
                                Deportivo </button>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn">Contacto</button>

                {
                    this.state.data.map(producto =>

                        <Product
                            foto={producto.foto}
                            title={producto.title}
                            price='45000'
                        />
                    )
                }
            </div>
        );
    }
}

export default MenuOpciones;


