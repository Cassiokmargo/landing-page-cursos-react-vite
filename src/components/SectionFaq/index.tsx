import styles from "./SectionFaq.module.css";

const source = [
  {
    id:"1",
    summary: "Quanto tempo terei acesso ao curso?",
    detail: "Você terá acesso vitalício às aulas e conteúdos do cursos.",
  },
  {
    id:"2",
    summary: "Preciso de conhecimentos prêvios?",
    detail:
      "Não! O curso foi feito para iniciantes e para quem deseja dominar finanças pessoais",
  },
  {
    id:"3",
    summary: "O curso tem suporte?",
    detail: "Sim, você tera acesso direto à nossa equipe para tirar dúvidas.",
  },
];

const SectionFaq = () => {
  return (
    <section className={styles.container_section_faq}>
      <div className={styles.container_div_faq}>
        <h2>Perguntas Frequentes (FAQ)</h2>
        <h3>Ficou alguma dúvida?</h3>
        {source.map(item => (
          <details key={item.id}>
            <summary>{item.summary}</summary>
            {item.detail}
          </details>
        ))}
      </div>
    </section>
  );
};

export default SectionFaq;
