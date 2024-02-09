// ./src/components/Fragments/PopupModalBox.jsx

import React, { useState } from 'react'
import Header3 from '../Elements/Header3'

function PopupModalBox(props) {
    const { popUp, setPopUp } = props;

    return (
        <div className={`z-10 fixed w-full h-full bg-black bg-opacity-40 overflow-auto left-0 top-0 items-center justify-center px-10 ${popUp ? `flex` : `hidden`}`} onClick={() => setPopUp(false)}>
            <div className='fixed bg-bright w-fit h-fit p-6 md:rounded-md'>
                <Header3 classname="py-2">Images Credit</Header3>
                <p>Scoot Warmana (Unsplash): <a href="https://unsplash.com/photos/row-of-vegetables-placed-on-multilayered-display-fridge-NpNvI4ilT4A" target='_blank' className='underline text-green'>Here is the link</a></p>
                <p>And 4 others is from Bing Image Creator: <a href="https://www.bing.com/images/create" target='_blank' className='underline text-green'>Here is the link</a></p>
            </div>
        </div>
    )
}

export default PopupModalBox