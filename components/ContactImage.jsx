import React from 'react'
import { Contact } from './FormContact'

const ContactImage = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-cover img-custom'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-auto mb-auto'>
          <Contact />
        </div>
    </div>
  )
}

export default ContactImage