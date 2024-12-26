import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.tsx";
import BookSearch from "./pages/BookSearch.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/book/search" element={<BookSearch />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
