import React from 'react'
import './styles.css'
// import { getExperiencias } from '../../services/experiencias'
export default function Experiencia (props) {
  return (
    <div className='experiencia'>
      <img
        className='experiencia__perfil'
        src={props.title.data.rendered}
        alt='foto-perfil-usuario'
      />
      <div>
        <h2 className='experiencia__nome'>{props.title.rendered}</h2>
        <h3 className='experiencia__subtitulo'>{props.experiencia.subtitulo}</h3>
        <hr />
        <p>{props.experiencia.texto}</p>
      </div>
    </div>
  )
}