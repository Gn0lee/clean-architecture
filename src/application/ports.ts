import { Book } from "../domain/book";
import { User } from "../domain/user";

export interface NotificationService {
  notify: (message: string) => void;
}

export interface BookService {
  checkoutBooks: (userId: User, books: Book[]) => Promise<boolean>;
  returnBooks: (userId: User, books: Book[]) => Promise<boolean>;
  searchBook: (query: string) => Promise<Book[]>;
}

export interface AuthService {
  login: (id: string, password: string) => Promise<User>;
  logout: (id: string) => Promise<boolean>;
}
