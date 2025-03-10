import { useModalContext } from "../../context/ModalContext";
import { useEffect } from "react";
import ModalContent from "./ModalContent";

const MAIN_BTN =
  "rounded-md border border-gray-500 bg-blue-400 text-lg w-28 md:w-36 py-3 text-white transition-all";

const SECONDARY_BTN =
  "border border-gray-300 w-20 md:w-28 py-1.5 text-blue-500 bg-white rounded-md text-lg cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md";

function Modal({ modalType }) {
  const {
    setBtnLabel,
    setModalTitle,
    setActionType,
    setTitle,
    setPost,
    isOpenAdd,
    isOpenEdit,
    isOpenDelete,
    setIsOpenAdd,
    setIsOpenDelete,
    setIsOpenEdit,
  } = useModalContext();

  useEffect(() => {
    const handleKeyDown = (e) => {
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
    <>
      {modalType === "add" ? (
        <button
          onClick={() => {
            setActionType("add");
            setBtnLabel("Create Post");
            setModalTitle("Create New Post");
            setIsOpenAdd(true);
          }}
          className={`${MAIN_BTN} cursor-pointer hover:bg-blue-600`}
        >
          Create Post
        </button>
      ) : (
        <div className="flex justify-between m-10 items-center">
          <button
            onClick={() => {
              setActionType("delete");
              setBtnLabel("Delete");
              setModalTitle("Are you sure you want to delete the post?");
              setIsOpenDelete(true);
            }}
            className={`${SECONDARY_BTN} shadow-red-300`}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setActionType("edit");
              setBtnLabel("Save");
              setModalTitle("Update Post");
              setIsOpenEdit(true);
            }}
            className={`${SECONDARY_BTN} shadow-blue-400`}
          >
            Update
          </button>
        </div>
      )}

      {(isOpenAdd || isOpenEdit || isOpenDelete) && (
        <ModalContent submitBtnStyle={MAIN_BTN} />
      )}
    </>
  );
}

export default Modal;
