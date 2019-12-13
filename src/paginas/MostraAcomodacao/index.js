import React from 'react'
import { getMensagens } from '../../services/mensagens'
import Mensagem from '../../componentes/Mensagem'

import './styles.css'

class MostraAcomodacao extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mensagens: []
    }
  }

  componentDidMount() {
    getMensagens()
    
      .then(response => {
          console.log(response.data)
        this.setState({
          mensagens: response.data
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render () {
    return (
      <section className='chat'>
        <h2>Mensagens</h2>
        {this.state.mensagens.length > 0
          ? this.state.mensagens.map(mensagem => {
            return <Mensagem {...mensagem} key={mensagem.id} />
          })
          : <span>Carregando mensagens :D</span>
      }
      </section>
    )
  }
}

export default MostraAcomodacao