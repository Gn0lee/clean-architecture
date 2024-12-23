import { Book } from "./book";

export interface User {
  name: string;
  id: UniqueId;
  checkOutList: Book[];
}

export const totalCheckoutNumber = (user: User) => {
  return user.checkOutList.length;
};

export const checkoutBook = (user: User, book: Book) => {
  return { ...user, checkoutBooks: [...user.checkOutList, book] };
};

export const returnBook = (user: User, book: Book) => {
  return {
    ...user,
    checkoutBooks: user.checkOutList.filter((el) => el.id !== book.id),
  };
};
