import { Link } from "react-router";
import error_404 from "../assets/404-error.svg";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function ErrorPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 | {t("view.pageNotFound.tabTitle")}</title>
      </Helmet>
      <div className="flex h-screen bg-[#edf2f9] justify-center overflow-hidden dark:bg-gray-800">
        <div className="flex flex-col gap-16">
          <img className="w-xl" src={error_404} alt="error svg" />

          <div className="flex flex-col items-center gap-10">
            <h1 className="text-[#3E3E3E] dark:text-gray-50 text-center text-3xl">
              {t("view.pageNotFound.pageTitle")}
            </h1>

            <button>
              <Link
                onClick={() => console.clear()}
                className="bg-blue-500 hover:bg-blue-600 transition-all text-white text-2xl px-12 py-3 rounded-lg inset-shadow-indigo-600 shadow-2xl drop-shadow-lg divide-rose-950 w-fit"
                to="/"
              >
                {t("view.pageNotFound.btnLabel")}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
