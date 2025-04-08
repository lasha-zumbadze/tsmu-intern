import { useParams } from "react-router";
import { useModalContext } from "../../context/ModalContext";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

type PostType = {
  title: string;
  body: string;
};

function ModalForm() {
  const { title, post, setTitle, setPost } = useModalContext();
  const { id: postId } = useParams();
  const queryClient = useQueryClient();
  const cachedPost = queryClient.getQueryData<PostType>(["post", postId]);
  const { t } = useTranslation();

  useEffect(() => {
    if (cachedPost) {
      setTitle(cachedPost.title);
      setPost(cachedPost.body);
    }
  }, [cachedPost]);

  return (
    <form
      id="modalForm"
      className="border border-gray-300 p-4 md:p-6 rounded-md flex flex-col gap-6 w-68 lg:w-96"
    >
      <div className="flex flex-col">
        <label htmlFor="title">{t("modal.modalForm.formTitle")}</label>
        <input
          className="border px-2 py-1 border-gray-300 rounded-md focus:outline-2 outline-blue-400 text-gray-600"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="post">{t("modal.modalForm.formBody")}</label>
        <textarea
          className="border border-gray-300 h-30 focus:outline-2 rounded-md outline-blue-400 text-gray-600 px-2 py-1"
          id="post"
          rows={4}
          value={post}
          onChange={(e) => setPost(e.target.value)}
          required
        />
      </div>
    </form>
  );
}

export default ModalForm;
