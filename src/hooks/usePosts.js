import { useQuery } from "@tanstack/react-query";

function usePosts() {
  const {
    isPending: loadingPosts,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) throw new Error("Something went wrong. Try again...");

      return await res.json();
    },
  });

  return { loadingPosts, posts, error };
}

export default usePosts;
