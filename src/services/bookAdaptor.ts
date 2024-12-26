import { BookService } from "../application/ports";
import { Book } from "../domain/book";
import { User } from "../domain/user";
import { fakeApi } from "./api";
import { faker } from "@faker-js/faker";

const fakeCheckoutObject: Record<User["key"], Book[]> = {};

export function useBook(): BookService {
  return {
    checkoutBook: (key, book) => {
      if (!fakeCheckoutObject[key]) {
        fakeCheckoutObject[key] = [];
      } else {
        const existingBook = fakeCheckoutObject[key].find(
          (b) => b.id === book.id
        );
        if (!existingBook) {
          fakeCheckoutObject[key].push(book);
        } else {
          return fakeApi(false);
        }
      }

      return fakeApi(true);
    },
    returnBook: (key, book) => {
      const bookIndex = fakeCheckoutObject[key]?.findIndex(
        (b) => b.id === book.id
      );

      if (bookIndex !== undefined || bookIndex !== -1) {
        fakeCheckoutObject[key].splice(bookIndex, 1);
        return fakeApi(true);
      }

      return fakeApi(false);
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
    checkoutList: (key) => {
      return fakeApi(fakeCheckoutObject[key] || []);
    },
  };
}
