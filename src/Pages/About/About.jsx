import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Content />
      </div>
    </>
  );
};

export default About;
