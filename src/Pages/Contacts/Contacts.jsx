import Header from "../../components/Header/Header";
import Socials from "../../components/Socials/Socials";
import { Link } from "react-router-dom";
import styles from "./Contacts.module.scss"
import {  MailIcon, HomeIcon} from 'lucide-react';

function Contacts() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>
          <HomeIcon size={26} style={{color:"#49c5b6"}} />
          Россия, Новосибирск</h1>
       
        <Link to= "mailto:boyko.lena@gmail.com"  className={styles.mail}>   
        <MailIcon size={26} style={{color:"#49c5b6"}}/>
        boyko.lena@gmail.com</Link>
      </div>
        <Socials/>
    </>
  );
}

export default Contacts;
