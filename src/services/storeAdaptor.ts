import { StoreService } from "../application/ports";

export function useStore(): StoreService {
  return {
    load: (key) => {
      return window.localStorage.getItem(key) || "";
    },
    save: (key, value) => {
      try {
        window.localStorage.setItem(key, value);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  };
}
