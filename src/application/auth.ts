import { User } from "../domain/User";

export type Login = ({
  id,
  password,
}: Pick<User, "id"> & { password: string }) => Promise<boolean>;

export type Logout = ({ id }: Pick<User, "id">) => Promise<boolean>;
