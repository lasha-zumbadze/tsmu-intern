import { useAsideContext } from "../../context/AsideContext";

function BurgerMenu() {
  const { isOpenAside, setIsOpenAside } = useAsideContext();

  return (
    <div
      className="lg:hidden flex flex-col gap-1 cursor-pointer"
      onClick={() => setIsOpenAside((prev) => !prev)}
    >
      <div
        className={`w-5 transition-all h-[2.5px] bg-gray-600 ${
          isOpenAside && "w-6"
        }`}
      ></div>
      <div
        className={`w-3 transition-all h-[2.5px] bg-gray-600 ${
          isOpenAside && "w-6"
        }`}
      ></div>
      <div
        className={`w-5 transition-all h-[2.5px] bg-gray-600 ${
          isOpenAside && "w-6"
        }`}
      ></div>
    </div>
  );
}

export default BurgerMenu;
