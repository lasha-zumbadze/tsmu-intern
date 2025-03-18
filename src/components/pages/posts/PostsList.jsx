import Error from "./PostErrorView";
import { Link } from "react-router";
import PostItem from "./PostItem";
import Modal from "../../modal/Modal";
import Pagination from "../../ui/Pagination";
import Loader from "../../ui/Loader";
import { usePostContext } from "../../../context/PostContext";
import { useTranslation } from "react-i18next";

function PostsList() {
  const { loadingPosts, dataPerPage, error } = usePostContext();
  const { t } = useTranslation();

  if (loadingPosts) return <Loader />;
  if (error)
    return (
      <Error error={error.message} redirectUrl="/" redirectLabel="Back Home" />
    );
  return (
    <div>
      <div className="border border-gray-200 p-5 bg-white rounded-md shadow-lg mb-2 flex">
        <h2 className="text-3xl font-semibold text-gray-700">
          {t("view.posts.pageTitle")}
        </h2>
        <div className="ml-auto">
          <Modal modalType="add" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dataPerPage.map((post, i) => (
          <div key={i}>
            <Link to={`${post.id}`}>
              <PostItem title={post.title} body={post.body} />
            </Link>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default PostsList;
