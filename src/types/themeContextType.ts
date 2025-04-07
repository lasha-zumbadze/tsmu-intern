export type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export type ThemeContextProviderProps = {
  children: React.ReactNode;
};
