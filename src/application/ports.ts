import { Book } from "../domain/book";
import { User } from "../domain/user";

export interface NotificationService {
  notify: (message: string) => void;
}

export interface BookService {
  checkoutBook: (userId: User["key"], book: Book) => Promise<boolean>;
  returnBook: (userId: User["key"], book: Book) => Promise<boolean>;
  searchBook: (query: string) => Promise<Book[]>;
  getCheckoutList: (userId: User["key"]) => Promise<Book[]>;
}

export interface AuthService {
  login: (id: string, password: string) => Promise<User["key"]>;
  logout: (id: string) => Promise<boolean>;
}

export interface StoreService<D = string> {
  save: (key: string, value: D) => boolean;
  load: (key: string) => D;
}
