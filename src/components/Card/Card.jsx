/* eslint-disable react/prop-types */
import styles from "./Card.module.scss";

function Card({img, text, title}) {
  return (
    <>
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.desc}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
      
    </>
  );
}

export default Card;
