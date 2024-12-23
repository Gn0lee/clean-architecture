import { Book } from "./book";

export interface User {
  name: string;
  id: UniqueId;
  checkOutList: Book[];
}

export const totalCheckoutNumber = (user: User) => {
  return user.checkOutList.length;
};
