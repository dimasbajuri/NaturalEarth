// ./src/components/Elements/Header3.jsx

import React from 'react'

function Header3(props) {
    const { children, classname = '' } = props;

    return (
        <h3 className={`font-josefin text-5xl font-semibold md:text-6xl ${classname}`}>
            {children}
        </h3>
    )
}

export default Header3