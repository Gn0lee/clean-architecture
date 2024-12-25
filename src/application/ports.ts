import { Book } from "../domain/book";
import { User } from "../domain/user";

export interface NotificationService {
  notify: (message: string) => void;
}

export interface BookService {
  checkoutBook: (userId: User["id"], book: Book) => Promise<boolean>;
  returnBook: (userId: User["id"], book: Book) => Promise<boolean>;
  searchBook: (query: string) => Promise<Book[]>;
  checkoutList: (userId: User["id"]) => Promise<Book[]>;
}

export interface AuthService {
  login: (id: string, password: string) => Promise<User["id"]>;
  logout: (id: string) => Promise<boolean>;
}
