import React from 'react';
import imagen1 from '../image/logo-geek.png';

class logo extends React.Component{
    render(){
        return(
            <div id="indx_contenedor">
                <img src={imagen1} alt="logo de academia geek" />

            </div>
        )
    }
}

export default logo;