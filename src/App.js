import React, { useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import PostFilter from "./components/PostFilter";
import PostItem from "./components/PostItem";
import { usePosts } from "./hooks/usePosts";
import './style/App.css';


function App() {
  // в posts будем помещать все наши статьи
  const [posts, setPosts] = useState([
    {id: '1', title: 'Видеокарта', body: 'Графический ускоритель. Устройство, преобразующее графический образ.' },
    {id: '2', title: 'Альфа-канал', body: 'Если кратко, то, комбинирует изображения с фоном.' },
    {id: '3', title: 'Блок питания', body: 'Даёт наприжение в том количестве, котором требуется компьютеру.' }
  ])

  // filter.select отвечает за состояние нашего селектора сортировки, а filter.input за значение в поисковой строке
  const[filter, setFilter] = useState({select:'', input: ''})

  // сортируем статьи по значению выпадающего списка
  // sortPostsSelect перезапишется при изменении значения дропдауна или при изменении массива статей
  // const sortPostsSelect = useMemo(() => {
  //   if (filter.select) {
  //     return [...posts].sort((a, b) => a[filter.select].localeCompare(b[filter.select]))
  //   }
  //   return posts
  // }, [posts, filter.select])

  // сортируем статьи по значению выпадающего списка и поисковой строки
  // const SortPostsSelectAndSearch = useMemo(() => {
    // выводим статьи где есть совпадение со значением из поисковой строки, все значения сравниваем в нижнем регистре
  //   return sortPostsSelect.filter(post => post.title.toLowerCase().includes(filter.input.toLowerCase()))
  // }, [sortPostsSelect, filter.input])

  const sortPostsSelectAndInput = usePosts(posts, filter.select, filter.input)

  // при создании статьи переписываем в posts все имеющиеся статьи и добавляем новую
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // переписываем в posts все имеющиеся статьи, кроме тех чей id не равен id переданного элемента 
  const deletePost = (post) => {
    setPosts([...posts].filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <CreatePostForm  createPost={createPost}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {/* если статьи есть, выводим их */}
      {
      posts.length
        ? <PostItem posts={sortPostsSelectAndInput} deletePost={deletePost}/>
        : <h3>Статей нет</h3>
      }
    </div>
  );
}

export default App;
