import React from 'react';

import Header from '../../componentes/Header'
import Formulario from '../../componentes/Formulario'
import GridAcomodacao from '../../componentes/GridAcomodacao';
import Footer from '../../componentes/Footer';


export default function Acomodacoes() {
    return (
        <React.Fragment>
            <Header/>
            <Formulario/>
            <GridAcomodacao/>
            <Footer/>

        </React.Fragment>


    )


}