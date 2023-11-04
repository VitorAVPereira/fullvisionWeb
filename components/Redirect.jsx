import React from 'react'
import FormCard from './Card'
import Button from './Anchor'
import { BsBoxArrowUpRight } from 'react-icons/bs';

const Redirect = () => {

  return (
    <div id='trackapp'>
      <FormCard title='Rastreie seus veículos'>
        <Button href="https://www.fullvision.sincrosolucoes.com.br">Rastrear<BsBoxArrowUpRight className='ml-2 mt-0.5' /></Button>
      </FormCard >
    </div>
  )
}

export default Redirect;