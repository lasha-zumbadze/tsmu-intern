import { useState } from "react";
import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import i18next from "i18next";
import ThemeToggleButton from "../ui/ThemeToggleBtn";

function Header() {
  const [lng, setLng] = useState(() =>
    (localStorage.getItem("i18nextLng") || "en").toUpperCase()
  );

  return (
    <header className="col-start-1 col-end-3 grid grid-cols-2 lg:grid-cols-[18vw_1fr] h-[10vh] items-center border-b border-gray-200 dark:border-none">
      <div className="w-44 md:w-48 lg:full">
        <Logo />
      </div>
      <div className="flex justify-between items-center lg:px-10 ml-auto lg:ml-0">
        <SearchBar />
        <div className="flex items-center text-2xl text-gray-500 gap-4">
          <ThemeToggleButton />
          <button
            className="bg-gray-500 text-white text-lg w-7 h-7 rounded-md cursor-pointer hover:-translate-y-0.5 transition-all dark:bg-gray-100 dark:text-gray-700"
            onClick={() => {
              const newLang = i18next.language === "en" ? "ge" : "en";
              i18next.changeLanguage(newLang);
              localStorage.setItem("i18nextLng", newLang);
              setLng(newLang.toUpperCase());
            }}
          >
            {lng}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
