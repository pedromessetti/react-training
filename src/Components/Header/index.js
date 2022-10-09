import React from 'react'
import logo from './logo.svg'
import './header.css'

const Header = () => {
    return (
        <header>
            <img src={logo} className="App-logo" alt="React logo girando" />
            <h1>Treino React</h1>
        </header>
    )
}

export default Header