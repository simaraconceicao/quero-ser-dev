import React from 'react'

import Nav from '../../componentes/Nav'
import Header from '../../componentes/Header'
import Copyright from '../Copyright'
import EscolherData from '../../componentes/Inputs/EscolherData'
import Hospedes from '../../componentes/Inputs/Hospedes'
import Reservar from '../../componentes/Botoes/Reservar'

import './styles.css'


function Busca() {
    return (
        <main>
            <Nav />
            <Header classeHeader='home-header'>
            Turismo e Cultura Negra
            {/* <EscolherCidade/> */}
            <div classeName="formulario">
                <EscolherData/>
                <Hospedes/>
                <Reservar/>
            </div>
            </Header>
            <Copyright/>           

        </main>
    )
}

export default Busca