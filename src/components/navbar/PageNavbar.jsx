import { TfiWrite, TfiHome } from "react-icons/tfi";
import { SlGraduation } from "react-icons/sl";

import CustomNavLink from "../ui/CustomNavLink";
import { useTranslation } from "react-i18next";

function PageNavbar() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex items-center gap-6">
        <h5 className="text-[#9faec5] text-md">
          {t("navigation.pages.title")}
        </h5>
        <div className="h-[0.5px] w-full bg-gray-300"></div>
      </div>
      <div className="mt-1 px-5">
        <CustomNavLink route="/">
          <span>
            <TfiHome />
          </span>
          {t("navigation.pages.home")}
        </CustomNavLink>
        <CustomNavLink route="/faculty">
          <span>
            <SlGraduation />
          </span>
          {t("navigation.pages.faculty")}
        </CustomNavLink>
        <CustomNavLink route="/posts">
          <span>
            <TfiWrite />
          </span>
          {t("navigation.pages.posts")}
        </CustomNavLink>
      </div>
    </div>
  );
}

export default PageNavbar;
