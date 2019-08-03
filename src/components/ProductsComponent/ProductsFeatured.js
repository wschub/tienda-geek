import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productstyle.css';
import 'font-awesome/css/font-awesome.min.css';



class Product extends React.Component {

    render() {
        return (
        <article>
            <div class="producto__destacado mb-3">
                  
                    <nav class="navbar navbar-dark bg-dark">
                          <span class="navbar-brand mb-0 h1">Articulos Destacados</span>
                      </nav>
                    </div>
                
            
            <div class="row">    
        {
            this.props.products.map(product =>{
                return(
                    
                    
                    <div class="col-md-3 col-sm-6">
                    <div className="product_grid">
                    <div className="product_image">
                        <a href="#">
                            <img  src={product.url}/>
                        </a>
                        <ul className="product_social">
                            <li><a href="#"><i className="fa fa-shopping-bag"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        
                    </div>
                    <div className="product_content">
                        <h3 className="title"><a href="#">{product.titulo}</a></h3>
                        <div className="price">
                            {product.precio}
                           
                            <span>{product.descuento}</span>
                        </div>
                     
                        <ul className="product_rating">
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                        </ul>
                    </div>
                </div>
                </div>
       
                
             
            
                );
               
            })
        }
         </div>
         </article>
                                  );
                                       }
                                   }    
                                    
export default  Product;