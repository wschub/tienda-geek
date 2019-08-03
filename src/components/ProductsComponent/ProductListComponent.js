import React from 'react';

import './Productstyle.css';

import Product from './ProductsFeatured';


class ProductList extends React.Component {

    //El constructor es el primer método que ocurre
    //este método recibe nuestros PROPS, los cuales debemos
    //utilizar para inicializar la super clase
    //Lugar idela para inicializar estado
    constructor(props){
        super(props);
        console.log('1. constructor()');
        //debemos decir this.
        this.state= {
            data: [],
        }
    }

    //El componente DidMount Excelente lugar para
    //cargar nuestra data que llega externa de un API
    //Es el tercer método que se ejecuta
    componentDidMount(){
        console.log('3. componentDidMount()');
        //simular peticion asincrona, decimos que en 3000 milisegundos
        //se actualice el estado con los datos que deseo mostrar
        //en pantalla

        //2. setTimeout retorna un timeoutID
        this.timeoutId = setTimeout(() => {
            this.setState({
                data:[
                    {
                        "url": "https://contents.mediadecathlon.com/p1666713/k$14a5241ea288dcf9b80c4b11e1cdefd3/sq/ZAPATOS+GOLF+HOMBRE+GRIP+WATERPROOF+BLANCO.jpg?f=700x700",
                        "titulo":"Sillon verde de sala",
                        "precio":"$70.99",
                        "descuento":"75.00"
                    },
                    {
                       "url":"https://safetyoutlet.vteximg.com.br/arquivos/ids/164369-700-700/image-e7cf54b2df4949138a430e71dae1a386.jpg?v=636770521823430000",
                       "titulo":"Sillon beige",
                        "precio":"$80.99",
                        "descuento":"120.00"
                    },
                    {
                        "url":"data:image/jpeg;base64,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",
                        "titulo":"Silla de escritorio",
                        "precio":"$40.99",
                        "descuento":"60.00"
                    },
                    {
                        "url":"https://karibik.vteximg.com.br/arquivos/ids/169866-700-700/ZMT09243_01.jpg?v=636795602260470000",
                        "titulo":"Mueble de sala",
                        "precio":"$100",
                        "descuento":"120.00"
                    },
                    {
                        "url":"https://www.kappastore.es//media/catalog/product/cache/199/image/9df78eab33525d08d6e5fb8d27136e95/3/0/3031s40_a19_lamaze.jpg",
                        "titulo":"Silla de madera",
                        "precio":"$15.99"
                    },
                    {
                        "url":"https://safetyoutlet.vteximg.com.br/arquivos/ids/165826-700-700/image-07e6dc502d9b4983b431fb8e76e962ba.jpg?v=636862176531500000",
                        "titulo":"Mueble negro",
                        "precio":"$63.99",
                        "descuento":"75.00"
                    }, {
                        "url":"https://www.cienporcientofutbol.cl/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/a/h/ah7362-060-phcfh001-2000_1.jpg",
                        "titulo":"Silla para exteriores",
                        "precio":"$40.99",
                        "descuento":"60.00"
                    },
                    {
                        "url":"https://www.masuniformes.com/images/360/zapato12/small/zapato12-01-01.jpg",
                        "titulo":"mueble",
                        "precio":"$30.99"
                    }
                   
                ]
            })
        });

    }

    //recibe dos argumentos los props que se tenian antes y el segundo
    //el state que tenía antes
    componentDidUpdate(prevProps, prevState){
        console.log('5. componenteDidUpdate()');
        //imprimiendo los valores que tenia antes
        //y los nuevos valores
        console.log({
            prevProps: prevProps,
            prevState: prevState
        });
        //comparando con los nuevos valores
        console.log({
            props: this.props,
            state: this.state
        })
    }

    //Ultimo componente, es el que ocurre ANTES de que se vaya
    //nuestro componente de pantalla (DEL DOM),
    //Detalle importante! debo garantizar si me muevo a otro lugar
    //parar la llamada ASINCRONA!, ya que el componente se fue es un ERROR COMUN
    
    componentWillUnmount(){
        console.log('6. componentWillUnMount()');
        //el timeoutID nos sirve para llamar otra funcion
        //llamada clearTimeout()
        //si el id existe y el trabajo esta pendiente lo CANCELA 
        clearTimeout(this.timeoutId);
    }
    //El segundo método que ocurre es el render!
    //También es 4 ya que ocurre una actualización al llamar
    //los datos de componentDidMount y junto a esa actualización
    //se llama a componentDidUpdate
    render() { 
        console.log('2/4. render()');
        return ( 
                   
        <div>
            <div class="container">
                
                        <Product products={this.state.data} />
                    </div>
                </div>
            
                   
        );
    }
}

export default ProductList;