import { useEffect, useState } from "react";
import styles from "./CarrosselSection.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CarrosselSection() {
  const [slidePerView, setSlidePerView] = useState(5);
  const data = [
    {
      id: "1",
      image: "./src/assets/imagens/slide-1.png",
      alt: "Imagem slide-1",
    },
    {
      id: "2",
      image: "./src/assets/imagens/slide-2.png",
      alt: "Imagem slide-2",
    },
    {
      id: "3",
      image: "./src/assets/imagens/slide-3.png",
      alt: "Imagem slide-3",
    },
    {
      id: "4",
      image: "./src/assets/imagens/slide-4.png",
      alt: "Imagem slide-4",
    },
    {
      id: "5",
      image: "./src/assets/imagens/slide-5.png",
      alt: "Imagem slide-5",
    },
    {
      id: "6",
      image: "./src/assets/imagens/slide-1.png",
      alt: "Imagem slide-6",
    },
    {
      id: "7",
      image: "./src/assets/imagens/slide-2.png",
      alt: "Imagem slide-7",
    },
    {
      id: "8",
      image: "./src/assets/imagens/slide-3.png",
      alt: "Imagem slide-8",
    },
    {
      id: "9",
      image: "./src/assets/imagens/slide-4.png",
      alt: "Imagem slide-9",
    },
    {
      id: "10",
      image: "./src/assets/imagens/slide-5.png",
      alt: "Imagem slide-10",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth <= 720) {
        setSlidePerView(1);
      }
        
      else {
        setSlidePerView(5);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return (
    <section className={styles.section_carrossel_container}>
      <div className={styles.container_div_carrossel}>
        <h2>Conteudo do Curso</h2>
        <p>São mais de 20 horas de conteúdo, dividido em 5 módulos.</p>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}        
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiper_slide}>
              <img
                src={item.image}
                alt={item.alt}
                className={styles.slide_item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CarrosselSection;
