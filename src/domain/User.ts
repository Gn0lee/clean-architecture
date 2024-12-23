import { Book } from "./book";

export interface User {
  name: string;
  id: UniqueId;
  checkOutList: Book[];
  returnBackList: Book[];
}
