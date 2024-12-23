import { AuthService } from "../application/ports";
import { fakeApi } from "./api";

export function useAuth(): AuthService {
  return {
    login: (id) => {
      return fakeApi({ id, checkOutList: [], name: "fake name" });
    },
    logout: () => {
      return fakeApi(true);
    },
  };
}
