// import React, { useState, useEffect } from 'react'
// import Acomodacoes from '../../componentes/CardAcomodacao'
// import { getAcomodacoes } from '../../services/acomodacoes.js'
// // Importe de estilo
// import './styles.css'
// //Hooks
// function Acomodacoes () {
//   const [acomodacoes, setAcomodacoes] = useState(undefined)

//   useEffect(() => {
//     setTimeout(
//       getAcomodacoes()
//         .then(response => {
//             console.log(response.data)
//           setAcomodacoes(response.data)
//         })
//         .catch(error => {
//           console.error(error)
//         }),
//       5000
//     )
//   })

//   return (
//     <div className='card'>
//       {acomodacoes ? (
//         acomodacoes.map((item, index) => (
//           <Acomodacao acomodacao={item} key={index + 'acomodacao'} />
//         ))
//       ) : (
//         <span>Carregando acomodacoes :D</span>
//       )}
//     </div>
//   )
// }

// export default Acomodacoes