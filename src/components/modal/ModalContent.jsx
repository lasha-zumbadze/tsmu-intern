import { useParams } from "react-router";
import { useModalContext } from "../../context/ModalContext";
import toast from "react-hot-toast";
import { queryAction } from "../../utils/helpers";
import ModalForm from "./ModalForm";

const CANCEL_BTN =
  "rounded-md border border-gray-500 text-gray-600 text-lg w-28 md:w-36 hover:text-white hover:bg-red-400 cursor-pointer transition-all";

function ModalContent({ submitBtnStyle }) {
  const { id: postId } = useParams();

  const {
    setIsOpenAdd,
    setIsOpenEdit,
    setIsOpenDelete,
    setTitle,
    setPost,
    title,
    btnLabel,
    modalTitle,
    actionType,
    post,
    addPost,
    deletePost,
    editPost,
  } = useModalContext();

  function handleCloseModal() {
    setTitle("");
    setPost("");
    setIsOpenAdd(false);
    setIsOpenEdit(false);
    setIsOpenDelete(false);
  }

  return (
    <div>
      <div
        className="bg-[#0000008f] w-full h-screen fixed top-0 left-0 backdrop-blur-[2px]"
        onClick={handleCloseModal}
      ></div>
      <div className="rounded-md bg-gray-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center px-4 md:px-8 py-4 md:py-6 gap-4 md:gap-6">
        <h2 className="text-2xl text-gray-600 md:py-2">{modalTitle}</h2>
        {actionType !== "delete" && <ModalForm />}
        <div className="flex gap-10">
          <button className={CANCEL_BTN} onClick={handleCloseModal}>
            Cancel
          </button>
          <button
            form="modalForm"
            onClick={(e) => {
              e.preventDefault();

              queryAction(
                actionType,
                toast,
                title,
                post,
                postId,
                deletePost,
                addPost,
                editPost,
                setTitle,
                setPost
              );
            }}
            className={`${submitBtnStyle} ${
              (actionType === "add" || actionType === "edit") &&
              (!title || !post)
                ? "cursor-not-allowed"
                : "hover:bg-blue-600 cursor-pointer"
            }`}
            // type="submit"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
