import React from 'react'

import {BiSearch} from 'react-icons/bi'

export default function Search() {
  return (
        <div className="serach-container">
          <div
          className="search-menu">
              <div className="serach-menu-item">
                  AnyWare
              </div>
              <div className="serach-menu-item">
                  Any Week
              </div>
              <div className="serach-menu-item">
                  <div className="search-add">Add Guests</div>
                  <div className="search-icon">
                      <BiSearch size={18}/>
                  </div>
              </div>
          </div>
        </div>
      )
}
