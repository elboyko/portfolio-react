import SkillCard from "../SkillCard/SkillCard";

import styles from "./SkillList.module.scss";
const lists = [
  {
    id: "1",
    img: "/skills/html.svg",
    title: "HTML",
  },
  {
    id: "2",
    img: "/skills/css.svg",
    title: "CSS",
  },

  {
    id: "3",
    img: "/skills/sass.svg",
    title: "SASS",
  },
  {
    id: "4",
    img: "/skills/javascript.svg",
    title: "JavaScript",
  },
  {
    id: "5",
    img: "/skills/typescript.svg",
    title: "TypeScript",
  },
  {
    id: "6",
    img: "/skills/react.svg",
    title: "React",
  },
  {
    id: "7",
    img: "/skills/nextjs.svg",
    title: "Next JS",
  },
  {
    id: "8",
    img: "/skills/git.svg",
    title: "Git",
  },
];

function SkillList() {
  return (
    <ul className={styles.box}>
      <li className={styles.list}>
        {lists.map((list) => {
          return <SkillCard key={list.id} img={list.img} title={list.title} />;
        })}
      </li>
    </ul>
  );
}

export default SkillList;
