import About from "../pages/About"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import PostPage from "../pages/PostPage"
import Posts from "../pages/Posts"


export const publicRoutes = [
  {path: '/', element: <Posts/>},
  {path: '/about', element: <About/>},
  {path: '*', element: <NotFound/>},

  {path: '/post/:id', element: <PostPage/>},
  {path: '/login', element: <Posts/>},
]

export const privateRoutes = [
  {path: '/', element: <Posts/>},
  {path: '/about', element: <About/>},
  {path: '*', element: <NotFound/>},
  
  {path: '/login', element: <Login/>},
  {path: '/post/:id', element: <Login/>},
]