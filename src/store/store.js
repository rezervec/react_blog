import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { commentReducer } from "./commentReducer"
import { pageReducer } from "./pageReducer"
import { postReducer } from "./postReducer"

const rootReducer = combineReducers({
  posts: postReducer,
  postPage: pageReducer,
  comments: commentReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))