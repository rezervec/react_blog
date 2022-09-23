import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePostForm from "../components/CreatePostForm";
import PostFilter from "../components/PostFilter";
import PostItem from "../components/PostItem";
import Pagination from "../components/UI/pagination/Pagination";
import { usePosts } from "../hooks/usePosts";
import { createPost, deletePost } from "../store/postReducer" 
import { fetchPosts } from "../actions/fetchAPI";


function Posts() {

  const [postsLimit, setPostsLimit] = useState(10)  // кол-во статей на странице
  const [pagesAmount, setPagesAmount] = useState(10)  // кол-во страниц
  const [activePage, setActivePage] = useState(1)   // выбранная страница

  // filter.select отвечает за состояние нашего селектора сортировки, а filter.input за значение в поисковой строке
  const[filter, setFilter] = useState({select:'', input: ''})  

  const dispatch = useDispatch()
  const posts = useSelector(post => post.posts)

  useEffect(() => {
    dispatch(fetchPosts(postsLimit, activePage))
  }, [activePage])

  // передаём в наш хук посты и значения всех сортировщиков, записываем отсортированный массив
  const sortPostsSelectAndInput = usePosts(posts, filter.select, filter.input)

  const addPost = (newPost) => {
    dispatch(createPost(newPost))
  }

  const delPost = (post) => {
    dispatch(deletePost(post.id))
  }

  return (
    <div className="App">
      <CreatePostForm  createPost={addPost}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostItem posts={sortPostsSelectAndInput} deletePost={delPost}/>
      <Pagination
        pagesAmount={pagesAmount}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
}

export default Posts;
