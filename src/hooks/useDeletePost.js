import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function useDeletePost(setIsOpenDelete) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deletePost, isPending: deletingPost } = useMutation({
    mutationFn: async (postId) => {
      // Here I check if the item index is passed to the mutation function after form submit
      console.log(postId);

      return toast.promise(
        async () =>
          await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
          }),
        {
          loading: "Deleting post...",
          success: "Post deleted successfully!",
          error: "Failed to delete post.",
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      setIsOpenDelete(false);

      navigate("/posts", { replace: true });
    },
  });

  return { deletePost, deletingPost };
}

export default useDeletePost;
