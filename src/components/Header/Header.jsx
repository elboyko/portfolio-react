
import styles from "./Header.module.css";
import {  Globe, Menu} from 'lucide-react';
import { NavLink } from "react-router-dom";
import HeaderBurger from "./HeaderBurder/HeaderBurger";
import { useState } from "react";

const Header = () => {
 const setActive=({ isActive }) => ({
   color:isActive ? "#49c5b6" : {},
   borderBottom:isActive ? " 3px solid #49c5b6" : {}
  
  }) 

const [openBurder, setOpenBurger]=useState(false)
const handleOpen=() =>{
  setOpenBurger(!openBurder)
  console.log('work')
}
  return (
  <div className={styles.container}> 
   <nav className={styles.desctop}>
        <ul className={styles.header_desctop}>
          <li className={styles.active}>
            <NavLink to="/"   style={setActive} >Home</NavLink>
          </li>

          <li>
            <NavLink to="/about"  style={setActive} >About</NavLink>
          </li>

          <li>
            <NavLink to="/projects" style= {setActive} >Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contacts" style={setActive } >Contacts</NavLink>
          </li>
        </ul>
        <button className={`${styles.globe} ${styles.burger_btn}`}>
          <Menu  onClick = {()=> handleOpen()}  size={30} style={{color:"#49c5b6"}} className={styles.svg}/>
        </button>
        {openBurder ?  <HeaderBurger openBurder={openBurder}  setOpenBurger={setOpenBurger}/> : ""}
       
       
        <button className={styles.globe}>
          <Globe size={30} style={{color:"#49c5b6"}} className={styles.svg}/>
        </button>
    </nav>
    </div>
  );
};

export default Header;
