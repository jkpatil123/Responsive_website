import React from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu,AiOutlineUser,AiOutlineSearch,AiOutlinePerson} from 'react-icons/ai'
import Logo from '../images/logo.png'
const Navbar = () => {
  return (
    <header className={styles.navbar}>
    <img src={Logo} alt='logo'/>
    <nav>
      <ul className={styles.menu}>
         <li>
           <a href='/'>Learn More</a>
         </li>
         <li>
          <a href='/login'>Log in</a>
         </li>
         <li>
           <a href='/signup'>Sign up</a>
         </li>
         <li>
          <AiOutlineSearch size={25} style={{marginTop:'6px'}}/>
         </li>
         <li>
          <AiOutlineUser size={25} style={{marginTop:'6px'}}/>
         </li>
      
      </ul>
    </nav>

    <div className={styles.mobile_btn}>
    <AiOutlineMenu size={25}/>
    </div>

    </header>

  )
}

export default Navbar
