import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from "../../../App";

const Navbar = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <ul className={style.navbar}>
      <li><Link to='/'>Статьи</Link></li>
      <li><Link to='/about'>О нас</Link></li>
      {user
      ? <button onClick={() => auth.signOut()}><Link to='/login'>Выйти</Link></button>
      : <button><Link to='/login'>Войти</Link></button>
      }
    </ul>
  )
}

export default Navbar