import Button from "../Button/Button";
import photo from "/img/hl.png";
import styles from "./Banner.module.scss";
import Socials from "../Socials/Socials";
function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>Web Developer</h2>
          <h1>Привет, меня зовут Елена</h1>
          <p>Создаю сайты, используя современные технологии, такие как React, Next JS, TypeScript, JavaScrript, SCSS.</p>
          <div className={styles.btn_flex}>
            <a  href="/boyko.pdf" download="boyko-cv" >
                <Button color="#49c5b6" text="Download CV" /> 
             </a>
          </div>
        </div>
        <div>
          <div className={styles.div}>
            <img className={styles.image} src={photo} alt="main image" />
          </div>
        </div>
       
      </div>
       <Socials/>
    </div>
  );
}

export default Banner;
