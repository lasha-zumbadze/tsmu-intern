import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useThemeContext } from "../../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer hover:-translate-y-0.5 transition-all"
    >
      {theme === "dark" ? <FaSun className="text-white" /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggleButton;
