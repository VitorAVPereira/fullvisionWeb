import React from 'react'
import styles from './styles/formCard.module.css'
import FormCard from './Form'
import InputField from './Input'

const Contact = () => {
  return (
    <div id='trackapp' className={styles.background}>
        <FormCard title='Preencha os campos abaixo:'>
            <form className={styles.form}  >
                <InputField type="text" placeholder="Nome completo" />
                <InputField type="text" placeholder="Empresa" />
                <InputField type="text" placeholder="Número de veículos" />
                <InputField type="text" placeholder="Contato Whatsapp" />
                <InputField type="text" placeholder="Contato E-mail" />
                <button type="submit" className={styles.buttonCard}>Confirmar</button>
            </form>
        </FormCard >
    </div>
  )
}

export default Contact;