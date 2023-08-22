import React from 'react'
import FormCard from './Form'
import Button from './Anchor'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Redirect = () => {
  
  return (
    <div id='trackapp'>
        <FormCard title='Plataforma de rastreio.'>
          <div className='mb-5'>
            <Button href="https://www.fullvision.sincrosolucoes.com.br">Rastrear<FontAwesomeIcon icon={faUpRightFromSquare} className='ml-5'/></Button>
          </div>
        </FormCard >
    </div>
  )
}

export default Redirect;