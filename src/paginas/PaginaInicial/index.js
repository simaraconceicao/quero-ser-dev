import React from 'react'

import Nav from '../../componentes/Nav'
import Header from '../../componentes/Header'
import HeroUnit from '../../componentes/HeroUnit'
import Footer from '../../componentes/Footer'

import GridExperiencia from '../../componentes/GridExperiencia'
import GridAcomodacao from '../../componentes/GridAcomodacao'





function Busca() {
    return (
        <main>
            <Nav />
            <Header classeHeader='home-header'>
            Turismo e Cultura Negra
            </Header>
            <HeroUnit/>            
            <GridAcomodacao/>
            <GridExperiencia/>
            <Footer/>         

        </main>
    )
}

export default Busca