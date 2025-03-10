import { useParams } from "react-router";
import PostErrorView from "./PostErrorView";
import Loader from "../../ui/Loader";
import Modal from "../../modal/Modal";
import usePost from "../../../hooks/usePost";
import Comments from "./Comments";
import blogBg from "../../../assets/blog-bg.webp";

function PostDetail() {
  const { id: postId } = useParams();
  const { loadingPost, post, error } = usePost(postId);

  if (loadingPost) return <Loader />;

  if (error)
    return (
      <PostErrorView
        error={error.message}
        additionLabel="You are trying to get post that does not exist..."
        redirectUrl="/posts"
        redirectLabel="See Posts"
      />
    );

  return (
    <div className="bg-gray-50 h-full overflow-auto">
      <img
        className="h-50 md:h-70 m-auto max-w-full p-3 md:p-0"
        src={blogBg}
        alt="blog post bg"
      />
      <div className="px-6 pt-6 flex flex-col gap-5 md:gap-10 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-2xl md:text-4xl font-semibold">{post.title}</h2>
        <p className="text-justify">{post.body}</p>
        <div className="md:px-5">
          <h3 className="text-gray-700 text-xl mb-3">Custom Story</h3>
          <div className="flex flex-col md:flex-row gap-10">
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem est placeat aliquam tempora voluptates doloremque qui
              nihil, architecto error dolores voluptas, atque blanditiis. Harum
              aspernatur, voluptatum minima veniam illum perspiciatis.
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem est placeat aliquam tempora voluptates doloremque qui
              nihil, architecto error dolores voluptas, atque blanditiis. Harum
              aspernatur, voluptatum minima veniam illum perspiciatis.
            </p>
          </div>
        </div>
      </div>

      <Modal />
      <Comments />
    </div>
  );
}

export default PostDetail;
