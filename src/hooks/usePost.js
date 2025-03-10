import { useQuery } from "@tanstack/react-query";

function usePost(postId) {
  const {
    isPending: loadingPost,
    data: post,
    error,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      if (!res.ok) throw new Error("Post not found");
      return await res.json();
    },
    retry: 1,
  });

  return { loadingPost, post, error };
}

export default usePost;
