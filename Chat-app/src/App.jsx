// import { useState } from 'react'

import "./App.css";
import PrivateRoutes from "./Components/PrivateRoutes";
import LoginPage from "./Pages/LoginPage";
import Room from "./Pages/Room";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
