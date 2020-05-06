import React from 'react'
import { Switch, Route } from 'react-router-dom'
// componentes
import Navbar from './componentes/Nav'


import Podcast from './paginas/Podcast'
import Blog from './paginas/Blog'
import PaginaInicial from './paginas/PaginaInicial'
import BuscaCursos from './paginas/BuscaCursos'




function App() {
  return (
    <Switch>
      <div>
        <Navbar />
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/podcast' component={Podcast} />
        <Route path='/blog' component={Blog} />
        <Route path='/cursos' component={BuscaCursos} />
      </div>
    </Switch>
  )
}

export default App
