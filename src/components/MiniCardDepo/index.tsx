import styles from './MiniCardDepo.module.css'

interface MiniCardDepoProps {
  blockquote: string;
  avatar: string;
  h3: string;
  p: string;
  className?: string;
}

const MiniCardDepo = ({ blockquote, avatar, h3, p }: MiniCardDepoProps) => {
  return (
    <div className={styles["container_minicarddepo"]}>
      <div className={styles["testimonials-rate"]}>
        <img src="./src/assets/icons/star.svg" alt="icone de estrela"></img>
        <img src="./src/assets/icons/star.svg" alt="icone de estrela"></img>
        <img src="./src/assets/icons/star.svg" alt="icone de estrela"></img>
        <img src="./src/assets/icons/star.svg" alt="icone de estrela"></img>
        <img src="./src/assets/icons/star.svg" alt="icone de estrela"></img>
      </div>
      <blockquote className={styles["testimonial-quote"]}>{blockquote}</blockquote>
      <div className={styles["testimonial-author"]}>
        <div className={styles["author-avatar"]}>
          <img src={avatar} alt="imagem de avatar" />
        </div>
        <div className={styles["author-info"]}>
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
      </div>
    </div>
  );
};

export default MiniCardDepo;
