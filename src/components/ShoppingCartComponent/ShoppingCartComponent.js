import React, { Component } from 'react';
import deleteItem from '../../images/deleteItem.png';
import './styles/ShoppingCartStyle.css';
import 'bootstrap'
import data from '../../data'
import { strict } from 'assert';
console.log(data)
class ShoppingCart extends Component {





    render() {
        return (
            <React.Fragment>
                <div className='container'> 
                        <div className='row'> 
                             <div className='col-12'>
                                <h1 className='titleShoppingCart'> ShoppingCart </h1>
                             </div>
                        </div>
                        <div className="card col-5">
                            <div className='row'> 
                                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'> 
                                    <img src={data[0].foto} className="card-img-bottom imgItem" alt="Img Item" />
                                </div>
                                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 card-body">
                                    <h1  class="card-tittle tittleItem">{data[0].title}</h1>
                                    <h3 class="card-text priceWithoutDiscount"> <strike> $199.90 </strike> </h3>   
                                    <h2 class="card-text priceWithDiscount">${data[0].precio} </h2> 
                                    <h2 class="card-text sizeItem">Size: {data[0].talla[1]} </h2> 
                                    <h2 class="card-text colorItem">Color: {data[0].color[1]} </h2> 
                                </div>
                                <div class="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 card-body">
                                <input class="form-control form-control-sm" type="number" max='100' min='1' placeholder="cantidad"></input>
                                </div>
                                <div class="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-3 card-body">
                                <h2 className='priceItem'> $52.08  </h2>
                                </div>
                                <div class="col-6 col-sm-6 col-md-2 col-lg-4 col-xl-1 card-body">
                                <a  href="/">
                                <img src={deleteItem} className="" alt="Img Delete" />
                                </a>
                                </div>
                            </div>
                        </div>
                </div> 
            </React.Fragment>

        );
    }
}

export default ShoppingCart;