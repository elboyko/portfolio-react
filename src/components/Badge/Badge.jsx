/* eslint-disable react/prop-types */
import styles from "./Badge.module.css";

function Badge({skill}) {
  return (
     <span className={styles.badge}> {skill}</span>   
                
  )
}

export default Badge