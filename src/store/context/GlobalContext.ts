import { createContext } from "react";

export interface IGlobalContext {
  phoneNumber: string;
  isCalling: boolean;
}

export const GlobalContext = createContext<IGlobalContext>({
  phoneNumber: "",
  isCalling: true,
});
