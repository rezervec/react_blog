import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <ul className={style.navbar}>
      <li><Link to='/'>Статьи</Link></li>
      <li><Link to='/about'>О нас</Link></li>
    </ul>
  )
}

export default Navbar