import React from 'react'
import Logo from '../../imagens/logo-branca.png'
import Menu from './Menu'

import './styles.css'

function Nav() {
    return (
        <nav className='navbar'>
            <img src={Logo}
            alt='Logotipo quero ser dev'
            className='navbar-logo'
            />
            <Menu/>
        </nav>
    )

}

export default Nav
