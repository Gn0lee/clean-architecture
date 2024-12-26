import { useBook } from "../services/bookAdaptor";
import { useNotifier } from "../services/notificationAdaptor";
import { useStore } from "../services/storeAdaptor";
import { useEffect, useState } from "react";
import { Book } from "../domain/book";
import { STORE_USER_KEY } from "../lib/key";

export default function BookCheckout() {
  const { getCheckoutList, returnBook } = useBook();
  const { notify } = useNotifier();
  const { load } = useStore();
  const userKey = load(STORE_USER_KEY);
  const [checkoutList, setCheckoutList] = useState<Book[]>([]);

  useEffect(() => {
    (async () => {
      const checkoutList = await getCheckoutList(userKey);
      setCheckoutList(checkoutList);
    })();
  }, [setCheckoutList, userKey]);

  console.log(checkoutList, "checkoutList");

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
        <h2>대출 현황</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {checkoutList.map((book) => {
            const { id, coverImageUrl, name, author } = book;
            const handleReturnBook = async () => {
              try {
                const isSuccess = await returnBook(userKey, book);
                if (!isSuccess) {
                  notify("반납 실패");
                } else {
                  notify("반납 성공");
                  const updatedCheckoutList = await getCheckoutList(userKey);
                  console.log(updatedCheckoutList);

                  setCheckoutList(updatedCheckoutList);
                }
              } catch (error) {
                notify("반납 실패");
              }
            };
            return (
              <div
                key={id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "8px",
                  border: "1px solid black",
                }}
              >
                <img
                  src={coverImageUrl}
                  alt={name}
                  style={{ width: "100px", height: "100px" }}
                />
                <span>{name}</span>
                <span>{author}</span>
                <button onClick={handleReturnBook}>반납</button>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <div>총 대여 권수 :</div>
          <div>{checkoutList.length}</div>
        </div>
      </div>
    </div>
  );
}
