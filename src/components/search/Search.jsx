// import React from 'react'
import './Serach.scss'
import {BiSearch} from 'react-icons/bi'

export default function Search() {
  return (
        <div className="serach-container">
          <div
          className="search-menu">
             
              <div className="serach-menu-item">
                  <div className="search-add">Who <br/><span>Add Guests</span></div>
                  <div className="search-icon">
                      <BiSearch size={18}/>
                  </div>
              </div>
          </div>
        </div>
      )
}
