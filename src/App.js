import React, { useMemo, useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import PostItem from "./components/PostItem";
import MainInput from "./components/UI/input/MainInput";
import SelectSort from "./components/UI/select/SelectSort";
import './style/App.css';


function App() {
  // в posts будем помещать все наши статьи
  const [posts, setPosts] = useState([
    {id: '1', title: 'Видеокарта', body: 'Графический ускоритель. Устройство, преобразующее графический образ.' },
    {id: '2', title: 'Альфа-канал', body: 'Если кратко, то, комбинирует изображения с фоном.' },
    {id: '3', title: 'Блок питания', body: 'Даёт наприжение в том количестве, котором требуется компьютеру.' }
  ])

  // selectedSort будет передавать состояние выпадающего списка сортировки
  const [selectedSort, setSelectedSort] = useState('')
  const [searchField, setSearchField] = useState('')

  // сортируем статьи по значению выпадающего списка
  // sortPostsSelect перезапишется при изменении значения дропдауна или при изменении массива статей
  const sortPostsSelect = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [posts, selectedSort])

  // сортируем статьи по значению выпадающего списка и поисковой строки
  const SortPostsSelectAndSearch = useMemo(() => {
    // выводим статьи где есть совпадение со значением из поисковой строки, все значения сравниваем в нижнем регистре
    return sortPostsSelect.filter(post => post.title.toLowerCase().includes(searchField.toLowerCase()))
  }, [sortPostsSelect, searchField])

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
      <MainInput
        placeholder='Поиск...'
        value={searchField}
        onChange = {e => setSearchField(e.target.value)}
      />
      {/* если статьи есть, выводим их */}
      {
      posts.length
        ? <PostItem posts={SortPostsSelectAndSearch} deletePost={deletePost}/>
        : <h3>Статей нет</h3>
      }
    </div>
  );
}

export default App;
