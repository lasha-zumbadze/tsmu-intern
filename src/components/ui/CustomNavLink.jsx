import { NavLink } from "react-router";
import { useAsideContext } from "../../context/AsideContext";

function CustomNavLink({ children, route, textSize }) {
  const { setIsOpenAside } = useAsideContext();

  return (
    <NavLink
      onClick={() => setIsOpenAside(false)}
      className={({ isActive }) =>
        `flex items-center gap-2 transition-all duration-300 font-semibold py-1 text-${textSize} ${
          isActive
            ? "text-blue-500 hover:text-blue-500"
            : "text-[#5e6e82] dark:text-gray-200 dark:hover:text-gray-300 dark:hover:underline hover:text-[#181d23]"
        }`
      }
      to={route}
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
