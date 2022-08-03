import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

import "./scss/app.scss";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
    </div>
  );
}

export default App;
