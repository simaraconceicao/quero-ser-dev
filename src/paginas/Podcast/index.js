import React from 'react'


import Nav from '../../componentes/Nav'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'



//inserrir grid de episodios 
function Podcast() {
    return (
      <div>
        <Nav/>
        <Header classeHeader='home-header'>
                Em breve o Podcast estará disponível aqui!
        </Header>           

       
        <Footer/>
      </div>
    ) 
}

export default Podcast;