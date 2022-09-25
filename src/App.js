import React, { createContext } from "react";
import './style/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

firebase.initializeApp({
  apiKey: "yourData",
  authDomain: "yourData",
  projectId: "yourData",
  storageBucket: "yourData",
  messagingSenderId: "yourData",
  appId: "yourData",
  measurementId: "yourData"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  return (
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App;
