import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

import "./scss/app.scss";

function App() {
  return (
      <div>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
    </div>
  );
}

export default App;
