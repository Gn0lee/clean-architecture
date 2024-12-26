import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.tsx";
import BookSearch from "./pages/BookSearch.tsx";
import BookLayout from "./components/BookLayout.tsx";
import BookCheckout from "./pages/BookCheckout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<BookLayout />}>
          <Route path="/book/search" element={<BookSearch />} />
          <Route path="/book/checkout" element={<BookCheckout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
