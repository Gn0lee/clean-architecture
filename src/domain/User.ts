import { Book } from "./Book";

export interface User {
  name: string;
  id: UniqueId;
  checkOutList: Book["id"][];
  returnBackList: Book["id"][];
}
