import styles from './styles/formCard.module.css'

export default function Button({children, ...props}) {
    return(
        <a className={styles.buttonNavbar} {...props}> {children} </a>
    )
}