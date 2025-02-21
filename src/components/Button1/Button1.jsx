/* eslint-disable react/prop-types */
import styles from "./Button1.module.css"

function Button1({text}) {
  return (
      <button className={styles.btn}>{text}</button>
      )
}

export default Button1