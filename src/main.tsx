import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.tsx";
import BookList from "./pages/BookList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/book/list" element={<BookList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
