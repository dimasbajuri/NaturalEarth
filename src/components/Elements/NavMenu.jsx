// ./src/components/Elements/NavMenu.jsx

import React from 'react'

const navMenu = [
    { name: "Home", href: "#", id: 1 },
    { name: "About", href: "#about", id: 2 },
    { name: "Menu", href: "#menu", id: 3 },
    { name: "Contact", href: "#contact", id: 4 },
];


function NavMenu(props) {
    const { showMenu } = props;

    return (
        <div className={`gap-x-4 ${showMenu ? `flex` : `hidden`} flex-col absolute top-full right-0 gap-y-2 bg-slate-50 w-full py-2 md:flex md:flex-row md:static`}>
            {navMenu.map((value) => {
                return (
                    <a href={value.href} key={value.id} className='text-slate-700 hover:text-slate-900 text-right pr-2 w-full'>{value.name}</a>
                )
            })}
        </div>
    )
}

export default NavMenu