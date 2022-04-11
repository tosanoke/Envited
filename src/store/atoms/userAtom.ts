import { atom } from "recoil";
import { USER_ATOM } from "../../constants/configs/keys";
import { credentials } from "../initialState/credentials";

export const userAtom = atom({
  key: USER_ATOM,
  default: { ...credentials },
});
