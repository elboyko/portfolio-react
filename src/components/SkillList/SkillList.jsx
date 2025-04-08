import SkillCard from "../SkillCard/SkillCard";

import styles from "./SkillList.module.css";
const lists = [
  {
    id: "1",
    img: "./html.svg",
    title: "HTML",
  },
  {
    id: "2",
    img: "./css.svg",
    title: "CSS",
  },

  {
    id: "3",
    img: "/sass.svg",
    title: "SASS",
  },
  {
    id: "4",
    img: "/javascript.svg",
    title: "JavaScript",
  },
  {
    id: "5",
    img: "/typescript.svg",
    title: "TypeScript",
  },
  {
    id: "6",
    img: "/react.svg",
    title: "React",
  },
  {
    id: "7",
    img: "/nextjs.svg",
    title: "Next JS",
  },
  {
    id: "8",
    img: "/git.svg",
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
