import React from 'react'
import Nav from '../../componentes/Nav'
import Header from '../../componentes/Header'

import Footer from '../../componentes/Footer'

import DetalheAnfitriao from '../../componentes/DetalheAnfitriao'




function SejaAnfitriao () {
    return (
        <main>
            <Nav/>
            <Header classeHeader='home-header'>
                Seja Anfitrião
            </Header>
            <DetalheAnfitriao/>
          

            <Footer/>
                        
                       
        </main>
    )
}

export default SejaAnfitriao