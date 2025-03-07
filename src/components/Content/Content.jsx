import SkillList from "../SkillList/SkillList";
import styles from "./Content.module.css";

function Content() {
  return (
    <>
      <div className={styles.content}>
        <p>
          Я специализируюсь на создании интуитивно понятных веб-сайтов и
          приложений с использованием современных технологий, обеспечивающих
          динамичный и привлекательный пользовательский опыт.
        </p>
        <p className={styles.title}>
          <span className={styles.span}>Технологии,</span> которые я использую:
        </p>
      </div>
      <div className={styles.list}>
        <SkillList />
      </div>
    </>
  );
}

export default Content;
