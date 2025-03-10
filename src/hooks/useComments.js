import { useQuery } from "@tanstack/react-query";

function useComments(postId) {
  const {
    isPending: loadingComments,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );

      if (!res.ok) throw new Error("Something went wrong. Comments not found.");

      return await res.json();
    },
  });

  return { loadingComments, comments, error };
}

export default useComments;
