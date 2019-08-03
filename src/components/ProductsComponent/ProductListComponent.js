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
                        "url": "https://www.menzzo.es/19541-thickbox_default/sillon-vidal-1-plaza-terciopelo-verde.jpghttps://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/07/00112802101241____9__640x640.jpg",
                        "titulo":"Sillon verde de sala",
                        "precio":"$70.99",
                        "descuento":"75.00"
                    },
                    {
                       "url":"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201906/07/00112802101241____9__640x640.jpg",
                       "titulo":"Sillon beige",
                        "precio":"$80.99",
                        "descuento":"120.00"
                    },
                    {
                        "url":"https://papeleriasegarra.com/wp-content/uploads/2018/04/071-img-papeleria-segarra-muebles-oficina-silla-oficina-rojo.jpg",
                        "titulo":"Silla de escritorio",
                        "precio":"$40.99",
                        "descuento":"60.00"
                    },
                    {
                        "url":"https://rosen.vteximg.com.br/arquivos/ids/201319-830-830/Sillon-1-Cuerpo-Adele-Tela-Grafito-1-3670.jpg?v=636816078306870000",
                        "titulo":"Mueble de sala",
                        "precio":"$100",
                        "descuento":"120.00"
                    },
                    {
                        "url":"https://tugocolombia.vteximg.com.br/arquivos/ids/187399-1000-1000/105852-1.jpg?v=636637986259400000",
                        "titulo":"Silla de madera",
                        "precio":"$15.99"
                    },
                    {
                        "url":"https://famsa_imagenes2.storage.googleapis.com/243571024QUADRO.1.VPCAF.jpg",
                        "titulo":"Mueble negro",
                        "precio":"$63.99",
                        "descuento":"75.00"
                    }, {
                        "url":"https://cdn.shopify.com/s/files/1/0743/4993/products/Bellow_Sillon_individual_de_Vinipiel_-_Amarillo_Canario_2_1024x1024.png?v=1549586058",
                        "titulo":"Silla para exteriores",
                        "precio":"$40.99",
                        "descuento":"60.00"
                    },
                    {
                        "url":"https://www.vicalhome.com/2013965-thickbox_default/sillon.jpg",
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