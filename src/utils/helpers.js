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
  actionType,
  toast,
  title,
  post,
  postId,
  deletePost,
  addPost,
  editPost,
  setTitle,
  setPost,
  t
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
