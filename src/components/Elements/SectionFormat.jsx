// ./src/components/Elements/SectionFormat.jsx

import React from 'react'

function SectionFormat(props) {
    const { children, id, sectionClassName = '', subSectionClassName = '' } = props;

    return (
        <section id={id} className={`mt-10 ${sectionClassName}`}>
            <div className={`container px-4 md:px-8 mx-auto ${subSectionClassName}`}>
                {children}
            </div>
        </section>
    )
}

export default SectionFormat