import React, { useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import PostItem from "./components/PostItem";
import SelectSort from "./components/UI/select/SelectSort";
import './style/App.css';


function App() {
  // в posts будем помещать все наши статьи
  const [posts, setPosts] = useState([
    {id: '1', title: 'Видеокарта', body: 'Графический ускоритель. Устройство, преобразующее графический образ.' },
    {id: '2', title: 'Альфа-канал', body: 'Если кратко, то, комбинирование изображения с фоном.' },
    {id: '3', title: 'Блок питания', body: 'Даёт наприжение в том количестве, котором требуется компьютеру.' }
  ])

  // selectedSort будет передавать состояние выпадающего списка сортировки
  const [selectedSort, setSelectedSort] = useState('')

  // при создании статьи переписываем в posts все имеющиеся статьи и добавляем новую
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // переписываем в posts все имеющиеся статьи, кроме тех чей id не равен id переданного элемента 
  const deletePost = (post) => {
    setPosts([...posts].filter(p => p.id !== post.id))
  }

  const SortSelect = (select) => {
    setSelectedSort(select)
    // разворачиваем все посты в новый массив, применяем sort и возвращаем этот новый массив
    // localeCompare сравнивает поле из объекта A с полем из объекта B. Сравнивает строки и числа
    setPosts([...posts].sort((a, b) => a[select].localeCompare(b[select])))
  }

  return (
    <div className="App">
      <CreatePostForm  createPost={createPost}/>
      <SelectSort
        value={selectedSort}
        SortSelect = {SortSelect}
        options = {[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}
        ]}
      />
      {/* если статьи есть, выводим их */}
      {
      posts.length
        ? <PostItem posts={posts} deletePost={deletePost}/>
        : <h3>Статей нет</h3>
      }
    </div>
  );
}

export default App;
