import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from '../context/context'

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext)

  return (
    isAuth 
    ?
    <Routes>
      {publicRoutes.map(route =>
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      )}
    </Routes>
    :
    <Routes>
      {privateRoutes.map(route =>
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      )}
    </Routes>
  )
}

export default AppRouter