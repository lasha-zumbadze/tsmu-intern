import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useCreatePost(setIsOpenAdd, t, setBtnDisable) {
  const queryClient = useQueryClient();

  const { mutate: addPost, isPending: addingPost } = useMutation({
    mutationFn: async (newPost) => {
      const { title, post: body } = newPost;

      // Here I check if the data is pass to the mutation function after form submit
      console.log(newPost);

      return toast.promise(
        async () => {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              body: JSON.stringify({ title, body }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          );

          await res.json();
        },
        {
          loading: `${t("toast.createPost.loading")}`,
          success: `${t("toast.createPost.success")}`,
          error: `${t("toast.createPost.error")}`,
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });

      setBtnDisable(false);
      setIsOpenAdd(false);
    },
  });

  return { addPost, addingPost };
}

export default useCreatePost;
