// import React, { useState, useEffect } from 'react'

// // Importe de estilo
// import './styles.css'
// //Hooks
// function Experiencias () {
//   const [experiencias, setExperiencias] = useState(undefined)

//   useEffect(() => {
//     setTimeout(
//       getExperiencias()
//         .then(response => {
//         console.log('data', response.data)
//           setExperiencias(response.data)
//         })
//         .catch(error => {
//           console.error(error)
//         }),
//       5000
//     )
//   })

//   return (
//     <div className='card'>
//       {experiencias ? (
//         experiencias.map((item, index) => (
//           <Experiencia experiencia={item} key={index + 'experiencia'} />
//         ))
//       ) : (
//         <span>Carregando experiencias :D</span>
//       )}
//     </div>
//   )
// }

// export default Experiencias