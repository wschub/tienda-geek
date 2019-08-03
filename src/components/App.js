import React from 'react';
import Layout from '../components/Partials/LayoutComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Partials/HeaderComponent';
import RelatePosts from './ProductsDetailsComponent/RelatePosts';
import FiltrarProductos from './ProductsComponent/FiltrarProductosComponent';
import Footer from './Partials/FooterComponent';
import ProductList from './ProductsComponent/ProductListComponent'




function App() {
  return (
    <BrowserRouter>     
    <Layout>
        <Switch>
            <Route exact path = "/home" component={NavBar} />
            <Route exact path = "/home" component={RelatePosts} />
            <Route exact path = "/home" component={FiltrarProductos} />
            <Route exact path = "/home" component={Footer} />
            <Route exact path = "/home" component={ProductList} />
            
        </Switch> 
    </Layout>          
</BrowserRouter>
  )
}

export default App;
