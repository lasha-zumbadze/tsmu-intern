import { useParams } from "react-router";
import PostDetail from "../components/pages/posts/PostDetail";
import { Helmet } from "react-helmet-async";
import usePost from "../hooks/usePost";

function Post() {
  const { id: postId } = useParams();
  const { post } = usePost(postId);
  const postTitle = post?.title.split(" ").slice(0, 3).join(" ");

  return (
    <>
      <Helmet>
        <title>{`Post | ${postTitle || ""}`} </title>
      </Helmet>
      <PostDetail />
    </>
  );
}

export default Post;
