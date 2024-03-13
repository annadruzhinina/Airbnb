// import React from 'react'
import Logo from './Logo.jsx'
import Search from './Search.jsx'

import './Navbar.scss'

export default function Navabar() {
    return (
        <div className='navbar-container'>
            <Logo/>
            <Search/>
        </div>
    )
}
