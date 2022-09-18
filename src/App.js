import React, { useEffect, useState } from "react";
import PostData from "./API/PostsData";
import CreatePostForm from "./components/CreatePostForm";
import PostFilter from "./components/PostFilter";
import PostItem from "./components/PostItem";
import Loader from "./components/UI/loader/Loader";
import { usePosts } from "./hooks/usePosts";
import './style/App.css';


function App() {
  // в posts будем помещать все наши статьи
  const [posts, setPosts] = useState([
    // {id: '1', title: 'Видеокарта', body: 'Графический ускоритель. Устройство, преобразующее графический образ.' },
    // {id: '2', title: 'Альфа-канал', body: 'Если кратко, то, комбинирует изображения с фоном.' },
    // {id: '3', title: 'Блок питания', body: 'Даёт наприжение в том количестве, котором требуется компьютеру.' }
  ])

  const [isPostsLoading, setIsPostsLoading] = useState(false)

  // наполняем posts данными из API
  const fetchPosts = async () => {
    // обозначем что статьи начали загружаться
    setIsPostsLoading(true)
    // делаем искусственную задержку получения данных    ! BEFORE RELEASE !    
    setTimeout(async () => {
      const postsData = await PostData.getPosts()
      setPosts(postsData)
      setIsPostsLoading(false)
    }, 1000)
  }

  // пользуемся хуком чтобы наполнить массив статьями 1 раз
  useEffect(() => {
    fetchPosts()
  }, [])

  // filter.select отвечает за состояние нашего селектора сортировки, а filter.input за значение в поисковой строке
  const[filter, setFilter] = useState({select:'', input: ''})

  // передаём в наш хук посты и значения всех сортировщиков, записываем отсортированный массив
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
      {
      isPostsLoading
        ? <div><Loader/></div>
        : <PostItem posts={sortPostsSelectAndInput} deletePost={deletePost}/>
      }
    </div>
  );
}

export default App;
