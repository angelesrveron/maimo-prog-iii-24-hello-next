import Image from "next/image";
import styles from "./card.module.css";


const Card = ({ image, title }) => {
 
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt='character'
        width={150}
        height={150}
        priority
      />
      <h3>{title}</h3>
      <button>Info</button>
    </div>
  );
};

export default Card;
/*const cards = () => {
    return(
        <div>
        {cardsGrid.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    );
}

export default CardsGrid*/