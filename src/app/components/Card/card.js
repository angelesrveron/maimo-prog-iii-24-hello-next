'use client'
import {useState} from 'react'
import Image from "next/image";
import styles from "./card.module.css";

const Card = ({ image, title }) => {
const [message, setMessage] = useState('hola'); //destructuring de arrays, importa la posicion de cada uno de los valores dentro del array, de ese usestate hago un destructuring con las funcoines message y setmessage

  const handleButtonClick = () => {
    console.log("clickeado");
    setMessage('chau');
  };

  return (
    <div className={styles.container}>
      <Image src={image} alt='character' width={150} height={150} priority />
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={handleButtonClick}>Info</button>
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
