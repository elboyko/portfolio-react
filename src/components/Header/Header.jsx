
import styles from "./Header.module.scss";
import {  Globe} from 'lucide-react';
import { NavLink } from "react-router-dom";
const Header = () => {
 const setActive=({ isActive }) => ({
   color:isActive ? "#49c5b6" : {},
   borderBottom:isActive ? " 3px solid #49c5b6" : {}
  
  }) 


  return (
  <div className={styles.container}> 
   <nav>
        <ul>
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
        <button className={styles.globe}>
          <Globe size={30} style={{color:"#49c5b6"}} className={styles.svg}/>
        </button>
    </nav>
    </div>
  );
};

export default Header;
