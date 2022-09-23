import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePostForm from "../components/CreatePostForm";
import PostFilter from "../components/PostFilter";
import PostItem from "../components/PostItem";
import Pagination from "../components/UI/pagination/Pagination";
import { usePosts } from "../hooks/usePosts";
import { createPostAction, deletePostAction } from "../store/postReducer" 
import { fetchPosts } from "../actions/fetchAPI";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/UI/loader/Loader";
import { pagesCounter } from "../utils/pagePagination";


function Posts() {

  const [postsLimit, setPostsLimit] = useState(10)  // кол-во статей на странице
  const [pagesAmount, setPagesAmount] = useState(10)  // кол-во страниц
  const [activePage, setActivePage] = useState(1)   // выбранная страница

  // filter.select отвечает за состояние нашего селектора сортировки, а filter.input за значение в поисковой строке
  const[filter, setFilter] = useState({select:'', input: ''})  

  const [fetchPostsData, isPostsLoading, postsErrors] = useFetch(() => {
    const response = dispatch(fetchPosts(postsLimit, activePage))
    const allPosts = response.headers['x-total-count']
    setPagesAmount(pagesCounter(allPosts, postsLimit))
  })

  const dispatch = useDispatch()
  const posts = useSelector(post => post.posts.posts)

  useEffect(() => {
    fetchPostsData()
  }, [activePage])

  // передаём в наш хук посты и значения всех сортировщиков, записываем отсортированный массив
  const sortPostsSelectAndInput = usePosts(posts, filter.select, filter.input)

  const addPost = (newPost) => {
    dispatch(createPostAction(newPost))
  }

  const delPost = (post) => {
    dispatch(deletePostAction(post.id))
  }

  return (
    <div className="App">
      <CreatePostForm  createPost={addPost}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
      ? <Loader/>
      : <PostItem posts={sortPostsSelectAndInput} deletePost={delPost}/>
      }
      {postsErrors &&
        <div>Произошла ошибка: {postsErrors}</div>
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
