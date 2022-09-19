import React from "react";
import './style/App.css';
// import { Route, Routes, Link } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/navbar/Navbar";


function App() {
  return (
    <div>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App;
