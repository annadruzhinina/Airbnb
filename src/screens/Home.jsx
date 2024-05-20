// import React from 'react'
// Import Components
import Navabar from '../components/navbar/Navbar.jsx'
import Search from '../components/search/Search.jsx'
// Import CSS
import './Home.scss'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-navbar-placeholder">
      </div>
      <Navabar />
      <Search/>
    </div>
  )
}
