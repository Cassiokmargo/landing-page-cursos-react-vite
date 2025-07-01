import styles from "./WhatsApp.module.css";

const WhatsApp = () => {
  return (
    <div className={styles.whatsapp}>
      <a href="http://wa.me/55xxxxxxxxxxx" target="_blank">
        <img
          src="./src/assets/icons/whatsapp.png"
          alt="Botao de contato para Whatsapp"
          title="Fala conosco pelo whatsapp"
        />        
      </a>
    </div>
  );
};

export default WhatsApp;
