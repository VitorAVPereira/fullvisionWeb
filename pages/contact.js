import Contact from '@/components/FormContact'
import Hero from '@/components/Hero'
import React from 'react'

const contact = () => {
  return (
    <div>
      <Hero heading='Contato Comercial' message='Gestão de operação logística e segurança da frota.'/>
        <div className="md:justify-center sm:justify-center">  
          <Contact/>
        </div>
    </div>
  )
}

export default contact