import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Posts/>}/>
      <Route path="/post/:id" element={<PostPage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter