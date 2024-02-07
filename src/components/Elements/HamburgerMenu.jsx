// ./src/components/Elements/HamburgerMenu.jsx

import React from 'react'
import './HamburgerMenu.css'

function HamburgerMenu(props) {
    const { showMenu, onClick } = props;

    return (
        <button className={`flex flex-col gap-y-1 ${showMenu ? `nav-button-active` : ``} md:hidden`} onClick={onClick}>
            <span className={`w-6 h-1 bg-slate-900 rounded origin-top-left`}></span>
            <span className={`w-6 h-1 bg-slate-900 rounded`}></span>
            <span className={`w-6 h-1 bg-slate-900 rounded origin-bottom-left`}></span>
        </button>
    )
}

export default HamburgerMenu