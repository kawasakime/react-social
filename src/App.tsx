import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import UsersList from "./components/UsersList";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

import "./scss/app.scss";

function App() {
  const isAuth = useAuth().isAuth;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route path="/users" element={<UsersList />} />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="/registration"
          element={isAuth ? <Navigate to="/" replace /> : <Registration />}
        />
      </Routes>
    </>
  );
}

export default App;
