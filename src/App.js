import React from 'react'
import { Switch, Route } from 'react-router-dom'
// componentes
import Navbar from './componentes/Nav'
// paginas
import PaginaInicial from './paginas/PaginaInicial'
import Acomodacoes from './paginas/Acomodacoes'
import Experiencias from './paginas/Experiencias'
import Busca from './paginas/Busca'
import SejaAnfitriao from './paginas/SejaAnfitriao'


function App () {
  return (
    <Switch>
      <div>
        <Navbar />
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/acomodacoes' component={Acomodacoes} />
        <Route path='/experiencias' component={Experiencias} />
        <Route path='/busca' component={Busca} />
        <Route path='/anfitriao' component={SejaAnfitriao} />
      </div>
    </Switch>
  )
}

export default App
