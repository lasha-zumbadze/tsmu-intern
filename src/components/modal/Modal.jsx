import { useModalContext } from "../../context/ModalContext";
import { useEffect } from "react";
import ModalContent from "./ModalContent";
import { useTranslation } from "react-i18next";

const MAIN_BTN =
  "rounded-md border border-gray-500 bg-blue-400 text-lg w-28 md:w-36 py-3 text-white transition-all";

const SECONDARY_BTN =
  "border border-gray-300 w-20 md:w-28 py-1.5 text-blue-500 bg-white rounded-md text-lg cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md";

function Modal({ modalType }) {
  const { t } = useTranslation();

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
            setBtnLabel(`${t("modal.modalCreate.btnCreate")}`);
            setModalTitle(`${t("modal.modalCreate.modalTitle")}`);
            setIsOpenAdd(true);
          }}
          className={`${MAIN_BTN} cursor-pointer hover:bg-blue-600`}
        >
          {t("modal.btnCreate")}
        </button>
      ) : (
        <div className="flex justify-between m-10 items-center">
          <button
            onClick={() => {
              setActionType("delete");
              setBtnLabel(`${t("modal.modalDelete.btnDelete")}`);
              setModalTitle(`${t("modal.modalDelete.modalTitle")}`);
              setIsOpenDelete(true);
            }}
            className={`${SECONDARY_BTN} shadow-red-300`}
          >
            {t("modal.btnDelete")}
          </button>
          <button
            onClick={() => {
              setActionType("edit");
              setBtnLabel(`${t("modal.modalUpdate.btnUpdate")}`);
              setModalTitle(`${t("modal.modalUpdate.modalTitle")}`);
              setIsOpenEdit(true);
            }}
            className={`${SECONDARY_BTN} shadow-blue-400`}
          >
            {t("modal.btnUpdate")}
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
