import React from 'react'
import './styles.css'

export default function Acomodacao (props) {
  return (
    <div className='acomodacao'>
      <img
        className='acomodacao__perfil'
        src={props.title}
        alt='foto-perfil-usuario'
      />
      <div>
        <h2 className='acomodacao__nome'>{props.title}</h2>
        <h3 className='acomodacao__subtitulo'>{props.acomodacao.subtitulo}</h3>
        <hr />
        <p>{props.acomodacao.texto}</p>
      </div>
    </div>
  )
}