import { UseMutateFunction } from "@tanstack/react-query";

export type ModalContextType = {
  btnDisable: boolean;
  setBtnDisable: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenAdd: boolean;
  isOpenEdit: boolean;
  isOpenDelete: boolean;
  setIsOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  btnLabel: string;
  modalTitle: string;
  actionType: string;
  setBtnLabel: React.Dispatch<React.SetStateAction<string>>;
  setModalTitle: React.Dispatch<React.SetStateAction<string>>;
  setActionType: React.Dispatch<React.SetStateAction<string>>;
  setPost: React.Dispatch<React.SetStateAction<string>>;
  post: string;
  deletePost: UseMutateFunction<Response, Error, string, unknown>;
  editPost: UseMutateFunction<
    void,
    Error,
    { postId: string; title: string; post: string },
    unknown
  >;
  addPost: UseMutateFunction<
    void,
    Error,
    { title: string; post: string },
    unknown
  >;
  addingPost: boolean;
};

export type ModalContextProviderProps = {
  children: React.ReactNode;
};
