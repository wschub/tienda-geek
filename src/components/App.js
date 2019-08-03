import React from 'react';
import Layout from '../components/Partials/LayoutComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Partials/HeaderComponent';




function App() {
  return (
    <BrowserRouter>     
    <Layout>
        <Switch>
            <Route exact path = "/home" component={NavBar} />
            
            
        </Switch> 
    </Layout>          
</BrowserRouter>
  )
}

export default App;
