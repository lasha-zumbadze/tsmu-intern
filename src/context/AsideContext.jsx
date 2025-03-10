import { createContext, useContext, useState } from "react";

const AsideContext = createContext();

export function AsideContextProvider({ children }) {
  const [isOpenAside, setIsOpenAside] = useState(false);

  return (
    <AsideContext.Provider value={{ isOpenAside, setIsOpenAside }}>
      {children}
    </AsideContext.Provider>
  );
}

export function useAsideContext() {
  return useContext(AsideContext);
}
