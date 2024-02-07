// ./src/components/Elements/MenusCard.jsx

import React from 'react'

function Card(props) {
    const { src, alt = ``, children, name, price } = props;
  
    return (
      <div className='flex flex-col justify-center gap-y-5 py-8'>
        <img src={src} alt={alt} className='w-auto aspect-square md:w-[350px]' />
        <h4 className='text-bright font-montserrat text-6xl font-semibold'>{name}</h4>
        <p className='text-bright font-montserrat text-2xl font-light text-balance'>{children}</p>
        <h4 className='text-bright font-montserrat text-4xl font-medium'>{price}</h4>
      </div>
    )
  }

export default Card