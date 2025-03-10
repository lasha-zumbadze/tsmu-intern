import { IoIosArrowDown } from "react-icons/io";
import CustomNavLink from "./CustomNavLink";
import { useState } from "react";

function Accordion({ title, routeData, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="cursor-pointer flex items-center gap-2 py-1 transition-all text-[#5e6e82] hover:text-[#181d23]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        {title}
        <span
          className={`ml-auto text-sm transition-all duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          <IoIosArrowDown />
        </span>
      </div>

      <div
        className={`pl-6 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {routeData.map((route, i) => (
          <CustomNavLink textSize="sm" route={`/${route}`} key={i}>
            {route}
          </CustomNavLink>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
