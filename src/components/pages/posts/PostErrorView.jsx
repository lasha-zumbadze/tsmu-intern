import { Link } from "react-router";
import error_itemNotFound from "../../../assets/item-error.svg";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function PostErrorView({ error, additionLabel, redirectUrl, redirectLabel }) {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 | {t("view.postNotFound.tabTitle")}</title>
      </Helmet>
      <div className="flex h-full bg-[#edf2f9] justify-center overflow-hidden">
        <div className="flex flex-col items-center mt-10">
          <img className="w-[20rem]" src={error_itemNotFound} alt="error svg" />
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col  items-center gap-2">
              <h2 className="text-3xl text-[#3E3E3E]">OOPS! {error}</h2>
              <p className="text-lg text-[#3E3E3E]">{additionLabel}</p>
            </div>
            <button>
              <Link
                onClick={() => console.clear()}
                className="bg-blue-500 hover:bg-blue-600 transition-all text-white text-2xl px-12 py-3 rounded-lg inset-shadow-indigo-600 shadow-2xl drop-shadow-lg divide-rose-950 w-fit"
                to={redirectUrl}
              >
                {redirectLabel}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostErrorView;
