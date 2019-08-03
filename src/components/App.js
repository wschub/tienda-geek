import React from 'react';
import Layout from '../components/Partials/LayoutComponent';
import { BrowserRouter, Switch } from 'react-router-dom';
import Footer from './FolderFooterComponent/FooterComponent';




function App() {
  return (
    <BrowserRouter>     
    <Layout>
        <Switch>
            <Footer/>
            
        </Switch> 
    </Layout>          
</BrowserRouter>
  )
}

export default App;
