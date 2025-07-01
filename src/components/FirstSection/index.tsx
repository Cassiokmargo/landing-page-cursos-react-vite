import { Button } from '../Button'
import Logo from '../Logo'
import styles from './FirstSection.module.css'

const FirstSection = () => {
  return (
    <section className={styles.section_one_container}>
        <div className={styles.container_div}>
            <Logo src='./assets/imagens/logo.png' alt='Logo da empresa'/>
            <h1>Transforme Sua Vida<br></br> Financeira Agora<br></br> Mesmo!</h1>    
            <p>Aprenda a conquistar a liberdade financeira com estratégias<br></br> comprovadas por especialistas. Torne-se o mestre das suas finanças<br></br> e alcance seus objetivos</p>
            <Button variant='default'>FINALIZE SUA INSCRIÇÃO</Button>
        </div>

    </section>
  )
}

export default FirstSection