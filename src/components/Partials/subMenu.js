import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css'


class Modal extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown">
                    Título del botón
                    </button>
                <ul className="dropdown-menu" role="menu">
                    <li><a href="#menu"> <div className="container" id="menu">
                        <div className="row">
                            <div className="col-xs-12" >
                                <div className="panel panel-info">
                                    <div className="panel-heading">
                                        <div className="panel-title">
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-xs-2"><img className="img-responsive" src="https://www.tiendafc.com/public/images/productos/grande/producto_565_1.jpg" />
                                            </div>
                                            <div className="col-xs-4">
                                                <h4 className="product-name"><strong>chair</strong></h4>
                                                <h4><small>chair</small></h4>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="col-xs-6 text-right">
                                                    <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                                </div>
                                                <div className="col-xs-4">
                                                    <input type="text" className="form-control input-sm" defaultValue="1" />
                                                </div>
                                                <div className="col-xs-2">
                                                    <button type="button" className="btn btn-link btn-xs">
                                                        <span className="glyphicon glyphicon-trash"> </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-xs-2"><img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumqT2dFa4amRP512jTHeR1HfHypnZ3FPUWE0ksNhlY_Uv1BcojA" />
                                            </div>
                                            <div className="col-xs-4">
                                                <h4 className="product-name"><strong>chair</strong></h4>
                                                <h4><small>chair gamer</small></h4>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="col-xs-6 text-right">
                                                    <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                                </div>
                                                <div className="col-xs-4">
                                                    <input type="text" className="form-control input-sm" defaultValue="1" />
                                                </div>
                                                <div className="col-xs-2">
                                                    <button type="button" className="btn btn-link btn-xs">
                                                        <span className="glyphicon glyphicon-trash"> </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-footer">
                                        <div className="row text-center">
                                            <div className="col-xs-9">
                                                <h4 className="text-right">Total <strong>$50.00</strong></h4>
                                            </div>
                                            <div className="col-xs-3">
                                                <button type="button" className="btn btn-success btn-block" >
                                                    Checkout
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> </a></li>
                </ul>
            </div>
        )
    }
}

export default Modal;