import { Book } from "../domain/Book";
import { User } from "../domain/User";

export type checkoutBooks = (userId: User, books: Book[]) => Promise<boolean>;

export type returnBooks = (userId: User, books: Book[]) => Promise<boolean>;

export type searchBook = (query: string) => Promise<Book[]>;
