// ./src/components/Layouts/Banner.jsx

import React from 'react'

function Banner() {
    return (
        <div>
            <div className='mt-[64px] md:mt-[48px] bg-banner lg:h-[93vh]'>
                <div className='h-full w-full lg:bg-gradient-to-r lg:from-green lg:from-40% grid items-center justify-center lg:justify-start max-lg:aspect-banner bg-gradient-to-t from-black from-10%'>
                    <div className='text-center text-bright lg:text-left lg:ml-16'>
                        <div className='font-josefin font-bold text-5xl lg:text-9xl'>
                            <h1 className='mb-2'>Natural<span className='lg:hidden'>Earth</span></h1>
                            <h1 className='hidden lg:block'>Earth</h1>
                        </div>
                        <h2 className='font-montserrat font-semibold text-2xl lg:text-3xl'>Bring Nature To Your Table</h2>
                        <p className='font-montserrat mt-4 lg:text-lg'>Don't know where to order? <a href='#' className='underline'>click here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner