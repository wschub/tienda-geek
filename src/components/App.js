import React from 'react';
import Layout from '../components/Partials/LayoutComponent';
import GridLayoutProducts from '../components/ProductsComponent/GridLayoutProductsComponent';
import Promocion from '../components/ProductsComponent/PromocionesComponent'




function App() {
  return (
  <React.Fragment>
    <Layout>
    <Promocion/>
    </Layout>
  </React.Fragment>
  )
}

export default App;
