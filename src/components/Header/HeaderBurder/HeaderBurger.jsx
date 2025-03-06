/* eslint-disable react/prop-types */
const listsMenu = [
  { text: "Home", link:'/' },
  { text: "About", link: "/about" },
  { text: "Projects", link:"/projects" },
  { text: "Contacts", link: "/contacts" },
];
import { Link } from "react-router-dom";
import styles from "./HeaderBurger.module.css"
import { useState, useRef } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";


function HeaderBurger({openBurder,setOpenBurger}) {
    const [closeBtn, setCloseBtn]=useState(false)
    
    const handleClose = ()=>{
        setCloseBtn(true)
        console.log("hello")
        setOpenBurger(!openBurder)
      }
const menuRef=useRef(null)
useClickOutside(menuRef, ()=>{
  if(openBurder) setTimeout(()=> setOpenBurger(false), 80)
  
})

  return (
 <nav className={closeBtn ? styles.burger_none : ""}  ref={menuRef} >
      <ul className={styles.burger_inner}>
        <div onClick={() => handleClose()} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M18 6 6 18"/><path d="m6 6 12 12"/>  </svg>
        </div>
  
        {listsMenu.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav> 
 
    
      
    )}
      
        
    
    
        
        



export default HeaderBurger;
