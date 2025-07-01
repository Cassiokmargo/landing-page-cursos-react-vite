import { Button } from '../Button'
import MiniCard2 from '../MiniCard_2'
import styles from './ThirdSection.module.css'

const ThirdSection = () => {
  return (
    <section className={styles.container_section}>
        <div className={styles.container_main}>
            <div className={styles.container_1}>
                <h2>Diferencias do Curso</h2>
                <h4>Muito Mais Que Um Curso Online</h4>
            </div>
            <div className={styles.container_2}> 
                <MiniCard2 h3='Métodos Práticos e Testados' p='Aprenda técnicas financeiras comprovadas que você poderá aplicar diretamente na sua rotina, independentemente do seu nível de conhecimento. São estratégias simples, mas extremamente eficazes, que transformaram a vida de milhares de pessoas.'/>         
                <MiniCard2 h3='Acompanhamento Exclusivo' p='Você não estará sozinho nessa jornada! Contará com o suporte de especialistas para tirar dúvidas e guiar você rumo à liberdade financeira. Nossa equipe está preparada para ajudar em cada etapa do processo.'/>         
                <MiniCard2 h3='Resultados Reias' p='Este não é apenas mais um curso teórico. Aqui você verá resultados concreto em semanas, como maior controle financeiro, redução de dívidas e a construção de um plano sólido para o seu futuro.'/>         
            </div>
            <Button variant='default'>FINALIZE SUA INSCRIÇÃO</Button>
        </div>
    </section>
  )
}

export default ThirdSection