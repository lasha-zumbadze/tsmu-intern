export type AsideContextType = {
  isOpenAside: boolean;
  setIsOpenAside: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AsideContextProviderProps = {
  children: React.ReactNode;
};
