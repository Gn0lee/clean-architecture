import { Outlet, NavLink } from "react-router-dom";

export default function BookLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        padding: "32px",
      }}
    >
      <h1>Book Store</h1>
      <nav style={{ alignSelf: "flex-end", display: "flex", gap: "16px" }}>
        <NavLink to="/book/search">책 검색</NavLink>
        <NavLink to="/book/checkout">대출 현황</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
