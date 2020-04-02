import React from 'react'

import Header from '../../componentes/Header'
import GridAcomodacao from '../../componentes/GridAcomodacao'
// import Formulario from '../../componentes/Formulario'
// import GridAcomodacao from '../../componentes/GridAcomodacao';
import Footer from '../../componentes/Footer'
import { getMensagens } from '../../services/mensagens'



class Acomodacoes extends React.Component {
    componentDidMount() {
        getMensagens()
        .then(response => {
            console.log(response.data)
        })
    }
    render() {
        return (
            <>
                <Header/>
                {/* <Formulario/> */}
                <GridAcomodacao/>
                <Footer/>
    
            </>
        )
    }

}

export default Acomodacoes

