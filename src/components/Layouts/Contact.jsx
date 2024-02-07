// ./src/components/Layouts/Contact.jsx

import React from 'react'
import Header3 from '../Elements/Header3'
import SectionFormat from '../Elements/SectionFormat'
import ContactForm from '../Fragments/ContactForm'

function Contact() {
  return (
    <SectionFormat id="contact">
        <Header3 classname="text-center">Interested to Buy? Contact Us!</Header3>
        <ContactForm />
    </SectionFormat>
  )
}

export default Contact