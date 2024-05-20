// import React from 'react'
import './UserMenu.scss'

import {AiOutlineMenu} from 'react-icons/ai'
import { IoPersonOutline } from "react-icons/io5";

export default function UserMenu() {
  return (
    <div className='navbar-userMenu-container'>
    <div className='navbar-userMenu-burger'><AiOutlineMenu/>
    </div>
    <IoPersonOutline className="navbar-userMenu-avatar" size={22} />
    </div>
  )
}
