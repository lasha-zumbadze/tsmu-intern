import { createContext, useContext, useState } from "react";
import useCreatePost from "../hooks/useCreatePost";
import useDeletePost from "../hooks/useDeletePost";
import useEditPost from "../hooks/useEditPost";

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  // Modal open states
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  // Modal content states
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [btnLabel, setBtnLabel] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [actionType, setActionType] = useState("");

  // Hooks for actions
  const { addPost, addingPost } = useCreatePost(setIsOpenAdd);
  const { editPost } = useEditPost(setIsOpenEdit);
  const { deletePost } = useDeletePost(setIsOpenDelete);

  return (
    <ModalContext.Provider
      value={{
        isOpenAdd,
        isOpenEdit,
        isOpenDelete,
        setIsOpenAdd,
        setIsOpenDelete,
        setIsOpenEdit,
        title,
        setTitle,
        btnLabel,
        modalTitle,
        actionType,
        setBtnLabel,
        setModalTitle,
        setActionType,
        post,
        deletePost,
        editPost,
        setPost,
        addPost,
        addingPost,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
