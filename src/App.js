import React from "react";
import './style/App.css';
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
