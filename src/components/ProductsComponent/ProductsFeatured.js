import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productstyle.css';
import 'font-awesome/css/font-awesome.min.css';



class Product extends React.Component {

    render() {
        const {
            foto, title, price  } = this.props
        return (
            <div class="col-md-3 col-sm-6">
                <div className="product_grid">
                    <div className="product_image">
                        <a href="#">
                            <img src={foto} />
                        </a>
                        <ul className="product_social">
                            <li><a href="#"><i className="fa fa-shopping-bag"></i></a></li>
                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>

                    </div>
                    <div className="product_content">
                        <h3 className="title"><a href="#">{title}</a></h3>
                        <div className="price">
                            {price}
                        
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
    }
}

export default Product;