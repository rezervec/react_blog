import { getAllPosts } from "../store/postReducer"

export const fetchPosts = (limit, page) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    .then(response => response.json())
    .then(json => dispatch(getAllPosts(json)))
  }
}