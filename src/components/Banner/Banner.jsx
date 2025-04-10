import Button from "../Button/Button";
import photo from "/hl.png";
import styles from "./Banner.module.css";
import Socials from "../Socials/Socials";
import { Download} from "lucide-react";
import {RiArrowDownDoubleLine  } from "react-icons/ri";
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
                <Button color="#49c5b6" text="Download CV" > <Download size={22}/>
                </Button>
             </a>
          </div>
          
        </div>
        <div>
          <div className={styles.scrollDown}>
            <RiArrowDownDoubleLine  style={{ fill:"#49c5b6" ,fontSize:"30px"}}/>
          </div>
          
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
