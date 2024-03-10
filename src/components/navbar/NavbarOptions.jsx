// import React from 'react'

import "./NavbarOptions.scss"

export default function NavbarOptions({options, setOptions}) {
    return (
        <div className={`navbarOptions-container ${options.selected ? "" : "navbarOptions-container-hvr"}`}>
            <div
                className={`navbarOptions-title ${options.selected ? "navbarOptions-edit" : ""}`}
                >
                {options.title}
            </div>
        </div>
    )
}
