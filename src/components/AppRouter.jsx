import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import { Context } from "../App";
import { useAuthState } from 'react-firebase-hooks/auth'


const AppRouter = () => {
  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    user 
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