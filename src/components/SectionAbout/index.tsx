import styles from "./SectionAbout.module.css";

const SectionAbout = () => {
  return (
    <section className={styles.container_section_about}>
      <div className={styles.container_div_about}>
        <img
          src="./src/assets/imagens/background-4.png"
          alt="foto de perfil sobre"
        />
        <p>
          Há mais de 10 anos, dedico minha vida a ajudar pessoas a alcançarem a
          tão sonhada liberdade financeira. Sou especialista em finanças
          pessoais e investimentos, com experiência prática no mercado e
          conhecimento adquirido através de estudos intensivos e vivência no
          setor financeiro. Já Impactei milhares de pessoas coma minha
          metodologia, ajudando desde indivíduos endividads a se reerguerem até
          profissionais que buscavam multiplicar seus ganhos e investir de forma
          estratégica.
        </p>
        <p>
          Minha história não começou facil. Assim como muitos, enfrentei momento
          de dificuldade, onde cada centavo fazia diferença. Foi aí que decidi
          transformar minha relação com o dinheiro e comecei a estudar as
          melhores práticas de organização financeira e geração de riqueza. Após
          aplicar esses conhecimentos em minha própria vida e ver os resultados
          incriveis, entendi que ra meu propósito compartilhar essas
          transformação com o maior número de pessoas possível.
        </p>
        <p>
          Hoje, meu método combina estratégias simples e práticas que podem ser
          aplicadas por qualquer pessoa, independentemente do nível de
          conhecimento em finanças. Meu objetivo é mostra que você também pode
          conquistar estabilidade, realizar sonhos e viver com mais
          tranquilidade e segurança financeira.
        </p>
      </div>
    </section>
  );
};

export default SectionAbout;
