import { getAllCommentsAction } from "../store/commentReducer"
import { getPostPageAction } from "../store/pageReducer"
import { getAllPostsAction } from "../store/postReducer"

export const fetchPosts = (limit, page) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    .then(response => response.json())
    .then(json => dispatch(getAllPostsAction(json)))
  }
}

export const fetchPostPage = (id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => dispatch(getPostPageAction(json)))
  }
}

export const fetchComments = (id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(json => dispatch(getAllCommentsAction(json)))
  }
}