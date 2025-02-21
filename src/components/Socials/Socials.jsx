import styles from "./Socials.module.css";
import { Link } from "react-router-dom";
import {  
    RiLinkedinFill, 
    RiGithubFill,  
    RiTelegramFill 
  } from "react-icons/ri";

  const icons = [
    {
      path: 'https://www.linkedin.com/in/elena-boyko-4927baa2/',
      site: 'LinkedIn',
      name: <RiLinkedinFill />
    },
    {
      path: 'https://github.com/elboyko',
      site: 'GitHub',
      name: <RiGithubFill />
    },
    {
      path: 'https://t.me/ElnaBT',
      site: 'Telegram',
      name: <RiTelegramFill />
    }
  ]

function Socials() {
  return (
    <div className={styles.container}>
    {icons.map((icon, index)=> {
      return <Link to={icon.path} target="_blank" key={index}  aria-label={"View Helen's "+ icon.site + " profile"}>
      <div className={styles.icon}>{icon.name}</div>
      </Link>
    })}
  </div>
  )
}

export default Socials