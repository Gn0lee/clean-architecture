import { useBook } from "../services/bookAdaptor";

import { useEffect, useState } from "react";
import { Book } from "../domain/book";
import { STORE_USER_KEY } from "../lib/key";
import { useStore } from "../services/storeAdaptor";
import { useNotifier } from "../services/notificationAdaptor";

export default function BookSearch() {
  const { searchBook, checkoutBook } = useBook();

  const { notify } = useNotifier();

  const { load } = useStore();

  const userKey = load(STORE_USER_KEY);

  const [bookList, setBookList] = useState<Book[]>([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const searchResult = await searchBook(searchQuery);

      setBookList(searchResult);
    })();
  }, [setBookList, searchQuery]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h2>책 목록</h2>
        <div style={{ display: "flex", gap: "16px" }}>
          <label>책 검색</label>
          <input
            value={searchQuery}
            onChange={handleSearchQuery}
            style={{ maxWidth: "200px" }}
            name="책 검색"
          />
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {bookList.map((book) => {
            const { id, coverImageUrl, name, author } = book;

            const handleCheckoutBook = async () => {
              const isSuccess = await checkoutBook(userKey, book);

              if (!isSuccess) {
                notify("이미 대출한 책입니다.");
              } else {
                notify("대출 성공");
              }
            };

            return (
              <div
                key={id}
                style={{
                  background: "",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  overflow: "hidden",
                  border: "1px solid gray",
                  padding: "8px",
                }}
              >
                <img src={coverImageUrl} alt={name} />
                <p>제목: {name}</p>
                <p>작가: {author}</p>
                <button type="button" onClick={handleCheckoutBook}>
                  대여하기
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
