import { createContext, useContext, useState } from "react";
import {
  AsideContextProviderProps,
  AsideContextType,
} from "../types/asideContextType";

const AsideContext = createContext<AsideContextType | undefined>(undefined);

export function AsideContextProvider({ children }: AsideContextProviderProps) {
  const [isOpenAside, setIsOpenAside] = useState(false);

  return (
    <AsideContext.Provider value={{ isOpenAside, setIsOpenAside }}>
      {children}
    </AsideContext.Provider>
  );
}

export function useAsideContext() {
  const context = useContext(AsideContext);
  if (!context) {
    throw new Error(
      "useAsideContext must be used within an AsideContextProvider"
    );
  }
  return context;
}
