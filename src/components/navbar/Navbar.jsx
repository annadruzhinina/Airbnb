// import React from 'react'
import Logo from './Logo.jsx'
import NavbarOptions from './NavbarOptions.jsx'
import UserMenu from './UserMenu.jsx'
import {AiOutlineGlobal} from 'react-icons/ai'

import './Navbar.scss'

import { useState } from 'react'


export default function Navabar() {

    const [options,setOptions]=useState(
        [
            {
                title:"Stays",
                url:"",
                selected:true
            },
            {
                title:"Experiences",
                url:"",
                selected:false
            },
            {
                title:"Online Experiences",
                url:"",
                selected:false
            },
        ]
    )
    return (
        <div className='navbar-container'>
            <Logo/>
            <div className='navbar-options-container'>
                {
                    options.map((item,index)=><NavbarOptions options={item} setOptions={setOptions} key={index}/>)
                }
            </div>
            <div className='navbar-login-container'>
                <div className='navbar-login-text-container'>
                    <div>
                        Airbnb your home
                    </div>
                </div>
                <div className='navbar-login-icon-container'><AiOutlineGlobal size={22} /></div>
               <UserMenu/>
            </div>
        </div>
    )
}
