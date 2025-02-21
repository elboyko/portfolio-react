/* eslint-disable react/prop-types */
import styles from "./SkillCard.module.css";

function SkillCard({ title, img }) {
  return (
    <div className={styles.inner}>
      <img src={img} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default SkillCard;
