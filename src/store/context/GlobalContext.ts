import { createContext } from "react";

export interface IPhoneContext {
  phoneNumber: string;
  isCalling: boolean;
}

export const GlobalContext = createContext<IPhoneContext>({
  phoneNumber: "",
  isCalling: true,
});
