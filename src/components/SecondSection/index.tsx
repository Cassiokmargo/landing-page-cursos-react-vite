import MiniCard from '../MiniCard'
import styles from './SecondSection.module.css'

const SecondSection = () => {
  return (
    <section className={styles.second_section_container}>
        <div className={styles.container_div_section2}>
            <img src='./assets/icons/seta-p-baixo.png' alt='icone de seta'></img>
            <h2>
                Benefícios do Curso
            </h2>
            <p>
                Por que este curso é Perfeito para Você?
            </p>
        </div>
        <div className={styles.container_minicard}>
            <MiniCard>Controle total das suas finaças: Aprenda a organizar sua vida financeiras com eficiência</MiniCard>
            <MiniCard>Multiplique Seu Dinheiro: Descubra como fazer seu dinheiro trabalhar para você.</MiniCard>
            <MiniCard>Liberdade Financeira: Caminhe para uma vida sem dívidas e com mais possíbilidades.</MiniCard>
            <MiniCard>Planejamento para o Futuro: Crie estratégias financeiras sólidas para realizar sonhos.</MiniCard>
        </div>
    </section>
  )
}

export default SecondSection