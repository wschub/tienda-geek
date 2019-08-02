import React from 'react';
import Layout from '../components/Partials/LayoutComponent';
import GridLayoutProducts from '../components/ProductsComponent/GridLayoutProductsComponent';



function App() {
  return (
  <React.Fragment>
   <Layout> 
     <GridLayoutProducts/>
   </Layout>
    
  </React.Fragment>
  )
}

export default App;
