import { Button } from '../Button'
import Logo from '../Logo'
import styles from './FourSection.module.css'

const FourSection = () => {
  return (
    <section className={styles.section_container_four}>
        <div className={styles.container_div_four}>
            <Logo src='./src/assets/imagens/logo.png' alt='Logo da empresa'/>
            <p>Tudo isso por apenas:</p>
            <h2>R$ 390,90</h2>
            <p>em até 12x no cartão</p>
            <Button variant='default'>FINALIZE SUA INSCRIÇÃO</Button>
            <p>🔒 Pagamento seguro</p>
        </div>

    </section>
  )
}

export default FourSection