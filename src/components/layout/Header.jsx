import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaSun } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="col-start-1 col-end-3 grid grid-cols-2 lg:grid-cols-[18vw_1fr] h-[10vh] items-center border-b border-gray-200">
      <div className="w-44 md:w-48 lg:full">
        <Logo />
      </div>
      <div className="flex justify-between items-center lg:px-10 ml-auto lg:ml-0">
        <SearchBar />
        <div className="flex text-2xl text-gray-500 gap-4">
          <span className="cursor-pointer hover:translate-y-0.5 transition-all">
            <FaSun />
          </span>
          <span className="cursor-pointer hover:translate-y-0.5 transition-all">
            <HiMiniShoppingCart />
          </span>
          <span className="cursor-pointer hover:translate-y-0.5 transition-all">
            <IoNotificationsSharp />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
