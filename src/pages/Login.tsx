import React, { useState } from "react";
import { useAuth } from "../services/authAdaptor";
import { useNavigate } from "react-router-dom";
import { STORE_USER_KEY } from "../lib/key";
import { useStore } from "../services/storeAdaptor";

export default function Login() {
  const { login } = useAuth();

  const [id, setId] = useState("");

  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { save } = useStore();

  const navigate = useNavigate();

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const userKey = await login(id, password);

      const isSaveSuccess = save(STORE_USER_KEY, userKey);

      if (isSaveSuccess) {
        navigate("book/list");
      } else {
        throw Error("store error");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <h2 style={{ textAlign: "center" }}>서점</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" onChange={handleChangeId} value={id}/>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <label htmlFor="pwd">비밀번호</label>
            <input type="password" id="pwd" onChange={handleChangePassword} value={password} />
          </div>
          <button disabled={isLoading}>로그인</button>
        </form>
      </div>
    </div>
  );
}
