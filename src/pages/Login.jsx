import React, { useContext } from "react";
import style from '../style/LoginPage.module.css'
import MainButton from "../components/UI/button/MainButton";
import MainInput from "../components/UI/input/MainInput";
import {AuthContext} from '../context/context'

const Login = () => {
  const {setIsAuth} = useContext(AuthContext)

  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <form className={style.loginPage} onSubmit={login}>
      <MainInput type="text" placeholder="Email"/>
      <MainInput type="password" placeholder="Пароль"/>
      <MainButton>Войти</MainButton>
    </form>
  )
}

export default Login