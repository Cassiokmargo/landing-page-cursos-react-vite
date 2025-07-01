import Logo from '../Logo'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container_footer}>
      <div className={styles.container_div_footer}>
        <Logo src='./src/assets/imagens/logo-footer.png' alt='Logo da empresa'/>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer