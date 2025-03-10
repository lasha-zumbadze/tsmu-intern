import { Helmet } from "react-helmet-async";
import PostsList from "../components/pages/posts/PostsList";

function Posts() {
  return (
    <>
      <Helmet>
        <title>Posts Page</title>
      </Helmet>
      <PostsList />
    </>
  );
}

export default Posts;
