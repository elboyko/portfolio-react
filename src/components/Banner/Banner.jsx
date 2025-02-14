import Button from "../Button/Button";
import photo from "../../assets/hl.png";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>Web Developer</h2>
          <h1>Привет, меня зовут Елена</h1>
          <p>Создаю сайты, используя современные технологии, такие как React, Next JS, TypeScript, JavaScrript, SCSS.</p>
          <div className={styles.btn_flex}>
            <Link to="/contacts">
                <Button color="#49c5b6" text="Contact me" /> 
             </Link>
            <Button color="#FFC5B1" text="Download CV" />
          </div>
        </div>
        <div>
          <div className={styles.div}>
            <img className={styles.image} src={photo} alt="main image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
