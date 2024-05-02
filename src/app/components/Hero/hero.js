import styles from "./hero.module.css";
const Hero = ({ titulo, texto }) => {
  return (
    <section className={styles["container"]}>
      <div>
      <div className={styles["text-container"]}> 
        
        <h1>{titulo}</h1>
        <button>{texto}</button>
      </div>
      </div>
    </section>
  );
};

export default Hero;
