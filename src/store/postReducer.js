const defaultState = {
  posts: []
}

export const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return {...state, posts: [...action.payload]}
    case 'DELETE_POST':
      return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
    case 'CREATE_POST':
      return {...state, posts: [...state.posts, action.payload]}
    default:
      return state
  }
}

export const getAllPosts = (payload) => ({type: 'GET_ALL_POSTS', payload})
export const deletePost = (payload) => ({type: 'DELETE_POST', payload})
export const createPost = (payload) => ({type: 'CREATE_POST', payload})