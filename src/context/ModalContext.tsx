import { createContext, useContext, useEffect, useState } from "react";
import useCreatePost from "../hooks/useCreatePost";
import useDeletePost from "../hooks/useDeletePost";
import useEditPost from "../hooks/useEditPost";
import {
  ModalContextProviderProps,
  ModalContextType,
} from "../types/modalContextType";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  // Modal open states
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  // Modal Btn Disable
  const [btnDisable, setBtnDisable] = useState(false);

  // Modal content states
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [btnLabel, setBtnLabel] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [actionType, setActionType] = useState("");

  // Hooks for actions
  const { addPost, addingPost } = useCreatePost(setIsOpenAdd, setBtnDisable);
  const { editPost } = useEditPost(setIsOpenEdit, setBtnDisable);
  const { deletePost } = useDeletePost(setIsOpenDelete, setBtnDisable);

  // Handle escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setTitle("");
        setPost("");
        setIsOpenAdd(false);
        setIsOpenEdit(false);
        setIsOpenDelete(false);
      }
    };

    if (isOpenAdd || isOpenEdit || isOpenDelete) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    isOpenAdd,
    isOpenEdit,
    isOpenDelete,
    setIsOpenAdd,
    setIsOpenEdit,
    setIsOpenDelete,
    setTitle,
    setPost,
  ]);

  return (
    <ModalContext.Provider
      value={{
        btnDisable,
        setBtnDisable,
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
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}
