import React from "react"
import "./Assets/Scss/App.scss"
import Home from "./Components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DeletedItems from "./Components/DeletedItems/DeletedItems"
import Register from "./Components/Register/Register"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="deleted-items" element={<DeletedItems />} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </BrowserRouter>
  );
}