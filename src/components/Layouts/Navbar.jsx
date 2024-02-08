// ./src/components/Layouts/Navbar.jsx

import React, { useState } from 'react'
import HamburgerMenu from '../Elements/HamburgerMenu';
import NavMenu from '../Elements/NavMenu';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='w-full bg-slate-50 fixed drop-shadow-md top-0 z-10'>
            <nav className='flex items-center justify-between container mx-auto px-2'>
                <a href='#'>
                    <img src="./logo.png" className='w-16 md:w-12' alt="" />
                </a>
                <div className='flex gap-x-4'>
                    <HamburgerMenu showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />
                    <NavMenu showMenu={showMenu} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar