import { AuthService } from "../application/ports";
import { fakeApi } from "./api";

export function useAuth(): AuthService {
  return {
    login: () => {
      return fakeApi("fake id");
    },
    logout: () => {
      return fakeApi(true);
    },
  };
}
