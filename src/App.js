import React from 'react'
import { Switch, Route } from 'react-router-dom'
// componentes
import Navbar from './componentes/Nav'


import Acomodacoes from './paginas/Acomodacoes'
import Experiencias from './paginas/Experiencias'
import PaginaInicial from './paginas/PaginaInicial'
import SejaAnfitriao from './paginas/SejaAnfitriao'




function App() {
  return (
    <Switch>
      <div>
        <Navbar />
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/acomodacoes' component={Acomodacoes} />
        <Route path='/experiencias' component={Experiencias} />
        <Route path='/anfitriao' component={SejaAnfitriao} />
      </div>
    </Switch>
  )
}

export default App
