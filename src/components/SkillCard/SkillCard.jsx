/* eslint-disable react/prop-types */
import styles from "./SkillCard.module.scss";

function SkillCard({ title, img }) {
  return (
    <div className={styles.inner}>
      <img src={img} alt={title} />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default SkillCard;
