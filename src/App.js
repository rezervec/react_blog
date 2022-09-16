import React, { useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import PostItem from "./components/PostItem";
import './style/App.css';


function App() {
  const [posts, setPosts] = useState([{title: '"Пример названия"', body: '"Пример описания"'}])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <CreatePostForm  createPost={createPost}/>
      <PostItem posts={posts}/>
    </div>
  );
}

export default App;
