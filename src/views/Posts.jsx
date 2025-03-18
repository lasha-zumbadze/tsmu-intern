import { Helmet } from "react-helmet-async";
import PostsList from "../components/pages/posts/PostsList";
import { useTranslation } from "react-i18next";

function Posts() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("view.posts.tabTitle")}</title>
      </Helmet>
      <PostsList />
    </>
  );
}

export default Posts;
