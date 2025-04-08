import { useMutation, useQueryClient } from "@tanstack/react-query";
import { t } from "i18next";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function useDeletePost(
  setIsOpenDelete: React.Dispatch<React.SetStateAction<boolean>>,
  setBtnDisable: React.Dispatch<React.SetStateAction<boolean>>
) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: deletePost, isPending: deletingPost } = useMutation({
    mutationFn: async (postId: string) => {
      // Here I check if the item index is passed to the mutation function after form submit
      console.log(postId);

      toast.promise(
        async () =>
          await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
          }),
        {
          loading: `${t("toast.deletePost.loading")}`,
          success: `${t("toast.deletePost.success")}`,
          error: `${t("toast.deletePost.error")}`,
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      setBtnDisable(false);
      setIsOpenDelete(false);

      navigate("/posts", { replace: true });
    },
  });

  return { deletePost, deletingPost };
}

export default useDeletePost;
