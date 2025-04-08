import { UseMutateFunction } from "@tanstack/react-query";
import { t } from "i18next";
import toast from "react-hot-toast";

// Custom Random date for post items
export const getRandomDate = () => {
  const startDate = new Date(2000, 0, 1);
  const endDate = new Date();
  const date = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = String(date.getDate()).padStart(2, "0");

  return `${day} ${month} ${year}`;
};

// Global query action function
export const queryAction = (
  actionType: string,
  title: string,
  post: string,
  postId: string,
  deletePost: UseMutateFunction<Response, Error, string, unknown>,
  addPost: UseMutateFunction<
    void,
    Error,
    { title: string; post: string },
    unknown
  >,
  editPost: UseMutateFunction<
    void,
    Error,
    { postId: string; title: string; post: string },
    unknown
  >,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setPost: React.Dispatch<React.SetStateAction<string>>
) => {
  if (actionType === "delete") {
    deletePost(postId);
  } else if (actionType === "add") {
    if (!title || !post) {
      toast.error(t("toast.emptyFieldsError"));
    } else {
      addPost({ title, post });
      setTitle("");
      setPost("");
    }
  } else if (actionType === "edit") {
    if (!title || !post) {
      toast.error(t("toast.emptyFieldsError"));
    } else {
      editPost({ postId, title, post });
      // setTitle("");
      // setPost("");
    }
  }
};
