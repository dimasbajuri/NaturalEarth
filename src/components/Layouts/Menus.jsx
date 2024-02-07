// ./src/components/Layouts/Menus.jsx

import React from 'react'
import Header3 from '../Elements/Header3'
import SectionFormat from '../Elements/SectionFormat'
import MenusCardGroup from '../Fragments/MenusCardGroup'


function Menus() {
  return (
    <SectionFormat id="menu" sectionClassName="bg-dark" subSectionClassName="py-10">
      <div className='text-center'>
        <Header3 classname="text-bright">
          What Do We Sell?
        </Header3>
        <p className='text-bright font-montserrat text-2xl md:text-5xl'>Know What We Sell</p>
      </div>
      <MenusCardGroup />
    </SectionFormat>
  )
}

export default Menus