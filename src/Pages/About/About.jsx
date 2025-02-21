import Header from "../../components/Header/Header"
import styles from "./About.module.css"
import SkillList from "../../components/SkillList/SkillList"


const About = () => {
  return (
<>
<Header/>
<div className={styles.content} >
  <p>Я специализируюсь на создании интуитивно понятных веб-сайтов и приложений с использованием современных технологий, обеспечивающих динамичный и привлекательный пользовательский опыт.</p>
 <p>В разработке я использую следующие технологии:</p>
<SkillList/>

</div>
</>
  )
}

export default About