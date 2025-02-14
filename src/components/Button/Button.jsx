/* eslint-disable react/prop-types */


import styles from "./Button.module.scss"
function Button({text,color}) {
  return (

    <button style={{backgroundColor:color}} className={styles.btn}>{text}</button>
  )
}

export default Button