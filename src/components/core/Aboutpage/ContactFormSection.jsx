import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div>
        <h1 className=''>Get in Touch</h1>
        <p>We'd love to here for you, Please fill out this form.</p>
        <div className='mt-12 mx-auto'>
            <ContactUsForm/>
        </div>
    </div>
  )
}

export default ContactFormSection