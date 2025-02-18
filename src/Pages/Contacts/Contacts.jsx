import Header from "../../components/Header/Header";
import Socials from "../../components/Socials/Socials";
import { Link } from "react-router-dom";
import styles from "./Contacts.module.scss"

function Contacts() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Россия, Новосибирск</h1>
        <p></p>
        <Link to= "mailto:boyko.lena@gmail.com" target="_blank" className={styles.mail}>boyko.lena@gmail.com</Link>
      </div>
        <Socials/>
    </>
  );
}

export default Contacts;
