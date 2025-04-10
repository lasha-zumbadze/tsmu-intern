import { useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { EditModalProps } from "../../../types/facultyTypes";

function EditModal({
  facultyName,
  setFacultyName,
  setEditOpen,
  editOpen,
  index,
  dispatch,
}: EditModalProps) {
  const { t } = useTranslation();

  const handleEdit = () => {
    dispatch({
      type: "editFaculty",
      payload: { value: facultyName, id: index },
    });
    toast.success("Faculty updated successfully.");
    setEditOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setEditOpen(false);
      }
    };

    if (editOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [editOpen, setEditOpen]);

  return (
    <div>
      <div
        className="bg-[#0000008f] fixed top-0 left-0 w-full h-screen backdrop-blur-[2px] z-10"
        onClick={() => {
          setEditOpen(false);
        }}
      ></div>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-10 flex flex-col gap-5 rounded-md">
        <h3 className="text-2xl">
          {t("view.faculty.facultyModal.modalUpdate.modalTitle")}
        </h3>
        <input
          className="outline-2 outline-blue-200 px-2 py-2 w-80"
          type="text"
          value={facultyName}
          onChange={(e) => setFacultyName(e.target.value)}
          required
        />
        <div className="flex justify-between">
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all text-xl"
            onClick={() => setEditOpen(false)}
          >
            {t("view.faculty.facultyModal.btnCancel")}
          </button>
          <button
            className="text-gray-500 cursor-pointer border-b hover:text-gray-700 transition-all text-xl"
            onClick={() => {
              if (!facultyName) {
                return toast.error("Please fill the field.");
              }

              handleEdit();
            }}
          >
            {t("view.faculty.facultyModal.modalUpdate.btnUpdate")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
