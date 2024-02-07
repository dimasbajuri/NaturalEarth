// ./src/components/Layouts/About.jsx

import React, { Children } from 'react'
import Header3 from '../Elements/Header3';
import SectionFormat from '../Elements/SectionFormat';

function Paragraf(props) {
    const { children } = props;

    return (
        <p className='text-stone-700 font-montserrat my-3 text-lg text-balance'>
            {children}
        </p>
    )
}

function About() {
    return (
        <SectionFormat id="about">
            <div className='grid grid-cols-2 gap-x-7 gap-y-7'>
                <div className='text-center col-span-2'>
                    <Header3 classname="text-dark">What Is Natural Earth?</Header3>
                    <Paragraf>
                        It's a food and beverage startup that focuses on providing healthy, organic, gluten-free, and all-natural cuisine. We strive to provide our customers with delicious and nutritious alternatives to traditional cuisine, all while maintaining a commitment to sustainability and ethical practices. Our goal is to bring quality and delicious products to a broader audience and to inspire others to live a healthy and eco-conscious lifestyle.
                    </Paragraf>
                </div>
                <div className='text-left hidden md:block'>
                    <h4 className='text-dark font-josefin text-4xl font-semibold'>Our History</h4>
                    <Paragraf>
                        Natural Earth was founded in 2010 with the aim of providing high-quality food and beverage products that are healthy, organic, gluten-free, and all-natural. Our commitment to sustainability and ethical practices has been at the heart of everything we do since our foundation.
                    </Paragraf>
                </div>
                <div className='text-right hidden md:block'>
                    <h4 className='text-dark font-josefin text-4xl font-semibold'>Our Missions</h4>
                    <Paragraf>
                        Our mission is to provide delicious and nutritious alternatives to traditional cuisine, while fostering eco-sensitive approaches and ethical practices. We strive to establish a positive impact on the environment and the broader society.
                    </Paragraf>
                </div>
            </div>
        </SectionFormat>
    )
}

export default About