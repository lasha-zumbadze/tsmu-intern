import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { AddModalProps } from "../../../types/facultyTypes";

function AddModal({ setAddOpen, addOpen, dispatch }: AddModalProps) {
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation();

  const handleAdd = () => {
    dispatch({ type: "addFaculty", payload: { value: inputValue } });
    setInputValue("");
    toast.success("Faculty created successfully.");
    setAddOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setAddOpen(false);
      }
    };

    if (addOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [addOpen, setAddOpen]);

  return (
    <div>
      <div
        className="bg-[#0000008f] fixed top-0 left-0 w-full h-screen backdrop-blur-[2px] z-10"
        onClick={() => {
          setAddOpen(false);
        }}
      ></div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-10 rounded-md flex flex-col gap-5">
        <h3 className="text-2xl">
          {t("view.faculty.facultyModal.modalCreate.modalTitle")}
        </h3>

        <input
          className="outline-2 outline-blue-200 px-2 py-2 w-80"
          type="text"
          placeholder="Faculty name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all text-xl"
            onClick={() => setAddOpen(false)}
          >
            {t("view.faculty.facultyModal.btnCancel")}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!inputValue) {
                return toast.error("Please fill the field.");
              }

              handleAdd();
            }}
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all text-xl"
          >
            {t("view.faculty.facultyModal.btnCreate")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
