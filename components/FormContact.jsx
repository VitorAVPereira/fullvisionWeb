import React from 'react'
import styles from './styles/formCard.module.css'
import FormCard from './Form'
import InputField from './Input'
import Button from './Anchor'
import Link from 'next/link'

const Redirect = () => {
  return (
    <div id='trackapp' className={styles.background}>
        <FormCard title='Já é cliente? Rastreie seu veiculo'>
            <form className={styles.form}  >
                <InputField type="text" placeholder="E-mail ou celular" />
                <InputField type="password" placeholder="Senha" />
                <Button type="submit">Confirmar</Button>
            </form>
        </FormCard >
    </div>
  )
}

export default Redirect;