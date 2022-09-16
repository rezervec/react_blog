import React, { useState } from "react";
import MainButton from "./UI/button/MainButton";
import MainInput from "./UI/input/MainInput";

const CreatePostForm = ({createPost}) => {
  const [onePost, setOnePost] = useState({title: '', body: ''})

  const addPost = (e) => {
    e.preventDefault()
    const newPost = {...onePost}
    createPost(newPost)
    setOnePost({title: '', body: ''})
  }

  return(
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
  );
};


export default CreatePostForm;