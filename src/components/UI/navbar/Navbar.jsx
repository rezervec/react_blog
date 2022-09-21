import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import style from './Navbar.module.css'

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <ul className={style.navbar}>
      <li><Link to='/'>Статьи</Link></li>
      <li><Link to='/about'>О нас</Link></li>
      {isAuth
      ? <button onClick={logout}><Link to='/login'>Выйти</Link></button>
      : <button><Link to='/login'>Войти</Link></button>
      }
    </ul>
  )
}

export default Navbar