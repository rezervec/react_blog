import React, { useState } from "react";
import MainButton from "./UI/button/MainButton";
import MainInput from "./UI/input/MainInput";

const CreatePostForm = ({createPost}) => {
  // onePost будет хранить значения наших input-ов
  const [onePost, setOnePost] = useState({title: '', body: ''})

  const addPost = (e) => {
    // запрещаем обновлять страницу браузера
    e.preventDefault()
    // добавляем к посту 'искусственный' id, взяв текущую дату в милисекундах    ! BEFORE RELEASE !    
    const newPost = {...onePost, id: Date.now()}
    // вызываем callback-функцию и передаём ей новую статью
    createPost(newPost)
    // очищаем input-ы
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