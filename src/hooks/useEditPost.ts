import { useMutation, useQueryClient } from "@tanstack/react-query";
import { t } from "i18next";
import toast from "react-hot-toast";

function useEditPost(
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>,
  setBtnDisable: React.Dispatch<React.SetStateAction<boolean>>
) {
  const queryClient = useQueryClient();

  const { mutate: editPost, isPending: editingPost } = useMutation({
    mutationFn: async ({
      postId,
      ...newData
    }: {
      postId: string;
      title: string;
      body: string;
    }) => {
      // Here I check if the item index and data is pass to the mutation function after form submit
      console.log(postId, newData);

      return toast.promise(
        async () => {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
              method: "PUT",
              body: JSON.stringify(newData),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          );
          await res.json();
        },
        {
          loading: `${t("toast.editPost.loading")}`,
          success: `${t("toast.editPost.success")}`,
          error: `${t("toast.editPost.error")}`,
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts", "post"],
      });

      setBtnDisable(false);
      setIsOpenEdit(false);
    },
  });

  return { editPost, editingPost };
}

export default useEditPost;
