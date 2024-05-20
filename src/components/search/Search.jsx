// import React from 'react'
import './Serach.scss'
import {BiSearch} from 'react-icons/bi'

export default function Search() {
  return (
        <div className="serach-container">
          <div
          className="search-menu">
              <div className="serach-menu-item">
                Where <br/> <span>Search destination</span>
              </div>
              <div className="serach-menu-item">
                  Check In <br/> <span>Add dates</span>
              </div>
              <div className="serach-menu-item">
                  Check Out <br/> <span>Add dates</span>
              </div>
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
