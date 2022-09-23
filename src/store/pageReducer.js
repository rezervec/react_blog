const defaultState = {
  page: []
}

export const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_POST_PAGE':
      return {...state, page: action.payload}
    default:
      return state
  }
}

export const getPostPageAction = (payload) => ({type: 'GET_POST_PAGE', payload})