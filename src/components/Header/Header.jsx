import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header>
<div className={styles.container}>
    <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
    </nav>
    
</div>



    </header>
  )
}

export default Header