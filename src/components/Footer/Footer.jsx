import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { RiLinkedinFill, RiGithubFill, RiTelegramFill,   RiMailLine,  RiArrowUpSLine } from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/elena-boyko-4927baa2/",
    site: "LinkedIn",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/elboyko",
    site: "GitHub",
    name: <RiGithubFill />,
  },
  {
    path: "https://t.me/ElnaBT",
    site: "Telegram",
    name: <RiTelegramFill />,
  },
  {
    path: "mailto:boyko.lena@gmail.com",
    site: "Mail",
    name: <RiMailLine />,
  }
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {icons.map((icon, index) => {
          return (
            <Link
              to={icon.path}
              target="_blank"
              key={index}
              aria-label={"View Helen's " + icon.site + " profile"}
            >
              <div className={styles.icon}>{icon.name}</div>
            </Link>
          );
        })}
      </div>

      <div className={styles.copyright}>
        Copyright © Elena Boyko. All rights reserved.
      </div>
      <div className={styles.arrow}>
        <RiArrowUpSLine style={{fontSize:"30px", fill:"#49c5b6" }}/>
      </div>

    </footer>
  );
}

export default Footer;
