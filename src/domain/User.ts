import { Book } from "./Book";

export interface User {
  name: string;
  id: string;
  checkOutList: Book[];
  returnBackList: Book[];
}
