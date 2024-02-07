// ./src/components/Fragments/ContactForm.jsx

import React from 'react'

function ContactForm() {
    return (
        <form action="" className='flex flex-col gap-y-5 mt-10'>
            <input className="px-5 py-3 ring-2 ring-dark rounded-lg" type="text" id='fullName' placeholder='FullName' />
            <input className="px-5 py-3 ring-2 ring-dark rounded-lg" type="email" id='email' placeholder='Email' />
            <input className="px-5 py-3 ring-2 ring-dark rounded-lg" type="tel" id='tel' placeholder='Telephone' />
            <input className="px-5 py-3 ring-2 ring-dark rounded-lg" type="text" id='subject' placeholder='Subject' />
            <textarea name="message" id="message" className='px-5 py-3 ring-2 ring-dark rounded-lg' cols="30" rows="8" placeholder='Message'></textarea>
            <input type="submit" value="Send Order" className='w-fit py-2 px-3 bg-dark text-bright font-josefin font-semibold rounded-lg cursor-pointer' />
        </form>
    )
}

export default ContactForm