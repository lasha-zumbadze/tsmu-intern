import { useParams } from "react-router";
import PostDetail from "../components/pages/posts/PostDetail";
import { Helmet } from "react-helmet-async";
import usePost from "../hooks/usePost";
import { useTranslation } from "react-i18next";

function Post() {
  const { id: postId } = useParams();
  const { post } = usePost(postId);
  const postTitle = post?.title.split(" ").slice(0, 3).join(" ");
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`${t("view.post.tabTitle")} | ${postTitle || ""}`}</title>
      </Helmet>
      <PostDetail />
    </>
  );
}

export default Post;
