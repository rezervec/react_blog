import React, { useEffect, useState } from "react";
import PostData from "../API/PostsData";
import CreatePostForm from "../components/CreatePostForm";
import PostFilter from "../components/PostFilter";
import PostItem from "../components/PostItem";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetch } from "../hooks/useFetch";
import { usePosts } from "../hooks/usePosts";
import { pagesCounter } from "../utils/pagePagination";


function Posts() {
  // в posts будем помещать все наши статьи
  const [posts, setPosts] = useState([
    // {id: '1', title: 'Видеокарта', body: 'Графический ускоритель. Устройство, преобразующее графический образ.' },
    // {id: '2', title: 'Альфа-канал', body: 'Если кратко, то, комбинирует изображения с фоном.' },
    // {id: '3', title: 'Блок питания', body: 'Даёт наприжение в том количестве, котором требуется компьютеру.' }
  ])

  const [postsLimit, setPostsLimit] = useState(10)  // кол-во статей на странице
  const [pagesAmount, setPagesAmount] = useState(0)  // кол-во страниц
  const [activePage, setActivePage] = useState(1)   // выбранная страница

  // filter.select отвечает за состояние нашего селектора сортировки, а filter.input за значение в поисковой строке
  const[filter, setFilter] = useState({select:'', input: ''})

  // Вызываем кастомный хук, который запишет промис с данными статей в setPosts
  const [fetchPosts, isPostsLoading, postError] = useFetch(async () => {
    const response = await PostData.getPosts(postsLimit, activePage) // postsLimit и activePage будем использовать как query-параметры
    const allPosts = response.headers['x-total-count'] // получаем количество статей на сервере из заголовка
    setPagesAmount(pagesCounter(allPosts, postsLimit)) // записываем количество страниц
    setPosts(response.data)
  })

  // пользуемся хуком чтобы наполнить массив статьями единожды, а потом при выборе активной страницы
  useEffect(() => {
    fetchPosts() // в isPostsLoading запишется состояние промиса, в postError ошибки
  }, [activePage])

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
      {/* если при передаче промиса возникнет ошибка, выводим её */}
      {postError &&
        <div><b>Возникла ошибка:</b> ${postError}</div>
      }
      {
      isPostsLoading
        ? <div><Loader/></div>
        : <PostItem posts={sortPostsSelectAndInput} deletePost={deletePost}/>
      }
      <Pagination
        pagesAmount={pagesAmount}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
}

export default Posts;