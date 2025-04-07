import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div className="hidden bg-[#fdfdfd] border border-[#d9e2ec] rounded-full w-80 transition-all duration-300 overflow-hidden text-[#5e6e82] focus-within:border-blue-400 lg:flex items-center dark:bg-gray-800 dark:text-gray-50 ">
      <span className="pl-4 pr-1.5 flex justify-center text-lg text-[#90a0b4]">
        <HiOutlineMagnifyingGlass />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="pr-5 py-2  outline-none w-full text-lg"
      />
    </div>
  );
}

export default SearchBar;
