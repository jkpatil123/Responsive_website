import React,{useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu,AiOutlineUser,AiOutlineSearch,AiOutlinePerson, AiOutlineClose} from 'react-icons/ai'
import Logo from '../images/logo.png'
import {HashLink as Link} from 'react-router-hash-link'

const Navbar = () => {
    const [nav ,setNav]=useState(false)
  return (
    <header id='Navbar' className={styles.navbar}>
    <img src={Logo} alt='logo'/>
    <nav>
      <ul className={nav ?[styles.menu, styles.active].join(' ') :[styles.menu]}>
         <li>
          <Link to="#find">
          Cars
          </Link>
           {/* <a href='/'></a> */}
         </li>
         <li>
         <Link to="#driver">
          Information
          </Link>
          {/* <a href='/login'>Log in</a> */}
         </li>
         <li>
         <Link to="#footer">
           contact
          </Link>
           {/* <a href='/signup'>Sign up</a> */}
         </li>
         <li>
          <AiOutlineSearch size={25} style={{marginTop:'6px', cursor:'pointer'}}/>
         </li>
         <li>
          <AiOutlineUser size={25} style={{marginTop:'6px', cursor:'pointer'}}/>
         </li>
      
      </ul>
    </nav>

    <div onClick={()=>{
        setNav(!nav)
    }} className={styles.mobile_btn}>
    {nav ?<AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/>}
    
    
    </div>

    </header>

  )
}

export default Navbar
