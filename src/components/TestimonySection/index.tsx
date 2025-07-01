import styles from "./TestimonySection.module.css";
import { useEffect, useState } from "react";
import MiniCardDepo from "../MiniCardDepo";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonySection = () => {
  const [slidePerView, setSlidePerView] = useState(3);
  const data = [
    {
      id: "1",
      blockquote:
        "Experiência incrível! Desde o primeiro contato, fui muito bem atendido e recebi todas as informações de forma clara. Recomendo para todos!",
      avatar: "./assets/imagens/avatar1.svg",
      h3: "Valdir de tal",
      p: "Cliente desde 2023",
    },
    {
      id: "2",
      blockquote:
        "Experiência nota 1000! Desde o primeiro contato, fui muito bem atendido e recebi todas as informações de forma clara. Recomendo para todos!",
      avatar: "./assets/imagens/avatar2.svg",
      h3: "Fulano da Silva",
      p: "Cliente desde 2024",
    },
    {
      id: "3",
      blockquote:
        "Experiência sensacional! Desde o primeiro contato, fui muito bem atendido e recebi todas as informações de forma clara. Recomendo para todos!",
      avatar: "./assets/imagens/avatar3.svg",
      h3: "Beltrano Menezes",
      p: "Cliente desde 2024",
    },
    {
      id: "4",
      blockquote:
        "Experiência incrível! Desde o primeiro contato, fui muito bem atendido e recebi todas as informações de forma clara. Recomendo para todos!",
      avatar: "./assets/imagens/avatar4.svg",
      h3: "Mirtes Albuquerque",
      p: "Cliente desde 2023",
    },
    {
      id: "5",
      blockquote:
        "Experiência nota 1000! Desde o primeiro contato, fui muito bem atendido e recebi todas as informações de forma clara. Recomendo para todos!",
      avatar: "./assets/imagens/avatar5.svg",
      h3: "Sidney Correia",
      p: "Cliente desde 2025",
    },
    {
      id: "6",
      blockquote:
        "Experiência sensacional! Desde o primeiro contato, fui muito bem atendido e recebi todas as informações de forma clara. Recomendo para todos!",
      avatar: "./assets/imagens/avatar6.svg",
      h3: "Cesar Filpando",
      p: "Cliente desde 2023",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 721) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials_container}>
        <div id={styles.testimonials_header}>
          <h2>Avaliações</h2>
          <h3>O que os clientes dizem</h3>
          <p>
            Quer saber o que tonar o nosso curso tão especial? Confira o que
            nossos clientes têm a dizer!
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className={styles["swiper_slide2"]}>
              <div className={styles["container_depo"]}>
                <MiniCardDepo
                  blockquote={item.blockquote}
                  avatar={item.avatar}
                  h3={item.h3}
                  p={item.p}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonySection;
