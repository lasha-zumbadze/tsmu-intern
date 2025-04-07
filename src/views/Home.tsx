import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("view.home.tabTitle")}</title>
      </Helmet>
      <div className="h-[85vh] text-5xl bg-gray-50 p-5 dark:bg-gray-700 dark:text-gray-50">
        {t("view.home.pageTitle")}
      </div>
    </>
  );
}

export default Home;
