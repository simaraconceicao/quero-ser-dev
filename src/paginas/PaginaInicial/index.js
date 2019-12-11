import React from 'react'
import Nav from '../../componentes/Nav'
import Header from '../../componentes/Header'

function PaginaInicial() {
    return (
        <main>
            <Nav />
            <Header classeHeader='home-header'>
                Turismo e Cultura Negra
                {/* <Busca /> */}
            </Header>

        </main>
    )
}

export default PaginaInicial