import React, { useContext } from "react";
import style from '../style/LoginPage.module.css'
import MainButton from "../components/UI/button/MainButton";
import MainInput from "../components/UI/input/MainInput";
import firebase from "firebase/compat/app";
import { Context } from "../App";


const Login = () => {
  const {auth} = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <div>
    <form className={style.loginPage} onSubmit={() => console.log('create function')}>
      <MainInput type="text" placeholder="Email"/>
      <MainInput type="password" placeholder="Пароль"/>
      <MainButton>Войти</MainButton>
    </form>
      <MainButton onClick={login}>Войти через Google</MainButton>
    </div>
  )
}

export default Login