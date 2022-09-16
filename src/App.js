import React, { useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import PostItem from "./components/PostItem";
import SelectSort from "./components/UI/select/SelectSort";
import './style/App.css';


function App() {
  const [posts, setPosts] = useState([
    {title: 'Видеокарта', body: 'Графический ускоритель. Устройство, преобразующее графический образ.' },
    {title: 'Альфа-канал', body: 'Если кратко, то, комбинирование изображения с фоном.' },
    {title: 'Блок питания', body: 'Даёт наприжение в том количестве, котором требуется компьютеру.' }
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
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
      <PostItem posts={posts}/>
    </div>
  );
}

export default App;
