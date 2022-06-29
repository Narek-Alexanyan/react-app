import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router/index";

const AppRouter = () => {
  const {isAuth} = useContext(AuthContext);
  return (
    <div>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={route.component}
              exact={route.exact}
              key={index}
            />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              path={route.path}
              element={route.component}
              exact={route.exact}
              key={index}
            />
          ))}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
