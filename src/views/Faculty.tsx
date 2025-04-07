import { Helmet } from "react-helmet-async";
import FacultyList from "../components/pages/faculty/FacultyList";
import { useTranslation } from "react-i18next";

function Faculty() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("view.faculty.tabTitle")}</title>
      </Helmet>
      <FacultyList />
    </>
  );
}

export default Faculty;
