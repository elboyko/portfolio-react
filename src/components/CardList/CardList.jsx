import Card from "../Card/Card";
import styles from "./CardList.module.scss";
import cards from "../../assets/projects.json"
function CardList() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {cards.map((card) =>(
<Card key={card.id} img={card.imageUrl} text={card.text} title={card.title} />
        ))}
       
      </div>
    </div>
  );
}

export default CardList;
