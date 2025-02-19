/* eslint-disable react/prop-types */


import styles from "./Button.module.scss"
function Button({text,color, children}) {
  return (

    <button style={{backgroundColor:color}} className={styles.btn}>{text}
    {children}
    </button>
  )
}

export default Button