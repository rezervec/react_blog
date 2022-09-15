import React, { useState } from "react";
import MainInput from "./components/UI/input/MainInput";
import MainButton from "./components/UI/button/MainButton";
import PostItem from "./components/PostItem";
import './style/App.css';


function App() {
  const [onePost, setOnePost] = useState({title: '', body: ''})
  const [posts, setPosts] = useState([{title: '"Пример названия"', body: '"Пример описания"'}])

  const addPost = (e) => {
    e.preventDefault()
    setPosts([...posts, onePost])
    setOnePost({title: '', body: ''})

  }

  return (
    <div className="App">
      <form className="inputForm">
        <MainInput
          value = {onePost.title}
          placeholder = {'Введите название'}
          onChange = {e => setOnePost({...onePost, title: e.target.value})}
        />
        <MainInput
          value = {onePost.body}
          placeholder = {'Введите описание'}
          onChange = {e => setOnePost({...onePost, body: e.target.value})}
        />
        <MainButton onClick={addPost}>Добавить</MainButton>
      </form>
      <PostItem posts={posts}/>
    </div>
  );
}

export default App;
