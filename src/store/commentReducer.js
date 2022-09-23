const defaultState = {
  comment: []
}

export const commentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ALL_COMMENTS':
      return {...state, comment: [...action.payload]}
    default:
      return state
  }
}

export const getAllCommentsAction = (payload) => ({type: 'GET_ALL_COMMENTS', payload})