import React from 'react';

import Header from '../../componentes/Header'
import Formulario from '../../componentes/Formulario'
// import GridExperiencia from '../../componentes/GridExperiencia'; inserir grid de postagens
import Footer from '../../componentes/Footer';


export default function Acomodacoes() {
    return (
        <React.Fragment>
            <Header/>
            <Formulario/>                      
            {/* <GridExperiencia/> ------->inserir grid de postagens*/}
            <Footer/>
        </React.Fragment>


    )


}