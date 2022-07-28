import { GlobalContext } from "./GlobalContext";

export interface GlobalContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps): JSX.Element => {
  return (
    <GlobalContext.Provider
      value={{
        phoneNumber: "",
        isCalling: true,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
