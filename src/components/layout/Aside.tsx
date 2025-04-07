import { useAsideContext } from "../../context/AsideContext";
import Navbar from "./Navbar";

function Aside() {
  const { isOpenAside } = useAsideContext();

  return (
    <>
      <aside
        className={`col-start-1 col-end-3 lg:col-start-1 h-0 lg:h-[90vh] lg:col-end-2 lg:px-0 overflow-hidden dark:bg-gray-800 duration-500 transition-all fixed top-[10vh] bg-[#edf2f9f4] lg:bg-[#edf2f9] lg:static ${
          isOpenAside
            ? "w-full h-[90vh] left-0 px-10 md:px-30"
            : "w-full h-0 left-0 px-10 md:px-30"
        }`}
      >
        <Navbar />
      </aside>
    </>
  );
}

export default Aside;
