/* eslint-disable react/prop-types */
import Badge from "../Badge/Badge";
import Button1 from "../Button1/Button1";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";


function Card({img, text, title, skill, link}) {
  return (
    <>
      <div className={styles.inner}>
      <Badge  skill={skill} />
        <div className={styles.image}>
          <img src={img} alt={title} />
        </div>
        <div className={styles.desc}>
          <h2>{title}</h2>
          <p>{text}</p>
          <Link to={link} target="_blank">
           <Button1 text="Посмотреть"/>
          </Link>
         
        </div>
      </div>
      
    </>
  );
}

export default Card;
