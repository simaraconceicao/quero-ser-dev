import React from 'react'
import Nav from '../../componentes/Nav'
import Header from '../../componentes/Header'

import CardAcomodacao from '../../componentes/Cards/CardAcomodacao'
import CardExperiencia from '../../componentes/Cards/CardExperiencia'
import CardCategoria from '../../componentes/Cards/CardCategoria'
import CardCat from '../../componentes/Cards/CardCat'
import Reservar from '../../componentes/Botoes/Reservar'
import Comprar from '../../componentes/Botoes/Comprar'
import Pesquisar from '../../componentes/Botoes/Pesquisar'
// import GoogleMaps from '../../componentes/Inputs/GoogleMaps'
// import MaterialUIPickers from '../../componentes/Inputs/MaterialUIPickers'
import Hospedes from '../../componentes/Inputs/Hospedes'


function Busca() {
    return (
        <main>
            <Nav />
            <Header classeHeader='home-header'>
                Turismo e Cultura Negra
            </Header>
            <CardAcomodacao />
            <CardExperiencia />
            <CardCategoria />
            <CardCat/>
            <Reservar/>
            <Comprar/>
            <Pesquisar/>
            {/* <GoogleMaps/> */}
            {/* <MaterialUIPickers/> */}
            <Hospedes/>


        </main>
    )
}

export default Busca