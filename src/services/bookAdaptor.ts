import { BookService } from "../application/ports";
import { fakeApi } from "./api";

export function useBook(): BookService {
  return {
    checkoutBook: () => {
      return fakeApi(true);
    },
    returnBook: () => {
      return fakeApi(true);
    },
    searchBook: () => {
      return fakeApi([]);
    },
    checkoutList: () => {
      return fakeApi([]);
    },
  };
}
