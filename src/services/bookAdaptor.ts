import { BookService } from "../application/ports";
import { Book } from "../domain/book";
import { fakeApi } from "./api";
import { faker } from "@faker-js/faker";

export function useBook(): BookService {
  return {
    checkoutBook: () => {
      return fakeApi(true);
    },
    returnBook: () => {
      return fakeApi(true);
    },
    searchBook: () => {
      const fakeList: Book[] = Array.from({ length: 10 }).map(() => ({
        id: faker.string.nanoid(),
        name: faker.book.title(),
        author: faker.book.publisher(),
        coverImageUrl: faker.image.url({ width: 200, height: 200 }),
      }));

      return fakeApi(fakeList);
    },
    checkoutList: () => {
      return fakeApi([]);
    },
  };
}
