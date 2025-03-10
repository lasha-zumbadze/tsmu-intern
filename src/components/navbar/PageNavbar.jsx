import { TfiWrite, TfiHome } from "react-icons/tfi";
import { SlGraduation } from "react-icons/sl";

import CustomNavLink from "../ui/CustomNavLink";

function PageNavbar() {
  return (
    <div>
      <div className="flex items-center gap-6">
        <h5 className="text-[#9faec5] text-md">Pages</h5>
        <div className="h-[0.5px] w-full bg-gray-300"></div>
      </div>
      <div className="mt-1 px-5">
        <CustomNavLink route="/">
          <span>
            <TfiHome />
          </span>
          Home
        </CustomNavLink>
        <CustomNavLink route="/faculty">
          <span>
            <SlGraduation />
          </span>
          Faculty
        </CustomNavLink>
        <CustomNavLink route="/posts">
          <span>
            <TfiWrite />
          </span>
          Posts
        </CustomNavLink>
      </div>
    </div>
  );
}

export default PageNavbar;
