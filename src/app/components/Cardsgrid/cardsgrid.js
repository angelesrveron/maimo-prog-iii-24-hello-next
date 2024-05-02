import Card from "@/app/components/Card/card";
import styles from "./cardsgrid.module.css";

const CardsGrid = ({ cards }) => {
  return (
    <div className={`${styles["container"]} grid`}>
      {cards.map((cards, index) => (
        <div key={index} className={`col_4 col_mb_12`}> 
        <Card
          key={index}
          title={cards.title}
          image={cards.image}
          description={cards.description}
        />
        </div>
      ))}
    </div>
  );
};
export default CardsGrid;
